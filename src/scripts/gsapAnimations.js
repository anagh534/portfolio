import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export function initGsapAnimations() {
    if (typeof window === 'undefined') return;

    // Refresh and clean up previous triggers if any
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // 1. From Top (Section headers, titles, pill badges)
    gsap.utils.toArray('[data-gsap="from-top"]').forEach((el) => {
        gsap.fromTo(
            el,
            { y: -40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                },
            }
        );
    });

    // 2. From Left (Left column profile showcase, cards)
    gsap.utils.toArray('[data-gsap="from-left"]').forEach((el) => {
        gsap.fromTo(
            el,
            { x: -55, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    });

    // 3. From Right (Right column story, feature pillars)
    gsap.utils.toArray('[data-gsap="from-right"]').forEach((el) => {
        gsap.fromTo(
            el,
            { x: 55, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                },
            }
        );
    });

    // 4. From Bottom (Single cards, banners, stats strips)
    gsap.utils.toArray('[data-gsap="from-bottom"]').forEach((el) => {
        gsap.fromTo(
            el,
            { y: 45, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                },
            }
        );
    });

    // 5. Stagger Cards Grid (Selected Works, What We Offer, Testimonials, Keyword Cards)
    gsap.utils.toArray('[data-gsap="stagger-cards"]').forEach((container) => {
        const cards = Array.from(container.children);
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 85%',
                        once: true,
                    },
                }
            );
        }
    });

    // 6. Split Cards Grid (Why Choose Me: left card from left, right card from right, middle from bottom)
    gsap.utils.toArray('[data-gsap="split-cards"]').forEach((container) => {
        const cards = Array.from(container.children);
        if (cards.length >= 4) {
            // Left card from left
            gsap.fromTo(
                cards[0],
                { x: -45, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: container, start: 'top 85%', once: true },
                }
            );

            // Middle cards from bottom
            gsap.fromTo(
                [cards[1], cards[2]],
                { y: 45, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.85,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: container, start: 'top 85%', once: true },
                }
            );

            // Right card from right
            gsap.fromTo(
                cards[3],
                { x: 45, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.85,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: container, start: 'top 85%', once: true },
                }
            );
        } else {
            // General stagger fallback
            gsap.fromTo(
                cards,
                { y: 45, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: container, start: 'top 85%', once: true },
                }
            );
        }
    });

    ScrollTrigger.refresh();
}

// Auto-run on DOM ready and Astro navigation
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initGsapAnimations();
        });
    } else {
        initGsapAnimations();
    }

    document.addEventListener('astro:page-load', () => {
        initGsapAnimations();
    });

    // Re-check after window fully loads all assets (images, fonts)
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
}
