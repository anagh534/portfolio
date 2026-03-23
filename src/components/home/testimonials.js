'use client';

import React, { useEffect, useState } from 'react';
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
        <section className="relative py-24 overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                        <MessageSquareQuote size={14} />
                        <span>Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Say</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Feedback from clients across Kerala and beyond on web and Flutter app development projects.
                    </p>
                </motion.div>

                {loading && (
                    <p className="text-center text-gray-400">Loading testimonials...</p>
                )}

                {!loading && error && (
                    <p className="text-center text-red-300">{error}</p>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item, index) => {
                            const quote = item.quote || '';

                            return (
                                <motion.article
                                    key={`${item.name}-${index}`}
                                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                >
                                    <Stars rating={item.rating || 5} />

                                    <div className="relative mt-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-white/[0.06] to-transparent px-5 py-5">
                                        <span className="absolute -top-2 left-4 text-blue-300/70 text-lg">"</span>
                                        <p
                                            className="max-h-48 overflow-y-auto pr-3 text-gray-100 leading-7 text-[15px] [scrollbar-width:thin] [scrollbar-color:rgba(96,165,250,0.55)_rgba(255,255,255,0.08)]"
                                            style={{ WebkitOverflowScrolling: 'touch' }}
                                        >
                                            {quote}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <p className="text-white font-bold uppercase tracking-wide text-sm">{item.name}</p>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mt-1">
                                            {item.role} {item.location ? `, ${item.location}` : ''}
                                        </p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}