"use client";

import LocalVideo from "./LocalVideo";

/**
 * ProjectVideo component - Diseño profesional compacto
 * Reproduce videos locales directamente desde GitHub
 */
export default function ProjectVideo({ 
    videoSrc,           // URL local del video
    thumbnailSrc, 
    title, 
    description 
}) {
    return (
        <div className="card p-5">
            <div className="mb-3">
                <LocalVideo 
                    videoSrc={videoSrc}
                    title={title}
                    showCustomThumbnail={thumbnailSrc ? true : false}
                    thumbnailSrc={thumbnailSrc}
                    aspectRatio="16/9"
                />
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
