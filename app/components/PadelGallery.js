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
            image: "/padel/8754d460-75ca-40d7-8151-12bb90fd992d_Original.JPEG"
        },
        {
            id: 3,
            type: "image",
            image: "/padel/b7f5ad14-09ae-459a-966e-a99013d24d0c.JPEG",
            isHorizontal: true
        },
        {
            id: 4,
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
        <div className="relative overflow-hidden pt-4 pb-16">
            {/* Título secundario */}
            <div className="text-center mb-6">
                <h3 className="text-lg font-bold mb-1">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Galería
                    </span>
                </h3>
            </div>

            {/* Layout Principal - Mosaico Dinámico */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 gap-6">
                    
                    {/* Columna Principal - Foto Destacada */}
                    <div className="space-y-4">
                        <div className="relative group">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-700 shadow-2xl group-hover:shadow-cyan-500/30">
                                <Image
                                    src={currentItem.image}
                                    alt="Momentos de pádel"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105"
                                    loading={currentIndex === 0 ? "eager" : "lazy"}
                                    priority={currentIndex === 0}
                                />
                            </div>
                        </div>
                        
                        {/* Controles de Navegación - Justo debajo de la foto */}
                        <div className="flex justify-center items-center gap-6 mt-4 mb-4">
                            <button
                                onClick={prevItem}
                                className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group"
                            >
                                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            <div className="flex gap-2">
                                {padelContent.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToItem(index)}
                                        className={`transition-all duration-500 rounded-full ${
                                            index === currentIndex 
                                                ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/60' 
                                                : 'w-2 h-2 bg-slate-600 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/40 hover:scale-125'
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            <button
                                onClick={nextItem}
                                className="w-10 h-10 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 group"
                            >
                                <svg className="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Story Section Premium - Movido aquí para rellenar el espacio - OCULTO EN MÓVIL */}
                        <div className="grid lg:grid-cols-2 gap-4 hidden md:grid max-w-4xl mx-auto">
                            {/* Columna Izquierda - Mi Pasión por el Deporte */}
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90  border border-cyan-500/30 rounded-2xl p-4 relative overflow-hidden shadow-2xl group-hover:border-cyan-400/50 transition-all duration-500">
                                    {/* Efectos de fondo animados */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-500 rounded-full  animate-pulse"></div>
                                        <div className="absolute bottom-4 left-4 w-10 h-10 bg-blue-500 rounded-full  animate-pulse delay-1000"></div>
                                        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-purple-500 rounded-full  animate-pulse delay-500"></div>
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm">🏆</span>
                                            </div>
                                            <h4 className="text-sm font-bold">
                                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                                    Mi Pasión por el Deporte
                                                </span>
                                            </h4>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-xl p-3 border border-cyan-600/30 hover:border-cyan-500/50 transition-all duration-300 group/item">
                                                <h5 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                                                    🎓 Enseñanza
                                                </h5>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    Ser monitor de pádel me ha ayudado a comunicar mejor y a valorar la paciencia y el aprendizaje continuo.
                                                </p>
                                            </div>

                                            <div className="bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-xl p-3 border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 group/item">
                                                <h5 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                                                    ⚡ Competitividad y Estrategia
                                                </h5>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    El deporte me enseña a mantener la calma y a pensar con claridad incluso en momentos de presión.
                                                </p>
                                            </div>

                                            <div className="bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-xl p-3 border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300 group/item">
                                                <h5 className="text-sm font-bold text-purple-400 mb-2 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                                                    🎯 Constancia y Equilibrio
                                                </h5>
                                                <p className="text-xs text-slate-300 leading-relaxed">
                                                    Entrenar de forma regular me ha enseñado la importancia de la perseverancia y del equilibrio entre esfuerzo y descanso.
                                                </p>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            
                            {/* Columna Derecha - Mi Estilo de Vida */}
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90  border border-emerald-500/30 rounded-2xl p-4 relative overflow-hidden shadow-2xl group-hover:border-emerald-400/50 transition-all duration-500">
                                    {/* Efectos de fondo animados */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500 rounded-full  animate-pulse"></div>
                                        <div className="absolute bottom-4 left-4 w-10 h-10 bg-green-500 rounded-full  animate-pulse delay-1000"></div>
                                        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-teal-500 rounded-full  animate-pulse delay-700"></div>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                                <span className="text-white text-sm">💚</span>
                                            </div>
                                            <h5 className="text-sm font-bold">
                                                <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                                    Mi Estilo de Vida
                                                </span>
                                            </h5>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="bg-gradient-to-r from-emerald-600/15 to-green-600/15 rounded-xl p-3 border border-emerald-600/30 hover:border-emerald-500/50 transition-all duration-300 group/item">
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0 animate-pulse"></div>
                                                    <div>
                                                        <h6 className="text-sm font-bold text-emerald-400 mb-1">🍎 Alimentación y descanso</h6>
                                                        <p className="text-xs text-slate-300 leading-relaxed">
                                                            Mantengo una rutina equilibrada que me ayuda a rendir mejor física y mentalmente.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gradient-to-r from-green-600/15 to-teal-600/15 rounded-xl p-3 border border-green-600/30 hover:border-green-500/50 transition-all duration-300 group/item">
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0 animate-pulse delay-300"></div>
                                                    <div>
                                                        <h6 className="text-sm font-bold text-green-400 mb-1">🏃 Deporte</h6>
                                                        <p className="text-xs text-slate-300 leading-relaxed">
                                                            Practico pádel con regularidad, lo que me permite mantenerme activo y despejar la mente.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-gradient-to-r from-teal-600/15 to-cyan-600/15 rounded-xl p-3 border border-teal-600/30 hover:border-teal-500/50 transition-all duration-300 group/item">
                                                <div className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0 animate-pulse delay-500"></div>
                            <div>
                                                        <h6 className="text-sm font-bold text-teal-400 mb-1">⚖️ Equilibrio personal</h6>
                                                        <p className="text-xs text-slate-300 leading-relaxed">
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
            </div>

        </div>
    );
}