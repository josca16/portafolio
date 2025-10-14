"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * Header component - Diseño profesional compacto
 */
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const developerName = "Jose Carlos Membrive Martinez";
    const jobTitle = "Desarrollador de Aplicaciones Multiplataforma";

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/social/linkedin.svg",
            url: "https://www.linkedin.com/in/jose-carlos-membrive/",
            alt: "LinkedIn Profile",
        },
        {
            name: "GitHub",
            icon: "/social/github.svg",
            url: "https://github.com/josca16",
            alt: "GitHub Profile",
        },
    ];

    const navItems = [
        { name: "Sobre mí", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Proyectos", href: "#projects" },
        { name: "Experiencia", href: "#experience" },
        { name: "Certificaciones", href: "#certifications" },
        { name: "Conóceme más", href: "#interests" },
    ];

    const handleNavClick = (href) => {
        // Cerrar menú móvil inmediatamente
        setIsMobileMenuOpen(false);
        
        // Esperar a que el menú se cierre antes de hacer scroll
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                const headerHeight = 100; // Altura fija aproximada del header
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 350); // Esperar a que termine la animación del menú
    };

    return (
        <header className="sticky top-0 z-50 relative">
            {/* Fondo premium con glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl"></div>
            
            {/* Gradiente superior decorativo */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            
            {/* Borde inferior con brillo */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

            <div className="container-custom relative z-10">
                {/* Main Header Section */}
                       <div className="flex items-center justify-between py-2 sm:py-4">
                    {/* Left: Profile Info */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Profile Image with Glow */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-white/10">
                                <Image
                                    src="/social/profile.png"
                                    alt="Profile picture"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        
                        {/* Name & Title */}
                        <div>
                                   <h1 className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                                {developerName}
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-0.5">
                                {jobTitle}
                            </p>
                        </div>
                    </div>

                    {/* Right: Mobile Menu Button + Social Links */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative group p-2"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300"></div>
                            <div className="relative w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex flex-col items-center justify-center w-4 h-4">
                                    <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                                    <span className={`block w-4 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-4 h-0.5 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                                </div>
                            </div>
                        </button>

                        {/* Social Links - Hidden on mobile when menu is open */}
                        <div className={`flex items-center gap-1 sm:gap-2 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                    aria-label={link.alt}
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-75 blur transition-all duration-300"></div>
                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                                        <Image
                                            src={link.icon}
                                            alt={link.alt}
                                            width={16}
                                            height={16}
                                            className="sm:w-[18px] sm:h-[18px] brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Menu - Premium Style */}
                <nav className="hidden md:block pb-2">
                    <div className="relative inline-block w-full">
                        {/* Background con efecto glass */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 rounded-2xl backdrop-blur-lg"></div>
                                <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl"></div>
                                
                                <ul className="relative flex items-center gap-1 px-4 py-2">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(item.href);
                                                }}
                                                className="relative group/nav px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg"
                                            >
                                                {/* Fondo hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                                                
                                                {/* Texto */}
                                                <span className="relative z-10">{item.name}</span>
                                                
                                                {/* Underline indicator */}
                                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover/nav:w-full transition-all duration-300"></div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                <nav className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="relative">
                        {/* Background con efecto glass */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-lg rounded-xl border border-cyan-400/20"></div>
                        
                        {/* Menu Items */}
                        <ul className="relative py-4 px-4">
                            {navItems.map((item, index) => (
                                <li key={index} className="mb-2 last:mb-0">
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className="w-full text-left group/nav px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg"
                                    >
                                        {/* Fondo hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Texto */}
                                        <span className="relative z-10 flex items-center justify-between">
                                            {item.name}
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
