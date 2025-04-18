"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Features", href: "#features" },
        { label: "Technology", href: "#technology" },
        { label: "Boards", href: "#boards" },
        { label: "Download", href: "#download" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                ${scrolled
                    ? "bg-black/40 backdrop-blur-lg shadow-md"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/treash-logo.png"
                        alt="Treash Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-white font-medium">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="hover:text-gray-300 transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-white">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 text-white backdrop-blur-lg px-4 py-4 space-y-4 transition-all duration-300">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
