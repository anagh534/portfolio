'use client';
import { useState, useEffect, useRef } from 'react';
import {
  User,
  Mail,
  Tag,
  MessageSquare,
  Briefcase,
  ChevronDown,
  Check,
  ShieldCheck,
  Send,
  Loader2,
  AlertCircle,
  Code,
  Smartphone,
  ShoppingCart,
  Server,
  Palette,
  Zap,
  Cloud,
  Lightbulb,
  Settings,
  MoreHorizontal
} from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development', icon: <Code size={18} />, description: 'Full-stack web applications' },
    { value: 'mobile-app', label: 'Mobile App Development', icon: <Smartphone size={18} />, description: 'iOS & Android applications' },
    { value: 'e-commerce', label: 'E-commerce Solutions', icon: <ShoppingCart size={18} />, description: 'Online stores & marketplaces' },
    { value: 'api-development', label: 'API Development', icon: <Server size={18} />, description: 'REST APIs & microservices' },
    { value: 'ui-ux-design', label: 'UI/UX Design', icon: <Palette size={18} />, description: 'User interface & experience design' },
    { value: 'performance-optimization', label: 'Performance Optimization', icon: <Zap size={18} />, description: 'Speed & efficiency improvements' },
    { value: 'cloud-deployment', label: 'Cloud & Deployment', icon: <Cloud size={18} />, description: 'AWS, Azure, GCP solutions' },
    { value: 'consultation', label: 'Technical Consultation', icon: <Lightbulb size={18} />, description: 'Architecture & strategy advice' },
    { value: 'maintenance', label: 'Website Maintenance', icon: <Settings size={18} />, description: 'Updates & ongoing support' },
    { value: 'other', label: 'Other', icon: <MoreHorizontal size={18} />, description: 'Custom requirements' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProjectTypeSelect = (projectType) => {
    setFormData(prev => ({ ...prev, projectType: projectType.value }));
    setDropdownOpen(false);
  };

  const getSelectedProject = () => projectTypes.find(type => type.value === formData.projectType);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyNQzyrKvCAUItpfZQZT6Fnc42bY9qEgUgfIs1fPmFUzvdMP2fxIoC1cDNmeIyKrly3/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          projectType: getSelectedProject()?.label || formData.projectType,
          timestamp: new Date().toISOString(),
          source: 'anaghkr.in'
        })
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', projectType: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full -z-10"></div>

      <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Send me a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">message</span>
          </h2>
          <p className="text-gray-400 text-sm">Fill out the form below and I'll get back to you as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 px-1">
              <User size={14} /> Full Name
            </label>
            <input
              type="text" id="name" name="name"
              value={formData.name} onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              placeholder="Enter your name" required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 px-1">
              <Mail size={14} /> Email Address
            </label>
            <input
              type="email" id="email" name="email"
              value={formData.email} onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              placeholder="email@example.com" required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 px-1">
            <Briefcase size={14} /> Project Type
          </label>
          <div className="relative" ref={dropdownRef}>
            <div
              className={`w-full bg-white/5 border border-white/10 rounded-2xl px-1 py-1 cursor-pointer transition-all ${dropdownOpen ? 'ring-2 ring-blue-500/30 border-blue-500/50' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex items-center justify-between px-5 py-3">
                {getSelectedProject() ? (
                  <div className="flex items-center gap-4">
                    <span className="text-blue-400">{getSelectedProject().icon}</span>
                    <span className="text-white text-sm font-medium">{getSelectedProject().label}</span>
                  </div>
                ) : (
                  <span className="text-gray-600 text-sm">Select project type</span>
                )}
                <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {dropdownOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 py-2 backdrop-blur-2xl">
                  {projectTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`px-4 py-3 flex items-center gap-4 hover:bg-white/5 transition-colors group ${formData.projectType === type.value ? 'bg-blue-500/10' : ''}`}
                      onClick={(e) => { e.stopPropagation(); handleProjectTypeSelect(type); }}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${formData.projectType === type.value ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400 group-hover:text-blue-400 transition-colors'}`}>
                        {type.icon}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-bold text-white uppercase tracking-tight">{type.label}</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">{type.description}</div>
                      </div>
                      {formData.projectType === type.value && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 px-1">
            <Tag size={14} /> Subject
          </label>
          <input
            type="text" id="subject" name="subject"
            value={formData.subject} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            placeholder="How can I help you?" required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 px-1">
            <MessageSquare size={14} /> Message
          </label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
            placeholder="Tell me about your project..." rows="5" required
          ></textarea>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
            <Check size={18} />
            <span>Thank you! I'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
            <AlertCircle size={18} />
            <span>Something went wrong. Please try again.</span>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-5 rounded-2xl bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-white/5"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          <span className="uppercase tracking-widest text-sm">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest pt-2">
          <ShieldCheck size={14} className="text-blue-500" />
          <span>Your information is secure and private.</span>
        </div>
      </form>
    </div>
  );
}
