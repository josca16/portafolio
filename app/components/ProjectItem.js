"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * ProjectItem component - Diseño profesional compacto con preview
 */
export default function ProjectItem({ project }) {
    const { image, domain, title, description, technologies, category, status } = project;

    return (
        <div className="project-card p-5 h-full flex flex-col hover-lift cursor-pointer group">
            {/* Project Header */}
            <div className="flex items-center justify-between mb-3">
                {category && (
                    <span className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/30">
                        {category}
                    </span>
                )}
                {status && (
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        status === 'Completado' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                        {status}
                    </span>
                )}
            </div>

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
                            → Ver detalles
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
                    <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                            {technologies.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 3 && (
                                <span className="px-2 py-1 text-xs bg-slate-700/30 text-slate-400 rounded-md border border-slate-600/20">
                                    +{technologies.length - 3} más
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-auto">
                    <Link
                        href={domain}
                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                    >
                        <span>Ver proyecto completo</span>
                        <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}