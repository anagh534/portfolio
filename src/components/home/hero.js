import React from 'react';
import Link from '@/compat/link';
import { MessageSquare, Cpu, Layers } from 'lucide-react';

// Hero renders as static Astro HTML (no client: directive) so all
// content is immediately in the DOM for SEO. Animations are pure CSS
// classes — they only affect opacity/transform, never content visibility.
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1">

          <div className="w-full max-w-4xl mx-auto text-center lg:text-left">

            {/* Badge — animates first, delay 0ms */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-widest">
              <Cpu size={14} />
              <span>Innovating with Code</span>
            </div>

            {/* H1 — delay 70ms. Static content always in DOM for SEO. */}
            <h1 className="hero-title text-[2.35rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.95] mb-7">
              FREELANCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">FLUTTER DEVELOPER</span><br className="hidden sm:block" />
              &amp; WEB DEVELOPER <br className="hidden sm:block" />
              IN KERALA
            </h1>

            {/* Description — delay 140ms */}
            <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto lg:mx-0">
              Experienced <strong className="text-white">Flutter developer in Kerala</strong> and <strong className="text-white">freelance web developer</strong> specializing in <strong className="text-white">Flutter, MERN stack, and WordPress development</strong>.
              Building custom websites, e-commerce solutions, and high-performance mobile apps
              for businesses across Kochi, Calicut, Trivandrum, Kannur, and throughout Kerala.
              Transforming ideas into scalable digital products with clean code and exceptional user experiences. <Link href="/flutter-app-development/" className="text-blue-300 underline underline-offset-4 hover:text-blue-200">Explore Flutter app development services in Kerala</Link>.
            </p>

            {/* CTAs — delay 210ms */}
            <div className="hero-cta flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a href="https://wa.me/918075541805" className="w-full sm:w-auto justify-center flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-xl shadow-blue-500/25 active:scale-95 group">
                <span>LET'S TALK</span>
                <MessageSquare size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="#works" className="w-full sm:w-auto justify-center flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95 group">
                <span>VIEW WORK</span>
                <Layers size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats — delay 280ms */}
            <div className="hero-stats grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-white/10 text-center sm:text-left">
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">24+</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects Done</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">12+</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technologies</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">100%</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
