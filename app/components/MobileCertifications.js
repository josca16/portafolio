'use client';

export default function MobileCertifications() {
    const certifications = [
        { icon: "🐍", name: "Python", url: "/certificaciones/certificado_curso_de_python__aprende_a_programar_en_python_3.pdf" },
        { icon: "🌐", name: "PHP", url: "/certificaciones/certificado_php__fundamentos.pdf" },
        { icon: "📊", name: "Odoo", url: "/certificaciones/certificado_curso_de_odoo.pdf" },
        { icon: "🔧", name: "Git", url: "/certificaciones/certificado_curso_de_git.pdf" },
        { icon: "🤖", name: "IA", url: "/certificaciones/CertificadoDeFinalizacion_Fundamentos%20profesionales%20de%20IA%20generativa%20por%20Microsoft%20y%20LinkedIn.pdf" },
        { icon: "🔄", name: "Scrum", url: null }
    ];

    const handleCertClick = (url) => {
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="md:hidden mb-8">
            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-3">
                    {certifications.map((cert, index) => (
                        <button
                            key={index}
                            onClick={() => handleCertClick(cert.url)}
                            disabled={!cert.url}
                            className={`text-center p-3 bg-slate-700/30 rounded-lg border border-slate-600/30 transition-all duration-300 ${
                                cert.url 
                                    ? 'hover:bg-slate-600/40 hover:border-cyan-500/50 cursor-pointer' 
                                    : 'cursor-default'
                            }`}
                        >
                            <div className="text-2xl mb-2">{cert.icon}</div>
                            <div className="text-sm text-slate-300 font-medium mb-1">{cert.name}</div>
                            {cert.url && (
                                <div className="text-xs text-cyan-400">Ver certificado</div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
