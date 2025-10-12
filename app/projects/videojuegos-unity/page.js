import Image from "next/image";
import Link from "next/link";

export default function UnityGamesPage() {
    return (
        <div className="min-h-screen bg-slate-900">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-600/20">
                <div className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                            <span className="text-xl">←</span>
                            <span className="text-sm font-semibold">Volver al Portfolio</span>
                        </Link>
                        <div className="flex items-center gap-2">
                            <Image src="/projects_logo/unityLogo.png" alt="Unity Logo" width={28} height={28} className="rounded-lg" />
                            <h1 className="text-xl md:text-2xl font-bold text-white">Videojuegos Unity</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container-custom py-8">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Desarrollo de Videojuegos con Unity
                        </h2>
                        <p className="text-base text-slate-300 max-w-3xl mx-auto">
                            Colección de proyectos desarrollados durante mi formación en Unity, 
                            desde conceptos básicos hasta mecánicas avanzadas de gameplay.
                        </p>
                    </div>
                </section>

                {/* Projects */}
                <div className="space-y-12">
                    {/* Roll a Ball */}
                    <section className="card p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <span className="text-xl">🏀</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Roll a Ball</h3>
                                </div>
                                <div className="space-y-3 text-sm text-slate-300 mb-6">
                                    <p><strong className="text-white">Primer proyecto Unity:</strong> Introducción a las bases del motor y sistema de físicas.</p>
                                    <p><strong className="text-white">Mecánicas:</strong> Control de una bola, recolección de monedas y plataforma final.</p>
                                    <p><strong className="text-white">Aprendizajes:</strong> Input del usuario, colisiones y navegación 3D básica.</p>
                                </div>
                                <video className="w-full rounded-lg" controls preload="metadata">
                                    <source src="/projects/videojuegos-unity/DemoRollABall.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
                                <h4 className="text-base font-semibold text-white mb-3">Tecnologías</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {["Unity 3D", "C# Scripting", "Físicas Unity", "Input System"].map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            <span className="text-slate-300">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* TonyBird */}
                    <section className="card p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                        <span className="text-xl">🐦</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">TonyBird</h3>
                                </div>
                                <div className="space-y-3 text-sm text-slate-300 mb-6">
                                    <p><strong className="text-white">Homenaje a Toni:</strong> Juego inspirado en Flappy Bird protagonizado por mi compañero.</p>
                                    <p><strong className="text-white">Primer proyecto 2D:</strong> Implementación de mecánicas de vuelo y obstáculos.</p>
                                    <p><strong className="text-white">Características:</strong> Menú principal, sistema de puntuación y mecánicas clásicas.</p>
                                </div>
                                <div className="space-y-4">
                                    <video className="w-full rounded-lg" controls preload="metadata">
                                        <source src="/projects/videojuegos-unity/DemoToniBird.mp4" type="video/mp4" />
                                    </video>
                                    <Image src="/projects/videojuegos-unity/CapturaToniBirds.JPG" alt="TonyBird" width={600} height={400} className="w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30">
                                <h4 className="text-base font-semibold text-white mb-3">Características Técnicas</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {["Unity 2D", "Sprite Animation", "UI Design", "Game States"].map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            <span className="text-slate-300">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Geobattle */}
                    <section className="card p-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                        <span className="text-xl">⚔️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Geobattle</h3>
                                </div>
                                <div className="space-y-3 text-sm text-slate-300 mb-6">
                                    <p><strong className="text-white">Shooter 3D:</strong> Juego de combate con sistema de disparo, munición y vida.</p>
                                    <p><strong className="text-white">Sistema de combate:</strong> Enfrentamiento contra enemigos con mecánicas de supervivencia.</p>
                                    <p><strong className="text-white">Boss final:</strong> Fase especial con enemigo de mayor dificultad.</p>
                                </div>
                                <div className="space-y-4">
                                    <video className="w-full rounded-lg" controls preload="metadata">
                                        <source src="/projects/videojuegos-unity/DemoGeoBattle.mp4" type="video/mp4" />
                                    </video>
                                    <a 
                                        href="/projects/videojuegos-unity/004_PMYDM_Membrive_Martinez_JoseCarlos.pptx"
                                        download
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        <span>📄</span>
                                        Descargar Documentación
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-500/30">
                                <h4 className="text-base font-semibold text-white mb-3">Mecánicas Avanzadas</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {["Sistema de Vida", "Munición", "IA Enemigos", "Boss Battle"].map((t, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                            <span className="text-slate-300">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Skills */}
                <section className="mt-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">Habilidades Desarrolladas</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "🎯", title: "Fundamentos Unity", desc: "Dominio del motor de juegos, componentes y físicas" },
                            { icon: "🎨", title: "Desarrollo 2D", desc: "Creación de juegos 2D y diseño de interfaces" },
                            { icon: "⚡", title: "Mecánicas Avanzadas", desc: "Sistemas de combate, IA y gestión de recursos" }
                        ].map((s, idx) => (
                            <div key={idx} className="card p-6 text-center">
                                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <span className="text-2xl">{s.icon}</span>
                                </div>
                                <h4 className="text-base font-semibold text-white mb-2">{s.title}</h4>
                                <p className="text-sm text-slate-300">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
