import Image from "next/image";

/**
 * ExperienceItem component - Diseño profesional compacto
 */
export default function ExperienceItem({ experience }) {
    const {
        title,
        company,
        period,
        description,
        projects,
        technologies,
        image,
    } = experience;

    return (
        <div className="relative group h-full">
            {/* Efecto de brillo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 rounded-3xl p-8 border-2 border-slate-700/50 group-hover:border-green-500/50 transition-all duration-500 h-full shadow-2xl">
                {/* Header con logo más grande */}
                <div className="flex items-start gap-6 mb-6">
                    <div className="relative group/logo">
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover/logo:opacity-75 blur transition-all duration-300"></div>
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-cyan-500/30 flex-shrink-0 bg-slate-900">
                            <Image
                                src={image}
                                alt={`${company} logo`}
                                fill
                                className={company === "CodeArts Solutions" ? "object-cover" : "object-contain p-2"}
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <p className="text-lg text-slate-200 font-semibold mb-1">{company}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-lg border border-green-500/30">
                            <span className="text-green-400">📅</span>
                            <p className="text-sm text-green-400 font-bold">
                                {period}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Description con mejor formato */}
                <div className="mb-6 p-4 bg-slate-900/50 rounded-xl border border-slate-700/30">
                    <p className="text-base text-slate-300 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Projects list mejorada */}
                {projects && projects.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
                            <span className="text-xl">✨</span>
                            Experiencias Aprendidas
                        </h4>
                        <ul className="space-y-3">
                            {projects.map((project, index) => (
                                <li key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                                    <span className="text-cyan-400 text-lg flex-shrink-0">→</span>
                                    <span className="text-slate-300 text-sm leading-relaxed">{project}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies con diseño mejorado */}
                <div>
                    <h4 className="text-base font-bold mb-4 text-white flex items-center gap-2">
                        <span className="text-xl">🛠️</span>
                        Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-sm bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 px-4 py-2 rounded-lg border border-cyan-500/40 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
