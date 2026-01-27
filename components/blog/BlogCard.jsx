'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogCard({ post, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card overflow-hidden group h-full flex flex-col"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={post.image || 'https://images.unsplash.com/photo-1499750310159-5b5f87054240?q=80&w=2000&auto=format&fit=crop'}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{post.date}</span>
                    {post.tags && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-gray-600" />
                            <span className="text-blue-400">{post.tags.split(',')[0]}</span>
                        </>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description}
                </p>

                <div className="mt-auto">
                    <Link
                        href={post.slug ? (post.slug.startsWith('http') ? post.slug : `/blog/${post.slug}`) : '#'}
                        className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        target={post.slug?.startsWith('http') ? '_blank' : '_self'}
                    >
                        Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
