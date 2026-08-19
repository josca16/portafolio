"use client";

import { useState } from "react";

/**
 * YouTubeEmbed - Componente funcional para videos de YouTube
 */
export default function YouTubeEmbed({ 
    videoId, 
    title = "Video",
    showCustomThumbnail = false,
    thumbnailSrc = null,
    autoplay = false,
    aspectRatio = "16/9"
}) {
    const [isPlaying, setIsPlaying] = useState(false);

    // URL para YouTube embed
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1`;
    
    // Thumbnail por defecto
    const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handlePlay = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('PLAY BUTTON CLICKED!', videoId);
        setIsPlaying(true);
    };

    // Si no debe mostrar thumbnail personalizado, mostrar iframe directamente
    if (!showCustomThumbnail) {
        return (
            <iframe
                className="w-full h-full"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ aspectRatio }}
            />
        );
    }

    // Si ya está reproduciendo, mostrar iframe
    if (isPlaying) {
        return (
            <iframe
                className="w-full h-full"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ aspectRatio }}
            />
        );
    }

    // Mostrar thumbnail con botón de play
    return (
        <div 
            className="relative w-full bg-slate-900 rounded-lg overflow-hidden"
            style={{ aspectRatio }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src={thumbnailSrc || defaultThumbnail} 
                alt={title}
                className="w-full h-full object-cover"
            />
            
            {/* Botón de play con z-index alto */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                <button
                    onClick={handlePlay}
                    className="w-20 h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl z-20 cursor-pointer"
                    style={{ zIndex: 999 }}
                >
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

