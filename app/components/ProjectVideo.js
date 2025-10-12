"use client";

import { useState } from "react";

/**
 * ProjectVideo component - Diseño profesional compacto
 */
export default function ProjectVideo({ 
    videoSrc, 
    thumbnailSrc, 
    title, 
    description 
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="card p-5">
            <div className="mb-3">
                <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                    {!isPlaying ? (
                        <div 
                            className="relative w-full h-full cursor-pointer group"
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center z-10">
                                <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                            {thumbnailSrc && (
                                <img 
                                    src={thumbnailSrc} 
                                    alt={title}
                                    className="w-full h-full object-cover opacity-50"
                                />
                            )}
                        </div>
                    ) : (
                        <video 
                            controls 
                            autoPlay 
                            className="w-full h-full"
                            onPause={() => setIsPlaying(false)}
                        >
                            <source src={videoSrc} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    )}
                </div>
            </div>
            
            <div>
                <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
                {description && (
                    <p className="text-sm text-slate-400">{description}</p>
                )}
            </div>
        </div>
    );
}
