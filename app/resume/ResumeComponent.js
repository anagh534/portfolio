'use client'
import { useEffect } from 'react';
import { Download, FileText, ArrowLeft, Loader2 } from 'lucide-react';

const ResumeComponent = () => {
    useEffect(() => {
        // Automatically trigger the download when the user visits the page
        const link = document.createElement('a');
        link.href = '/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf';
        link.download = 'ANAGH-K-R-MERN-STACK-DEVELOPER.pdf';
        link.click();
    }, []);

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
            <div className="max-w-3xl w-full px-6 relative z-10">
                <div className="p-10 md:p-16 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl text-center space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10"></div>

                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg shadow-blue-500/10">
                        <FileText size={40} />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                            Resume <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Download</span>
                        </h1>
                        <div className="flex items-center justify-center gap-3 text-gray-400">
                            <Loader2 size={18} className="animate-spin text-blue-500" />
                            <p className="text-sm font-medium uppercase tracking-widest">Downloading your resume automatically...</p>
                        </div>
                    </div>

                    <div className="space-y-8 pt-4">
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                            If the download didn't start automatically, please use the button below to get my latest CV manually.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a
                                href="/ANAGH-K-R-MERN-STACK-DEVELOPER.pdf"
                                download="ANAGH-K-R-MERN-STACK-DEVELOPER.pdf"
                                className="px-10 py-5 rounded-2xl bg-white text-black font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5 uppercase tracking-widest text-sm"
                            >
                                <Download size={20} />
                                <span>Download CV</span>
                            </a>

                            <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-gray-600 hover:text-blue-400 transition-all uppercase tracking-widest group">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Home</span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 rounded-3xl overflow-hidden border border-white/5 group-hover:border-blue-500/20 transition-all relative">
                        <img
                            src="/resume.jpg"
                            alt="ANAGH K R RESUME"
                            className="w-full h-auto block opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0 duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
        </div>
    );
};

export default ResumeComponent;