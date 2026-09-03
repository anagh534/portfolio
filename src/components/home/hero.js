import { MessageSquare, ArrowRight } from 'lucide-react';

// Hero renders as static Astro HTML (no client: directive) so all
// content is immediately in the DOM for SEO. Animations are pure CSS
// classes — they only affect opacity/transform, never content visibility.
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Subtle Dot Grid Background with radial vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#3b82f618_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,#000_60%,transparent_100%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Ambient Aurora Gradient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          {/* H1 Headline */}
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-black tracking-tight text-white leading-[1.08] sm:leading-[1.02] mb-6 sm:mb-8">
            Freelance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-500">Flutter &amp; Web Developer</span> in Kerala
          </h1>

          {/* Description */}
          <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-8 sm:mb-10 font-normal">
            Specializing in high-performance <strong className="text-white font-semibold">Flutter mobile apps</strong>, custom <strong className="text-white font-semibold">MERN stack websites</strong>, and scalable web applications. Delivering clean architecture and conversion-ready products for startups, local businesses, and international founders.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-14">
            <a
              href="https://wa.me/918281571805"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-blue-500/25 active:scale-95 group"
            >
              <span>Discuss Your Project</span>
              <MessageSquare size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/portfolio/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>View Selected Works</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Proof & Metrics Strip */}
          <div className="hero-stats w-full max-w-3xl pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">3+</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">24+</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 tracking-tight">5.0 ★</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-0.5">Rated Developer</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
