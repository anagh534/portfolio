'use client';

import React from 'react';

export default function WhatsAppCard() {
    return (
        <div
            className="info-card"
            onClick={() => window.open('https://wa.me/918075541805?text=Hello%2C%20I%20am%20interested%20in%20your%20services', '_blank')}
            style={{ cursor: 'pointer' }}
        >
            <div className="info-icon">
                <i className="fab fa-whatsapp"></i>
            </div>
            <div className="info-details">
                <h3>WhatsApp</h3>
                <p>+91 8075541805</p>
                <span>Chat with me directly</span>
            </div>
        </div>
    );
}
