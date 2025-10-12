"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component - Diseño profesional compacto
 */
export default function ProjectItem({ project }) {
    const { image, domain, title, description, technologies } = project;

    return (
        <div className="project-card p-5 h-full flex flex-col hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group">
            {/* Project Image */}
            <Link
                href={domain}
                className="block mb-4 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-600/50 transition-all relative"
            >
                <div className="relative w-full h-40 bg-slate-800">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Click Indicator */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </Link>
            
            {/* Project Content */}
            <div className="flex-1 flex flex-col">
                {/* Title */}
                {title && (
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {title}
                        </h3>
                        <span className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                            → Ver más
                        </span>
                    </div>
                )}
                
                {/* Description */}
                {description && (
                    <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">
                        {description}
                    </p>
                )}
                
                {/* Technologies */}
                {technologies && technologies.length > 0 && (
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                            Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-cyan-600/10 text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-600/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
