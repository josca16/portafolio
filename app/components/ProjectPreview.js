'use client';

import { useState } from 'react';
import Link from 'next/link';
import LocalVideo from './LocalVideo';

/**
 * ProjectPreview - Componente compacto para preview de proyectos con video y código
 */
export default function ProjectPreview({ 
    title,
    description,
    videoSrc,
    thumbnailSrc,
    domain,
    technologies = [],
    codeSnippet,
    codeLanguage,
    codeTitle
}) {
    const [activeTab, setActiveTab] = useState('video');

    return (
        <div className="group relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500">
            {/* Header con tabs */}
            <div className="flex justify-center mb-4">
                <div className="bg-slate-700/50 rounded-lg p-1 flex gap-1">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === 'video' 
                                ? 'bg-cyan-600 text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        🎬 Demo
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === 'code' 
                                ? 'bg-cyan-600 text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        💻 Código
                    </button>
                </div>
            </div>

            {/* Contenido */}
            {activeTab === 'video' ? (
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white text-center">{title}</h3>
                    <div className="relative rounded-lg overflow-hidden">
                        <div className="relative" style={{ aspectRatio: "16/9" }}>
                            <LocalVideo 
                                videoSrc={videoSrc}
                                title={title}
                                showCustomThumbnail={true}
                                thumbnailSrc={thumbnailSrc}
                                aspectRatio="16/9"
                            />
                        </div>
                    </div>
                    
                    <p className="text-sm text-slate-300 text-center">{description}</p>
                    
                    {/* Technologies */}
                    {technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center">
                            {technologies.slice(0, 4).map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                                >
                                    {tech}
                                </span>
                            ))}
                            {technologies.length > 4 && (
                                <span className="px-2 py-1 text-xs bg-slate-600/50 text-slate-300 rounded-full">
                                    +{technologies.length - 4}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-white">{codeTitle || `${title} - Código`}</h3>
                    </div>
                    
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-600/50 overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                                {codeLanguage || 'JavaScript'}
                            </span>
                        </div>
                        
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                            <code className={`language-${(codeLanguage || 'javascript').toLowerCase()}`}>
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                </div>
            )}

            {/* CTA Button */}
            <div className="mt-4 text-center">
                <Link
                    href={domain}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    <span>Ver proyecto completo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
