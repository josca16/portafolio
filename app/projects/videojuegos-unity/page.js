import Image from "next/image";
import Link from "next/link";

export default function UnityGamesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="relative py-6 sm:py-8 px-4 sm:px-6 border-b border-white/20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                        <span className="text-xl sm:text-2xl">←</span>
                        <span className="text-base sm:text-lg font-semibold">Volver al Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Image
                            src="/projects_logo/unityLogo.png"
                            alt="Unity Logo"
                            width={32}
                            height={32}
                            className="rounded-lg sm:w-10 sm:h-10"
                        />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Videojuegos Unity</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Introduction */}
                <section className="mb-12 sm:mb-16">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Desarrollo de Videojuegos con Unity
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                            Colección de proyectos desarrollados durante mi formación en Unity, 
                            desde conceptos básicos hasta mecánicas avanzadas de gameplay.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:gap-12 lg:gap-16">
                    {/* Roll a Ball */}
                    <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                        <span className="text-xl sm:text-2xl">🏀</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Roll a Ball</h3>
                                </div>
                                
                                <div className="space-y-3 sm:space-y-4 text-sm text-gray-300">
                                    <p>
                                        <strong className="text-white">Primer proyecto Unity:</strong> Introducción a las bases del motor, 
                                        sistema de físicas y componentes fundamentales.
                                    </p>
                                    <p>
                                        <strong className="text-white">Mecánicas:</strong> Control de una bola que navega por un circuito, 
                                        recolección de monedas y llegada a plataforma final.
                                    </p>
                                    <p>
                                        <strong className="text-white">Aprendizajes:</strong> Input del usuario, colisiones, 
                                        sistema de puntuación y navegación 3D básica.
                                    </p>
                                </div>

                                <div className="mt-4 sm:mt-6">
                                    <video 
                                        className="w-full rounded-lg shadow-lg"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/DemoRollABall.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-500/30">
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Tecnologías Utilizadas</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">Unity 3D</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">C# Scripting</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">Físicas Unity</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-gray-300">Input System</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* TonyBird */}
                    <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                        <span className="text-xl sm:text-2xl">🐦</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">TonyBird</h3>
                                </div>
                                
                                <div className="space-y-3 sm:space-y-4 text-sm text-gray-300">
                                    <p>
                                        <strong className="text-white">Homenaje a Toni:</strong> Juego inspirado en Flappy Bird 
                                        protagonizado por mi compañero y amigo Toni.
                                    </p>
                                    <p>
                                        <strong className="text-white">Primer proyecto 2D:</strong> Avance significativo en conocimientos 
                                        de Unity, implementación de mecánicas de vuelo y obstáculos.
                                    </p>
                                    <p>
                                        <strong className="text-white">Características:</strong> Diseño de menú principal, 
                                        sistema de puntuación y mecánicas de juego clásicas.
                                    </p>
                                </div>

                                <div className="mt-4 sm:mt-6 space-y-4">
                                    <video 
                                        className="w-full rounded-lg shadow-lg"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/DemoToniBird.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                    <Image
                                        src="/projects/videojuegos-unity/CapturaToniBirds.JPG"
                                        alt="Captura de pantalla de TonyBird"
                                        width={600}
                                        height={400}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-green-500/30">
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Características Técnicas</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">Unity 2D</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">Sprite Animation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">UI Design</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <span className="text-gray-300">Game States</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Geobattle */}
                    <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                            <div>
                                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                        <span className="text-xl sm:text-2xl">⚔️</span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">Geobattle</h3>
                                </div>
                                
                                <div className="space-y-3 sm:space-y-4 text-sm text-gray-300">
                                    <p>
                                        <strong className="text-white">Shooter 3D:</strong> Juego de combate donde controlas un cubo 
                                        que puede disparar, recoger munición y vida.
                                    </p>
                                    <p>
                                        <strong className="text-white">Sistema de combate:</strong> Enfrentamiento contra enemigos con 
                                        vida y munición infinita, mecánicas de supervivencia.
                                    </p>
                                    <p>
                                        <strong className="text-white">Boss final:</strong> Fase especial con enemigo más grande, 
                                        mayor vida y velocidad de disparo aumentada.
                                    </p>
                                </div>

                                <div className="mt-4 sm:mt-6 space-y-4">
                                    <video 
                                        className="w-full rounded-lg shadow-lg"
                                        controls
                                        preload="metadata"
                                    >
                                        <source src="/projects/videojuegos-unity/DemoGeoBattle.mp4" type="video/mp4" />
                                        Tu navegador no soporta el elemento de video.
                                    </video>
                                    
                                    <div className="flex justify-center sm:justify-start">
                                        <a 
                                            href="/projects/videojuegos-unity/004_PMYDM_Membrive_Martinez_JoseCarlos.pptx"
                                            download
                                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                                        >
                                            <span>📄</span>
                                            Descargar Documentación
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-red-500/30">
                                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Mecánicas Avanzadas</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <span className="text-gray-300">Sistema de Vida</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <span className="text-gray-300">Munición</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <span className="text-gray-300">IA Enemigos</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <span className="text-gray-300">Boss Battle</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Skills Section */}
                <section className="mt-16 sm:mt-20">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Habilidades Desarrolladas</h2>
                        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto px-4">
                            Progresión de conocimientos desde conceptos básicos hasta mecánicas avanzadas de desarrollo de videojuegos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">🎯</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Fundamentos Unity</h3>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Dominio del motor de juegos, componentes, prefabs y sistema de físicas básico.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">🎨</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desarrollo 2D</h3>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Creación de juegos 2D, animaciones de sprites y diseño de interfaces de usuario.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/10 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">⚡</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Mecánicas Avanzadas</h3>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Sistemas de combate, IA de enemigos, gestión de recursos y mecánicas de juego complejas.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
