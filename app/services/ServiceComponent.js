import { ArrowRight, Send } from 'lucide-react';

export default function ServiceComponent({ description, title, icon, category = "" }) {
    return (
        <article className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] rounded-full group-hover:bg-blue-600/10 transition-all"></div>

            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-500/10">
                    {icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                    {category}
                </span>
            </div>

            <div className="space-y-4 flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors uppercase">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                <a href="/contact" className="inline-flex items-center gap-2 text-xs font-black text-white hover:text-blue-400 transition-all uppercase tracking-widest group/link">
                    <span>Discuss Project</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
            </div>
        </article>
    );
}