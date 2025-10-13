'use client';

export default function CertificationCard({ title, issuer, description, pdfUrl, icon, color, skills }) {
    const handleDownload = () => {
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        }
    };

    return (
        <div className="relative group h-full">
            <div className="relative h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Badge de certificación verificada */}
                <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 bg-gradient-to-r ${color} rounded-full text-white text-xs font-semibold shadow-lg flex items-center gap-1`}>
                        <span>✓</span>
                        <span>Verificado</span>
                    </div>
                </div>

                {/* Icono principal con efecto */}
                <div className="relative p-8 pb-6">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                                <span className="text-5xl">{icon}</span>
                            </div>
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} animate-ping opacity-20`}></div>
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="px-8 pb-8 space-y-4">
                    {/* Emisor */}
                    <div className="text-center">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Emitido por</p>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                            {issuer}
                        </p>
                    </div>

                    {/* Título */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Skills aprendidas */}
                    {skills && skills.length > 0 && (
                        <div className="space-y-2">
                            <p className="text-xs text-slate-400 uppercase tracking-wider text-center">Habilidades adquiridas</p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1 text-xs bg-gradient-to-r ${color}/20 text-white rounded-full border border-white/10 hover:border-white/30 transition-all duration-300`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Botón de descarga */}
                    {pdfUrl && (
                        <div className="pt-4">
                            <button
                                onClick={handleDownload}
                                className={`w-full py-3 px-4 bg-gradient-to-r ${color} rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Ver Certificado
                            </button>
                        </div>
                    )}
                </div>

                {/* Decoración inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
        </div>
    );
}

