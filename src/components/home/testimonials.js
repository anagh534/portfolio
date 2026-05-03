import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Star } from 'lucide-react';

function Stars({ rating = 5 }) {
    return (
        <div className="flex items-center gap-1" aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                    key={idx}
                    size={14}
                    className={idx < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const reviewCount = items.length;
    const averageRating = reviewCount
        ? (items.reduce((sum, item) => sum + Number(item.rating || 5), 0) / reviewCount).toFixed(1)
        : '5.0';

    const reviewSchema = reviewCount
        ? {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Anagh K R - Freelance Flutter and Web Developer',
            areaServed: 'Kerala, India',
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: averageRating,
                reviewCount
            },
            review: items.map((item) => ({
                '@type': 'Review',
                author: {
                    '@type': 'Person',
                    name: item.name
                },
                reviewBody: item.quote,
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: Number(item.rating || 5),
                    bestRating: 5
                }
            }))
        }
        : null;

    useEffect(() => {
        let mounted = true;

        async function loadTestimonials() {
            try {
                const response = await fetch('/data/testimonials.json', { cache: 'no-store' });
                if (!response.ok) {
                    throw new Error(`Failed to load testimonials: ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error('Testimonials data is not an array');
                }

                if (mounted) {
                    setItems(data);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err.message : 'Unable to load testimonials');
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        loadTestimonials();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <section className="relative py-24 overflow-hidden" id="testimonials" aria-labelledby="reviews-heading">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <MessageSquareQuote size={14} />
                        <span>Client Reviews</span>
                    </div>
                    <h2 id="reviews-heading" className="text-4xl md:text-5xl font-black text-white mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Reviews</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
                        Real feedback from web development and Flutter app development clients across Kerala and beyond.
                    </p>
                    {!loading && !error && reviewCount > 0 && (
                        <p className="mt-4 text-sm text-gray-300">
                            Rated {averageRating}/5 based on {reviewCount} verified client reviews.
                        </p>
                    )}
                </motion.div>

                {loading && (
                    <p className="text-center text-gray-400">Loading testimonials...</p>
                )}

                {!loading && error && (
                    <p className="text-center text-red-300">{error}</p>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {items.map((item, index) => {
                            const quote = item.quote || '';

                            return (
                                <motion.article
                                    key={`${item.name}-${index}`}
                                    className="h-full p-7 rounded-[30px] bg-gradient-to-b from-white/10 via-white/[0.05] to-white/[0.03] border border-white/10 hover:border-blue-400/40 transition-all duration-500 shadow-[0_16px_50px_-24px_rgba(37,99,235,0.55)] flex flex-col"
                                    itemScope
                                    itemType="https://schema.org/Review"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -6 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <meta itemProp="datePublished" content="2026-01-01" />
                                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                        <meta itemProp="ratingValue" content={String(Number(item.rating || 5))} />
                                        <meta itemProp="bestRating" content="5" />
                                    </div>

                                    <div className="flex items-center justify-between gap-3">
                                        <Stars rating={item.rating || 5} />
                                        <span className="inline-flex items-center rounded-full bg-blue-500/15 border border-blue-400/25 px-2.5 py-1 text-[10px] font-bold text-blue-200 tracking-wider">
                                            {Number(item.rating || 5).toFixed(1)} / 5
                                        </span>
                                    </div>

                                    <div className="relative mt-5 rounded-2xl border border-white/10 bg-slate-950/40 px-5 py-5 flex-1">
                                        <MessageSquareQuote size={20} className="absolute right-4 top-4 text-blue-300/20" />
                                        <p
                                            itemProp="reviewBody"
                                            className="max-h-52 overflow-y-auto pr-2 text-gray-100 leading-7 text-[15px] [scrollbar-width:thin] [scrollbar-color:rgba(96,165,250,0.55)_rgba(255,255,255,0.08)]"
                                            style={{ WebkitOverflowScrolling: 'touch' }}
                                        >
                                            {`"${quote}"`}
                                        </p>
                                    </div>

                                    <div className="mt-5 pt-5 border-t border-white/10">
                                        <p className="text-white font-bold uppercase tracking-[0.08em] text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                                            <span itemProp="name">{item.name}</span>
                                        </p>
                                        <p className="text-gray-400 text-xs uppercase tracking-[0.16em] mt-1">
                                            {item.role} {item.location ? `, ${item.location}` : ''}
                                        </p>
                                        <meta itemProp="itemReviewed" content={item.role || 'Web and Flutter app development service'} />
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}

                {!loading && !error && reviewSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
                    />
                )}
            </div>
        </section>
    );
}