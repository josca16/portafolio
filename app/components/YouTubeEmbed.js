"use client";

import { useState } from "react";

/**
 * YouTubeEmbed - Componente para embeber videos de YouTube con thumbnail personalizado
 */
export default function YouTubeEmbed({ 
    videoId, 
    title = "Video",
    showCustomThumbnail = false,
    thumbnailSrc = null,
    autoplay = false,
    aspectRatio = "16/9" // "16/9" para horizontal, "9/16" para vertical (shorts)
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Construir URL del embed de YouTube
    const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay || isPlaying ? '?autoplay=1&mute=0' : ''}`;
    
    // Thumbnail por defecto de YouTube (alta calidad)
    const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div 
            className="relative w-full bg-slate-900 rounded-lg overflow-hidden"
            style={{ aspectRatio }}
        >
            {!isPlaying && showCustomThumbnail ? (
                <div 
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                >
                    {/* Thumbnail personalizado o de YouTube */}
                    <img 
                        src={thumbnailSrc || defaultThumbnail} 
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay con botón de play */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-red-600/90 to-red-500/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-red-400/50 border-2 border-white/20">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            )}
        </div>
    );
}

