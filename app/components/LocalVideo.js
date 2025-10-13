'use client';

import { useState, useRef } from 'react';

/**
 * LocalVideo - Componente para reproducir videos locales desde GitHub
 */
export default function LocalVideo({ 
    videoSrc,
    title = "Video",
    thumbnailSrc,
    aspectRatio = "16/9",
    showCustomThumbnail = false,
    autoplay = false
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = async () => {
        if (videoRef.current) {
            try {
                setIsLoading(true);
                await videoRef.current.play();
                setIsPlaying(true);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al reproducir video:', error);
                setIsLoading(false);
            }
        }
    };

    const handleLoadedData = () => {
        setIsLoading(false);
        // No cambiar isPlaying aquí, solo cuando realmente se reproduce
    };

    const handlePlayEvent = () => {
        setIsPlaying(true);
        setIsLoading(false);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    // Si no hay videoSrc, mostrar placeholder
    if (!videoSrc) {
        return (
            <div className={`relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center`}
                 style={{ aspectRatio }}>
                <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⚠️</span>
                    </div>
                    <p className="text-slate-400 text-sm">Video no disponible</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 group`}
             style={{ aspectRatio }}>
            
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={showCustomThumbnail && thumbnailSrc ? thumbnailSrc : undefined}
                onLoadedData={handleLoadedData}
                onPlay={handlePlayEvent}
                onPause={handlePause}
                onEnded={handleEnded}
                controls
                preload="metadata"
            >
                <source src={videoSrc} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>

            {/* Play Button Overlay - Solo cuando no se está reproduciendo */}
            {!isPlaying && !isLoading && (
                <div 
                    className="absolute inset-0 bg-slate-900/50 flex items-center justify-center cursor-pointer group-hover:bg-slate-900/30 transition-all duration-300 z-10"
                    onClick={handlePlay}
                >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            )}

            {/* Indicador de carga */}
            {isLoading && (
                <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
