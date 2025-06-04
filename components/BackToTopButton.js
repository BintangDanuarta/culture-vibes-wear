'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // Atau ikon lain bebas

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Tampilkan tombol saat scroll > 300px
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#5FB4D3] text-white shadow-lg transition-all duration-300 hover:bg-[#a2d000] ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
