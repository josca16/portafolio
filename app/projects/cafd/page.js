import Image from "next/image";
import Link from "next/link";
import YouTubeEmbed from "../../components/YouTubeEmbed";

export default function CAFDPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-yellow-500/20">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors">
                            <span className="text-xl">←</span>
                            <span className="text-sm font-semibold">Volver al Portfolio</span>
                        </Link>
                        <h1 className="text-xl md:text-2xl font-bold gradient-text">
                            CAFD
                        </h1>
                    </div>
                </div>
            </header>

            <div className="container-custom py-8">
                {/* Hero Section */}
                <section className="mb-12">
                    <div className="card p-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
                            Confederación Andaluza de Federaciones Deportivas
                        </h2>
                        <p className="text-base text-slate-300 mb-6 max-w-3xl mx-auto text-center">
                            Rediseño completo de la página web oficial desde cero, desarrollado durante mis prácticas 
                            profesionales en CodeArts Solutions con Drupal y PHP.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {["Drupal", "PHP", "HTML5", "CSS3", "Docker", "SQL"].map((tech, idx) => (
                                <span key={idx} className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1.5 rounded-md border border-yellow-500/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            <a 
                                href="https://cafd.es" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <span>🌐</span>
                                <span>Ver Página Oficial</span>
                            </a>
                            <a 
                                href="https://github.com/josca16/CAFD" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <span>📁</span>
                                <span>Ver Código en GitHub</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Context */}
                <section className="mb-12">
                    <div className="card p-8">
                        <h3 className="text-2xl font-bold text-center mb-6 text-white">
                            ¿Qué es CAFD?
                        </h3>
                        <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
                            <p className="text-sm leading-relaxed">
                                La <strong className="text-yellow-400">Confederación Andaluza de Federaciones Deportivas (CAFD)</strong> es la entidad que agrupa 
                                y coordina todas las federaciones deportivas de Andalucía, promoviendo el deporte y la actividad física en la región.
                            </p>
                            <p className="text-sm leading-relaxed">
                                Este proyecto consistió en el <strong className="text-yellow-400">rediseño completo desde cero</strong> de su página web oficial, 
                                desarrollado durante mis prácticas profesionales en CodeArts Solutions, aplicando metodologías ágiles y 
                                tecnologías modernas de desarrollo web.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                        Características Principales
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🎨", title: "Diseño Moderno", desc: "Interfaz completamente rediseñada con los colores corporativos amarillo y azul" },
                            { icon: "📱", title: "Responsive Design", desc: "Diseño completamente adaptativo para móviles, tablets y ordenadores" },
                            { icon: "⚙️", title: "CMS Drupal", desc: "Sistema de gestión de contenidos robusto y flexible" },
                            { icon: "🔧", title: "Desarrollo PHP", desc: "Backend con funcionalidades personalizadas" },
                            { icon: "🐳", title: "Containerización", desc: "Despliegue en contenedores Docker" },
                            { icon: "📊", title: "Gestión de Contenido", desc: "Sistema completo para noticias, eventos y federaciones" }
                        ].map((feature, idx) => (
                            <div key={idx} className="card p-6">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3">
                                    <span className="text-xl">{feature.icon}</span>
                                </div>
                                <h4 className="text-base font-semibold text-white mb-2">{feature.title}</h4>
                                <p className="text-sm text-slate-300">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshot */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                        Captura de Pantalla
                    </h3>
                    <div className="card p-6">
                        <h4 className="text-base font-semibold text-white mb-4 text-center">Página Principal</h4>
                        <div className="rounded-lg overflow-hidden border border-yellow-500/30">
                            <Image
                                src="/projects/cafd/CapturaCAFDinicio.png"
                                alt="Página principal de CAFD"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">
                        Demo Completa en Video
                    </h3>
                    <div className="card p-6">
                        <div className="rounded-lg overflow-hidden border border-yellow-500/30 mb-4">
                            <YouTubeEmbed 
                                videoId="PENDIENTE_SUBIR_A_YOUTUBE"
                                title="Demo CAFD"
                                showCustomThumbnail={false}
                                aspectRatio="16/9"
                            />
                        </div>
                        <p className="text-sm text-slate-300 text-center">
                            Demostración completa del sitio web de CAFD, incluyendo la navegación por todas las secciones
                        </p>
                        <p className="text-xs text-yellow-400 text-center mt-2">
                            ⚠️ Video pendiente de subir a YouTube
                        </p>
                    </div>
                </section>

                {/* Back Button */}
                <section className="text-center">
                    <Link href="/" className="btn-primary inline-flex items-center gap-2">
                        <span>←</span>
                        <span>Volver al Portfolio</span>
                    </Link>
                </section>
            </div>
        </div>
    );
}
