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
        { name: "Demos", href: "#videos" },
        { name: "Experiencia", href: "#experience" },
        { name: "Certificaciones", href: "#certifications" },
        { name: "Intereses", href: "#interests" },
    ];

    return (
        <header className="sticky top-0 z-50 relative overflow-hidden">
            {/* Fondo limpio con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
            
            {/* Efectos de partículas dinámicos pero sutiles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{animationDuration: '3s'}}></div>
                <div className="absolute top-8 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-1000 opacity-50" style={{animationDuration: '2.5s'}}></div>
                <div className="absolute bottom-4 left-3/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-2000 opacity-45" style={{animationDuration: '4s'}}></div>
                <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse delay-1500 opacity-40" style={{animationDuration: '3.5s'}}></div>
            </div>

            {/* Línea inferior sutil */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>

            <div className="container-custom relative z-10">
                {/* Desktop & Mobile Layout */}
                <div className="py-6 md:py-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        {/* Left: Profile Info */}
                        <div className="flex items-center gap-6">
                            <div className="relative group">
                                {/* Efecto de resplandor sutil */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                                
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-cyan-400/40 flex-shrink-0 bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl group-hover:shadow-cyan-400/30 transition-all duration-500">
                                    <Image
                                        src="/social/profile.png"
                                        alt="Profile picture"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        priority
                                    />
                                    {/* Overlay sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                    <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                                        {developerName}
                                    </span>
                                </h1>
                                <p className="text-base md:text-lg text-slate-300 mt-1">
                                    <span className="bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-200 bg-clip-text text-transparent">
                                        {jobTitle}
                                    </span>
                                </p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                                    <span className="flex items-center gap-2 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                                        <span className="text-cyan-400">📧</span>
                                        <span className="hidden sm:inline">josecarlosmartinez98@outlook.com</span>
                                    </span>
                                    <span className="flex items-center gap-2 hover:text-cyan-300 transition-colors duration-300 cursor-pointer">
                                        <span className="text-cyan-400">📱</span>
                                        <span>+34 618927313</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                    aria-label={link.alt}
                                >
                                    {/* Efecto de resplandor sutil */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                                    
                                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-cyan-400/40 flex items-center justify-center hover:border-cyan-300 transition-all duration-500 hover:scale-110 shadow-xl group-hover:shadow-cyan-400/30">
                                        <Image
                                            src={link.icon}
                                            alt={link.alt}
                                            width={24}
                                            height={24}
                                            className="brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>
                                    
                                    {/* Indicador de hover sutil */}
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-8 transition-all duration-300 rounded-full"></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Menu - Desktop Only */}
                <nav className="hidden md:block border-t border-cyan-400/20 py-4">
                    <div className="flex justify-center">
                        <div className="relative group">
                            {/* Efecto de fondo sutil */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-slate-800/50 via-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl"></div>
                            </div>
                            
                            <div className="relative px-8 py-3">
                                <ul className="flex items-center justify-center gap-8">
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
                                                className="relative text-slate-300 hover:text-white transition-all duration-500 text-sm font-medium group/link"
                                            >
                                                <span className="relative z-10 group-hover/link:bg-gradient-to-r group-hover/link:from-cyan-400 group-hover/link:to-blue-400 group-hover/link:bg-clip-text group-hover/link:text-transparent transition-all duration-500">
                                                    {item.name}
                                                </span>
                                                
                                                {/* Efecto de fondo animado */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover/link:opacity-100 transition-all duration-500 -m-2 scale-95 group-hover/link:scale-100"></div>
                                                
                                                {/* Línea inferior animada */}
                                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/link:w-full transition-all duration-500 rounded-full"></div>
                                                
                                                {/* Efecto de resplandor */}
                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity duration-500 blur-sm"></div>
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
