import { motion } from 'framer-motion';
import { MessageSquareQuote, Star } from 'lucide-react';
import testimonialsData from '../../../public/data/testimonials.json';

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
    const items = testimonialsData || [];
    const reviewCount = items.length;
    const averageRating = reviewCount
        ? (items.reduce((sum, item) => sum + Number(item.rating || 5), 0) / reviewCount).toFixed(1)
        : '5.0';

    const reviewSchema = reviewCount
        ? {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Anagh K R - Freelance Flutter and Web Developer',
            areaServed: [
                { "@type": "State", "name": "Kerala" },
                { "@type": "City", "name": "Thiruvananthapuram" },
                { "@type": "City", "name": "Kollam" },
                { "@type": "City", "name": "Pathanamthitta" },
                { "@type": "City", "name": "Alappuzha" },
                { "@type": "City", "name": "Kottayam" },
                { "@type": "City", "name": "Idukki" },
                { "@type": "City", "name": "Ernakulam" },
                { "@type": "City", "name": "Kochi" },
                { "@type": "City", "name": "Thrissur" },
                { "@type": "City", "name": "Palakkad" },
                { "@type": "City", "name": "Malappuram" },
                { "@type": "City", "name": "Kozhikode" },
                { "@type": "City", "name": "Wayanad" },
                { "@type": "City", "name": "Kannur" },
                { "@type": "City", "name": "Kasaragod" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "City", "name": "Dubai" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Oman" },
                { "@type": "Country", "name": "Qatar" },
                { "@type": "City", "name": "Chennai" },
                { "@type": "City", "name": "Coimbatore" },
                { "@type": "City", "name": "Mangalore" }
            ],
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="relative py-24 overflow-hidden" id="testimonials" aria-labelledby="reviews-heading">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2 id="reviews-heading" className="text-4xl md:text-5xl font-black text-white mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Reviews</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
                        Real feedback from web development and Flutter app development clients across Kerala and beyond.
                    </p>
                    {reviewCount > 0 && (
                        <p className="mt-4 text-sm text-gray-300">
                            Rated {averageRating}/5 based on {reviewCount} verified client reviews.
                        </p>
                    )}
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                >
                    {items.map((item, index) => {
                        const quote = item.quote || '';

                        return (
                            <motion.article
                                key={`${item.name}-${index}`}
                                className="h-full p-7 rounded-[30px] bg-gradient-to-b from-white/10 via-white/[0.05] to-white/[0.03] border border-white/10 hover:border-blue-400/40 transition-all duration-500 shadow-[0_16px_50px_-24px_rgba(37,99,235,0.55)] flex flex-col"
                                itemScope
                                itemType="https://schema.org/Review"
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
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
                                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/ProfessionalService">
                                        <meta itemProp="name" content="Anagh K R - Freelance Flutter and Web Developer" />
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {reviewSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
                    />
                )}
            </div>
        </section>
    );
}