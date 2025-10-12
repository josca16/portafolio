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
        <div className="card p-6 h-full">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-cyan-600/30 flex-shrink-0">
                    <Image
                        src={image}
                        alt={`${company} logo`}
                        fill
                        className={company === "CodeArts Solutions" ? "object-cover" : "object-contain p-2"}
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="text-base text-slate-300">{company}</p>
                    <p className="text-sm text-cyan-400 font-semibold">
                        {period}
                    </p>
                </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-sm text-slate-300 leading-relaxed">
                {description}
            </p>

            {/* Projects list */}
            {projects && projects.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-white">
                        Experiencias aprendidas:
                    </h4>
                    <ul className="space-y-1.5">
                        {projects.map((project, index) => (
                            <li key={index} className="flex items-start text-sm">
                                <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                                <span className="text-slate-300">{project}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Technologies */}
            <div>
                <h4 className="text-sm font-semibold mb-2 text-white">
                    Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-cyan-600/10 text-cyan-400 px-2.5 py-1 rounded-md border border-cyan-600/30 hover:border-cyan-600/60 hover:bg-cyan-600/20 transition-all"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
