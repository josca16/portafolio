"use client";
import Image from "next/image";
import Link from "next/link";

/**
 * Header component - Diseño profesional compacto
 */
export default function Header() {
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
        { name: "Intereses", href: "#interests" },
    ];

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
                <div className="flex items-center justify-between py-5">
                    {/* Left: Profile Info */}
                    <div className="flex items-center gap-5">
                        {/* Profile Image with Glow */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 border-white/10">
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
                            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                                {developerName}
                            </h1>
                            <p className="text-sm md:text-base text-slate-400 mt-0.5">
                                {jobTitle}
                            </p>
                        </div>
                    </div>

                    {/* Right: Social Links with Glow */}
                    <div className="flex items-center gap-3">
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
                                <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300">
                                    <Image
                                        src={link.icon}
                                        alt={link.alt}
                                        width={22}
                                        height={22}
                                        className="brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Navigation Menu - Premium Style */}
                <nav className="hidden md:block pb-4">
                    <div className="relative inline-block w-full">
                        {/* Background con efecto glass */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/60 via-slate-700/60 to-slate-800/60 rounded-2xl backdrop-blur-lg"></div>
                                <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl"></div>
                                
                                <ul className="relative flex items-center gap-2 px-6 py-3">
                                    {navItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const element = document.querySelector(item.href);
                                                    if (element) {
                                                        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                                                        const elementPosition = element.offsetTop - headerHeight - 20;
                                                        window.scrollTo({
                                                            top: elementPosition,
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                }}
                                                className="relative group/nav px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg"
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
            </div>
        </header>
    );
}
