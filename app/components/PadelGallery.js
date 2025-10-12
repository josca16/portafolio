"use client";

import Image from "next/image";
import { useState } from "react";
import YouTubeEmbed from "./YouTubeEmbed";

/**
 * PadelGallery - Carrusel dinámico con video funcional
 */
export default function PadelGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const padelContent = [
        {
            id: 1,
            type: "image",
            image: "/padel/padel-accion.jpg"
        },
        {
            id: 2,
            type: "image",
            image: "/padel/padel-extra.jpg"
        },
        {
            id: 3,
            type: "image",
            image: "/padel/padel-concentracion.jpg"
        },
        {
            id: 4,
            type: "image",
            image: "/padel/8754d460-75ca-40d7-8151-12bb90fd992d_Original.JPEG"
        },
        {
            id: 5,
            type: "image",
            image: "/padel/b7f5ad14-09ae-459a-966e-a99013d24d0c.JPEG",
            isHorizontal: true
        },
        {
            id: 6,
            type: "image",
            image: "/padel/IMG_3920_Original.JPEG"
        }
    ];

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % padelContent.length);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + padelContent.length) % padelContent.length);
    };

    const goToItem = (index) => {
        setCurrentIndex(index);
    };

    // Calcular índices para mostrar elementos laterales
    const getVisibleItems = () => {
        const items = [];
        const totalItems = padelContent.length;
        
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + totalItems) % totalItems;
            items.push({
                ...padelContent[index],
                index,
                isActive: i === 0,
                isVisible: Math.abs(i) <= 2
            });
        }
        return items;
    };

    const visibleItems = getVisibleItems();
    const currentItem = padelContent[currentIndex];

    return (
        <div className="mt-8">
            {/* Título flotante */}
            <h4 className="text-xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Galería de Momentos
                </span>
            </h4>


            {/* Video Integrado al Lado del Carrusel - Mejorado */}
            <div className="mt-10 mb-8">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                    {/* Carrusel - Lado Izquierdo */}
                    <div className="flex-1 max-w-lg">
                        <div className="relative overflow-visible py-6">
                            <div className="flex items-center justify-center gap-6 transition-all duration-1000 ease-out">
                                {visibleItems.slice(1, 4).map((item, idx) => {
                                    const isActive = item.isActive;
                                    const scale = isActive ? 1 : 0.65;
                                    const opacity = isActive ? 1 : 0.3;
                                    const zIndex = isActive ? 20 : 10;
                                    const rotation = isActive ? 0 : (idx < 2 ? -8 : 8);
                                    const blur = isActive ? 0 : 2;
                                    
                                    const isHorizontal = item.isHorizontal;
                                    
                                    // Mejorar proporciones para que se vean más naturales
                                    let containerWidth, containerHeight;
                                    if (isActive) {
                                        if (isHorizontal) {
                                            containerWidth = '400px';
                                            containerHeight = '250px';
                                        } else {
                                            containerWidth = '280px';
                                            containerHeight = '380px';
                                        }
                                    } else {
                                        // Thumbnails más pequeños con mejor proporción
                                        if (isHorizontal) {
                                            containerWidth = '140px';
                                            containerHeight = '90px';
                                        } else {
                                            containerWidth = '100px';
                                            containerHeight = '130px';
                                        }
                                    }
                                    
                                    return (
                                        <div
                                            key={`${item.id}-${idx}`}
                                            className="relative cursor-pointer transition-all duration-1000 ease-out transform group"
                                            style={{
                                                transform: `scale(${scale}) rotate(${rotation}deg)`,
                                                opacity: opacity,
                                                zIndex: zIndex,
                                                width: containerWidth,
                                                height: containerHeight,
                                                filter: `blur(${blur}px)`
                                            }}
                                            onClick={() => !isActive && goToItem(item.index)}
                                        >
                                            <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl backdrop-blur-sm group-hover:border-cyan-400/60 transition-all duration-500">
                                                {/* Efecto de brillo en hover */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                <Image
                                                    src={item.image}
                                                    alt="Foto de pádel"
                                                    fill
                                                    className="object-cover transition-all duration-700 hover:scale-110"
                                                />
                                                
                                                {/* Borde animado para el elemento activo */}
                                                {isActive && (
                                                    <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/70 animate-pulse shadow-cyan-400/50"></div>
                                                )}
                                                
                                                {/* Overlay sutil */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
            </div>

                        {/* Indicadores mejorados */}
                        <div className="flex justify-center mt-6 gap-3">
                            {padelContent.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToItem(index)}
                                    className={`transition-all duration-500 rounded-full ${
                                        index === currentIndex 
                                            ? 'w-10 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/60 scale-110' 
                                            : 'w-3 h-3 bg-slate-600 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40 hover:scale-125'
                                    }`}
                                />
                            ))}
                        </div>
                </div>
                
                    {/* Video de YouTube - Lado Derecho */}
                    <div className="flex-1 max-w-xs">
                        <div className="relative group">
                            {/* Efectos de fondo sutiles */}
                            <div className="absolute -inset-2 opacity-20 pointer-events-none">
                                <div className="absolute top-2 right-2 w-16 h-16 bg-red-500 rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute bottom-2 left-2 w-12 h-12 bg-red-600 rounded-full blur-lg animate-pulse delay-1000"></div>
                            </div>
                            
                            <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-red-500/30 hover:border-red-400/50 transition-all duration-500">
                                <YouTubeEmbed 
                                    videoId="3CVBLGhNh58"
                                    title="Video de Pádel"
                                    showCustomThumbnail={false}
                                    aspectRatio="9/16"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section Premium */}
            <div className="relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Columna Izquierda - Mi Pasión por el Deporte */}
                    <div className="relative group">
                        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-cyan-400/50 transition-all duration-500">
                            {/* Efectos de fondo animados */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-6 right-6 w-20 h-20 bg-cyan-500 rounded-full blur-2xl animate-pulse"></div>
                                <div className="absolute bottom-6 left-6 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse delay-1000"></div>
                                <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-purple-500 rounded-full blur-lg animate-pulse delay-500"></div>
                </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white text-lg">🏆</span>
                                    </div>
                                    <h4 className="text-2xl font-bold">
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                            Mi Pasión por el Deporte
                                        </span>
                                    </h4>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-xl p-4 border border-cyan-600/30 hover:border-cyan-500/50 transition-all duration-300 group/item">
                                        <h5 className="text-base font-bold text-cyan-400 mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                            🎓 Enseñanza
                                        </h5>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Ser monitor de pádel me ha ayudado a comunicar mejor y a valorar la paciencia y el aprendizaje continuo.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-xl p-4 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 group/item">
                                        <h5 className="text-base font-bold text-blue-400 mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                            ⚡ Competitividad y Estrategia
                                        </h5>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            El deporte me enseña a mantener la calma y a pensar con claridad incluso en momentos de presión.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-xl p-4 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300 group/item">
                                        <h5 className="text-base font-bold text-purple-400 mb-2 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                                            🎯 Constancia y Equilibrio
                                        </h5>
                                        <p className="text-sm text-slate-300 leading-relaxed">
                                            Entrenar de forma regular me ha enseñado la importancia de la perseverancia y del equilibrio entre esfuerzo y descanso.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Columna Derecha - Mi Estilo de Vida */}
                    <div className="relative group">
                        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-emerald-400/50 transition-all duration-500">
                            {/* Efectos de fondo animados */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-6 right-6 w-18 h-18 bg-emerald-500 rounded-full blur-2xl animate-pulse"></div>
                                <div className="absolute bottom-6 left-6 w-14 h-14 bg-green-500 rounded-full blur-xl animate-pulse delay-1000"></div>
                                <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-teal-500 rounded-full blur-lg animate-pulse delay-700"></div>
                            </div>
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                        <span className="text-white text-lg">💚</span>
                                    </div>
                                    <h5 className="text-2xl font-bold">
                                        <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                            Mi Estilo de Vida
                                        </span>
                                        </h5>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-emerald-600/15 to-green-600/15 rounded-xl p-4 border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300 group/item">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                            <div>
                                                <h6 className="text-base font-bold text-emerald-400 mb-1">🍎 Alimentación y descanso</h6>
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    Mantengo una rutina equilibrada que me ayuda a rendir mejor física y mentalmente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-green-600/15 to-teal-600/15 rounded-xl p-4 border border-green-600/30 hover:border-green-500/50 transition-all duration-300 group/item">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 animate-pulse delay-300"></div>
                                            <div>
                                                <h6 className="text-base font-bold text-green-400 mb-1">🏃 Deporte</h6>
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    Practico pádel con regularidad, lo que me permite mantenerme activo y despejar la mente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-r from-teal-600/15 to-cyan-600/15 rounded-xl p-4 border border-teal-600/30 hover:border-teal-500/50 transition-all duration-300 group/item">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0 animate-pulse delay-500"></div>
                                            <div>
                                                <h6 className="text-base font-bold text-teal-400 mb-1">⚖️ Equilibrio personal</h6>
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    Busco un estilo de vida sano que combine trabajo, deporte y descanso de forma natural.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}