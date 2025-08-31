"use client";
import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
    src, 
    alt, 
    className = '', 
    placeholder = '/assets/placeholder.webp',
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div 
            ref={imgRef}
            className={`lazy-image-wrapper ${className}`}
            style={{ position: 'relative', overflow: 'hidden' }}
            {...props}
        >
            {/* Placeholder */}
            <div 
                className={`lazy-placeholder ${isLoaded ? 'fade-out' : ''}`}
                style={{
                    position: isLoaded ? 'absolute' : 'static',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #292F36, #1A1E23)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                    opacity: isLoaded ? 0 : 1,
                    zIndex: isLoaded ? -1 : 1
                }}
            >
                <div className="loading-spinner">
                    <div className="spinner-ring"></div>
                    <span style={{ color: '#12F7D6', fontSize: '0.9rem', marginTop: '1rem' }}>
                        Loading...
                    </span>
                </div>
            </div>

            {/* Actual Image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'opacity 0.3s ease',
                        opacity: isLoaded ? 1 : 0
                    }}
                    loading="lazy"
                />
            )}

            <style jsx>{`
                .loading-spinner {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .spinner-ring {
                    width: 40px;
                    height: 40px;
                    border: 3px solid rgba(18, 247, 214, 0.3);
                    border-top: 3px solid #12F7D6;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .fade-out {
                    animation: fadeOut 0.3s ease forwards;
                }

                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default LazyImage;
