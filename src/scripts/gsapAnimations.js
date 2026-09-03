import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Optimize ScrollTrigger performance & mobile stability
    ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true,
    });
}

export function initGsapAnimations() {
    if (typeof window === 'undefined') return;

    // Accessibility: Honor prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        gsap.killTweensOf('[data-gsap]');
        gsap.killTweensOf('[data-gsap] > *');
        gsap.set('[data-gsap], [data-gsap] > *', {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            clearProps: 'all',
        });
        return;
    }

    // Refresh and clean up previous triggers & tweens to prevent memory leaks and ghost animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.killTweensOf('[data-gsap]');
    gsap.killTweensOf('[data-gsap] > *');

    const isMobile = window.innerWidth < 768;

    // Premium easing: power4.out delivers an ultra-smooth, organic deceleration glide
    const smoothEase = 'power4.out';
    const baseDuration = 1.0;

    // 1. From Top (Section headers, titles, pill badges) - gentle, refined downward glide
    gsap.utils.toArray('[data-gsap="from-top"]').forEach((el) => {
        gsap.fromTo(
            el,
            { y: isMobile ? -16 : -24, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: baseDuration,
                ease: smoothEase,
                force3D: true,
                autoRound: false,
                clearProps: 'transform,willChange',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                    fastScrollEnd: true,
                },
            }
        );
    });

    // 2. From Left (Left column profile showcase, cards)
    // On mobile screens, convert lateral shifts to smooth upward drifts to prevent horizontal viewport overflow
    gsap.utils.toArray('[data-gsap="from-left"]').forEach((el) => {
        gsap.fromTo(
            el,
            {
                x: isMobile ? 0 : -30,
                y: isMobile ? 22 : 0,
                opacity: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: baseDuration * 1.05,
                ease: smoothEase,
                force3D: true,
                autoRound: false,
                clearProps: 'transform,willChange',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 86%',
                    once: true,
                    fastScrollEnd: true,
                },
            }
        );
    });

    // 3. From Right (Right column story, feature pillars)
    gsap.utils.toArray('[data-gsap="from-right"]').forEach((el) => {
        gsap.fromTo(
            el,
            {
                x: isMobile ? 0 : 30,
                y: isMobile ? 22 : 0,
                opacity: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: baseDuration * 1.05,
                ease: smoothEase,
                force3D: true,
                autoRound: false,
                clearProps: 'transform,willChange',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 86%',
                    once: true,
                    fastScrollEnd: true,
                },
            }
        );
    });

    // 4. From Bottom (Single cards, banners, stats strips)
    gsap.utils.toArray('[data-gsap="from-bottom"]').forEach((el) => {
        gsap.fromTo(
            el,
            { y: isMobile ? 20 : 28, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: baseDuration,
                ease: smoothEase,
                force3D: true,
                autoRound: false,
                clearProps: 'transform,willChange',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                    fastScrollEnd: true,
                },
            }
        );
    });

    // 5. Stagger Cards Grid (Selected Works, What We Offer, Testimonials, Skills, Keywords)
    // Subtle scale (0.985 -> 1) combined with vertical glide gives an organic 3D settling feel
    // and clearProps ensures Tailwind hover transforms (-translate-y-1.5, scale) work cleanly
    gsap.utils.toArray('[data-gsap="stagger-cards"]').forEach((container) => {
        const cards = Array.from(container.children);
        if (cards.length > 0) {
            gsap.fromTo(
                cards,
                {
                    y: isMobile ? 20 : 28,
                    scale: 0.985,
                    opacity: 0,
                },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: baseDuration,
                    stagger: {
                        amount: Math.min(0.32, cards.length * 0.065),
                        ease: 'power2.out',
                    },
                    ease: smoothEase,
                    force3D: true,
                    autoRound: false,
                    clearProps: 'transform,scale,willChange',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 86%',
                        once: true,
                        fastScrollEnd: true,
                    },
                }
            );
        }
    });

    // 6. Split Cards Grid (Why Choose Me 4-card feature showcase)
    gsap.utils.toArray('[data-gsap="split-cards"]').forEach((container) => {
        const cards = Array.from(container.children);
        if (cards.length >= 4 && !isMobile) {
            // Left card from left
            gsap.fromTo(
                cards[0],
                { x: -26, y: 10, scale: 0.985, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: baseDuration,
                    ease: smoothEase,
                    force3D: true,
                    autoRound: false,
                    clearProps: 'transform,scale,willChange',
                    scrollTrigger: { trigger: container, start: 'top 86%', once: true, fastScrollEnd: true },
                }
            );

            // Middle cards float up with soft stagger
            gsap.fromTo(
                [cards[1], cards[2]],
                { y: 26, scale: 0.985, opacity: 0 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: baseDuration,
                    stagger: 0.065,
                    ease: smoothEase,
                    force3D: true,
                    autoRound: false,
                    clearProps: 'transform,scale,willChange',
                    scrollTrigger: { trigger: container, start: 'top 86%', once: true, fastScrollEnd: true },
                }
            );

            // Right card from right
            gsap.fromTo(
                cards[3],
                { x: 26, y: 10, scale: 0.985, opacity: 0 },
                {
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: baseDuration,
                    ease: smoothEase,
                    force3D: true,
                    autoRound: false,
                    clearProps: 'transform,scale,willChange',
                    scrollTrigger: { trigger: container, start: 'top 86%', once: true, fastScrollEnd: true },
                }
            );
        } else {
            // Mobile & fallback: elegant vertical cascade
            gsap.fromTo(
                cards,
                { y: 22, scale: 0.985, opacity: 0 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: baseDuration,
                    stagger: {
                        amount: Math.min(0.28, cards.length * 0.06),
                        ease: 'power2.out',
                    },
                    ease: smoothEase,
                    force3D: true,
                    autoRound: false,
                    clearProps: 'transform,scale,willChange',
                    scrollTrigger: { trigger: container, start: 'top 86%', once: true, fastScrollEnd: true },
                }
            );
        }
    });

    // Refresh ScrollTrigger positions after DOM layout stabilizes
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
    });
}

// Debounced initialization to avoid duplicate re-triggering on simultaneous DOMContentLoaded & Astro events
let initTimer = null;
function debouncedInit() {
    if (initTimer) clearTimeout(initTimer);
    initTimer = setTimeout(() => {
        initGsapAnimations();
    }, 20);
}

if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', debouncedInit);
    } else {
        debouncedInit();
    }

    document.addEventListener('astro:page-load', debouncedInit);

    // Refresh triggers when web fonts are loaded (prevents text reflow displacement)
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            ScrollTrigger.refresh();
        });
    }

    // Refresh triggers once all media and assets are fully loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // Handle debounced window resize
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 150);
    });
}
