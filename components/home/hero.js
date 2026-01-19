'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase, Download, MessageSquare, Code, Cpu, Layers } from 'lucide-react';
import CountUp from 'react-countup';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Profile Card */}
          <motion.div className="lg:col-span-5 flex justify-center lg:justify-start" variants={itemVariants}>
            <div className="w-full max-w-md p-8 rounded-[40px] bg-white/5 backdrop-blur-xl  shadow-2xl relative group hover:border-blue-500/30 transition-all duration-500">
              <div className="relative mb-8 flex justify-center">
                <div className="relative">
                  <Image
                    src="/assets/profile.webp"
                    alt="Anagh K R"
                    width={160}
                    height={160}
                    className="rounded-3xl group-hover:border-blue-500/50 transition-all duration-500"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-green-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                    AVAILABLE
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-black tracking-tight text-white mb-1">ANAGH K R</h2>
                <p className="text-blue-400 font-bold mb-6">Full Stack Developer</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-400 justify-center group/item hover:text-white transition-colors">
                    <Mail size={16} className="text-blue-400" />
                    <span>anaghkrkkl@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 justify-center group/item hover:text-white transition-colors">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Kerala, India</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300">#MERN</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300">#FLUTTER</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-gray-300">#NEXTJS</span>
                </div>

                <Link href="/resume" className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white text-black font-black hover:bg-blue-500 hover:text-white transition-all duration-300 active:scale-95 group/btn">
                  <span>DOWNLOAD CV</span>
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div className="lg:col-span-7" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
              <Cpu size={14} />
              <span>Innovating with Code</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-8">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">EXPERIENCES</span> <br />
              THAT MATTER.
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Professional <strong className="text-white">Flutter</strong> and <strong className="text-white">MERN Stack</strong> developer.
              I build high-performance, visually stunning web and mobile applications
              tailored to elevate your business.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a href="https://wa.me/918075541805" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-xl shadow-blue-500/25 active:scale-95 group">
                <span>LET'S TALK</span>
                <MessageSquare size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="#works" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-black hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95 group">
                <span>VIEW WORK</span>
                <Layers size={20} className="group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center">
                  <CountUp end={24} duration={3} /><span>+</span>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Projects Done</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center">
                  <CountUp end={12} duration={3} /><span>+</span>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Technologies</p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-black text-white">100%</div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
}
