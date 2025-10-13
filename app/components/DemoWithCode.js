"use client";

import { useState } from "react";
import LocalVideo from "./LocalVideo";

/**
 * DemoWithCode - Componente que combina video demo con código relacionado
 */
export default function DemoWithCode({ 
    videoSrc,
    videoTitle,
    codeSnippet,
    codeLanguage,
    codeTitle,
    codeDescription,
    aspectRatio = "16/9"
}) {
    const [activeTab, setActiveTab] = useState("demo");

    return (
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
            {/* Header con tabs */}
            <div className="flex justify-center mb-6">
                <div className="bg-slate-700/50 rounded-lg p-1 flex gap-1">
                    <button
                        onClick={() => setActiveTab("demo")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === "demo" 
                                ? 'bg-cyan-600 text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        🎬 Demo
                    </button>
                    <button
                        onClick={() => setActiveTab("code")}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                            activeTab === "code" 
                                ? 'bg-cyan-600 text-white shadow-lg' 
                                : 'text-slate-400 hover:text-white'
                        }`}
                    >
                        💻 Código
                    </button>
                </div>
            </div>

            {/* Contenido */}
            {activeTab === "demo" ? (
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white text-center">{videoTitle}</h3>
                    <div className="relative">
                        <LocalVideo 
                            videoSrc={videoSrc}
                            title={videoTitle}
                            showCustomThumbnail={false}
                            aspectRatio={aspectRatio}
                        />
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white">{codeTitle}</h3>
                        <p className="text-sm text-slate-400 mt-2">{codeDescription}</p>
                    </div>
                    
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-600/50 overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                                {codeLanguage}
                            </span>
                        </div>
                        
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                            <code className={`language-${codeLanguage.toLowerCase()}`}>
                                {codeSnippet}
                            </code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}
