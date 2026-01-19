import ContactForm from './ContactForm';
import WhatsAppCard from './WhatsAppCard';
import { Mail, MapPin, Clock, Code, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact ANAGH K R - Full Stack Developer',
  description: 'Get in touch for professional web development and Flutter app development services.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
            <Send size={16} />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> Amazing Together</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you create
            exceptional digital experiences with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-start gap-6 group hover:border-blue-500/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-lg uppercase tracking-tight">Email</h3>
                <p className="text-gray-400 text-sm">anaghkrkkl@gmail.com</p>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block pt-2">Response within 24 hours</span>
              </div>
            </div>

            <WhatsAppCard />

            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-start gap-6 group hover:border-blue-500/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-lg uppercase tracking-tight">Location</h3>
                <p className="text-gray-400 text-sm">Kerala, India</p>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block pt-2">Available for remote work</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 group hover:border-blue-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-tight">Availability</h3>
                  <p className="text-gray-400 text-xs mt-1">Mon — Sat</p>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mt-1 underline decoration-blue-500/50">9 AM — 6 PM</span>
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-center text-center gap-4 group hover:border-blue-500/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-tight">Specialization</h3>
                  <p className="text-gray-400 text-xs mt-1">Full-Stack Solutions</p>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block mt-1 underline decoration-blue-500/50">MERN & FLUTTER</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
