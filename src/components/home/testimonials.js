import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
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

function getInitials(name = '') {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
}

export default function Testimonials() {
    const items = testimonialsData || [];
    const reviewCount = items.length;
    const averageRating = reviewCount
        ? (items.reduce((sum, item) => sum + Number(item.rating || 5), 0) / reviewCount).toFixed(1)
        : '5.0';

    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        function updateItemsPerPage() {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        }
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    useEffect(() => {
        if (currentPage >= totalPages && totalPages > 0) {
            setCurrentPage(totalPages - 1);
        }
    }, [itemsPerPage, totalPages, currentPage]);

    const startIndex = currentPage * itemsPerPage;
    const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Full JSON-LD schema preserved
    const reviewsJsonLd = items.length > 0
        ? {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Anagh K R - Freelance Web Developer & Flutter Developer Kerala',
            image: 'https://www.anaghkr.in/assets/about.webp',
            priceRange: '₹₹',
            telephone: '+918281571805',
            url: 'https://www.anaghkr.in/',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kasaragod',
                addressRegion: 'Kerala',
                addressCountry: 'IN'
            },
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

    return (
        <section className="relative py-14 sm:py-20 md:py-24 overflow-hidden" id="testimonials" aria-labelledby="reviews-heading">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header - glides in from TOP via GSAP */}
                <div className="text-center mb-10 md:mb-16" data-gsap="from-top">
                    <h2 id="reviews-heading" className="text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Reviews</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
                        Real feedback from web development and Flutter app development clients across Kerala and beyond.
                    </p>

                    {/* Trust Summary Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <Stars rating={5} />
                            <span className="text-white font-bold text-xs sm:text-sm">{averageRating} / 5.0</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <CheckCircle2 size={14} className="text-emerald-400" />
                            <span>100% Verified Reviews</span>
                        </div>
                        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>{reviewCount} Client Reviews</span>
                        </div>
                    </div>
                </div>

                {/* Instant-Responsive Review Cards Grid - glides in from BOTTOM via GSAP */}
                <div className="relative min-h-[300px]" data-gsap="from-bottom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-stretch transition-opacity duration-200">
                        {visibleItems.map((item, index) => {
                            const quote = item.quote || '';

                            return (
                                <article
                                    key={`${item.name}-${startIndex + index}`}
                                    className="h-full p-6 sm:p-8 rounded-[32px] bg-white/[0.04] border border-white/10 hover:border-blue-500/30 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
                                    itemScope
                                    itemType="https://schema.org/Review"
                                >
                                    <meta itemProp="datePublished" content="2026-01-01" />
                                    <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                                        <meta itemProp="ratingValue" content={String(Number(item.rating || 5))} />
                                        <meta itemProp="bestRating" content="5" />
                                    </div>

                                    {/* Review Header: Avatar, Name, Role, Verified Badge */}
                                    <div>
                                        <div className="flex items-center justify-between gap-3 mb-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-sm group-hover:scale-105 transition-transform duration-200">
                                                    {getInitials(item.name)}
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight" itemProp="author" itemScope itemType="https://schema.org/Person">
                                                        <span itemProp="name">{item.name}</span>
                                                    </h3>
                                                    <p className="text-gray-400 text-xs mt-0.5">
                                                        {item.role} {item.location ? `, ${item.location}` : ''}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider shrink-0">
                                                <CheckCircle2 size={11} />
                                                <span>Verified</span>
                                            </span>
                                        </div>

                                        {/* Rating & Quote Icon */}
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Stars rating={item.rating || 5} />
                                                <span className="text-[11px] font-bold text-gray-400">
                                                    {Number(item.rating || 5).toFixed(1)}
                                                </span>
                                            </div>
                                            <Quote size={18} className="text-blue-400/30 group-hover:text-blue-400 transition-colors duration-200" />
                                        </div>

                                        {/* Quote Text */}
                                        <p
                                            itemProp="reviewBody"
                                            className="text-gray-300 text-sm sm:text-[15px] leading-relaxed line-clamp-6"
                                        >
                                            {`"${quote}"`}
                                        </p>
                                    </div>

                                    <div itemProp="itemReviewed" itemScope itemType="https://schema.org/ProfessionalService">
                                        <meta itemProp="name" content="Anagh K R - Freelance Flutter and Web Developer" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Controls with Instant Switching */}
                {totalPages > 1 && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                                aria-label="Previous reviews"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentPage(idx)}
                                        className={`h-2 rounded-full transition-all duration-200 ${
                                            idx === currentPage
                                                ? 'w-7 bg-blue-500 shadow-md shadow-blue-500/50'
                                                : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                        aria-label={`Go to review page ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                                aria-label="Next reviews"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                        <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                    </div>
                )}
            </div>

            {/* Structured Data Script Tag for SEO */}
            {reviewsJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
                />
            )}
        </section>
    );
}