"use client";

import YouTubeEmbed from "./YouTubeEmbed";

/**
 * ProjectVideo component - Diseño profesional compacto
 * Soporta tanto videos locales como YouTube
 */
export default function ProjectVideo({ 
    videoSrc,           // URL local del video (deprecated, usar youtubeId)
    youtubeId,          // ID de YouTube (recomendado)
    thumbnailSrc, 
    title, 
    description 
}) {
    return (
        <div className="card p-5">
            <div className="mb-3">
                {youtubeId ? (
                    <YouTubeEmbed 
                        videoId={youtubeId}
                        title={title}
                        showCustomThumbnail={thumbnailSrc ? true : false}
                        thumbnailSrc={thumbnailSrc}
                        aspectRatio="16/9"
                    />
                ) : (
                    <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
                        <p className="text-slate-400 text-sm">Video no disponible</p>
                    </div>
                )}
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
