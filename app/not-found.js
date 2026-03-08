import Link from 'next/link';

export const metadata = {
    title: '404 — Page Not Found | ANAGH K R',
    description: 'The page you are looking for does not exist. Return to the homepage or explore services.',
    robots: 'noindex, follow',
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

            <div className="text-center max-w-2xl mx-auto space-y-8">
                {/* 404 heading */}
                <div className="space-y-2">
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Error 404</p>
                    <h1 className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-none">
                        404
                    </h1>
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        The page you are looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 uppercase tracking-widest text-sm"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest text-sm"
                    >
                        View Services
                    </Link>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95 uppercase tracking-widest text-sm"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
