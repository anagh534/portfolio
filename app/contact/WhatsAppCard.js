'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppCard() {
    return (
        <div
            className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex items-start gap-6 group hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
            onClick={() => window.open('https://wa.me/918075541805?text=Hello%2C%20I%20am%20interested%20in%20your%20services', '_blank')}
        >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <MessageSquare size={24} />
            </div>
            <div className="space-y-1">
                <h3 className="text-white font-bold text-lg uppercase tracking-tight">WhatsApp</h3>
                <p className="text-gray-400 text-sm group-hover:text-emerald-400 transition-colors">+91 8075541805</p>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block pt-2">Chat with me directly</span>
            </div>
        </div>
    );
}
