import Image from "next/image";
import Link from "next/link";

export default function TaxiDayMobilePage() {
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
                            src="/projects_logo/LOGOtaxiday_mobile.png"
                            alt="TaxiDay Logo"
                            width={32}
                            height={32}
                            className="rounded-lg sm:w-10 sm:h-10"
                        />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">TaxiDay Mobile</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Introduction */}
                <section className="mb-12 sm:mb-16">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Aplicación Móvil TaxiDay (en desarrollo)
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                            Prototipo de aplicación móvil nativa para la gestión de servicios de taxi,
                            optimizado para dispositivos móviles con React Native y todavía en desarrollo.
                        </p>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                        <div>
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl">🚕</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Descripción del Proyecto</h3>
                            </div>
                            
                            <div className="space-y-3 sm:space-y-4 text-sm text-gray-300">
                                <p>
                                    <strong className="text-white">Experiencia personal:</strong> La idea surgió de observar las dificultades 
                                    de mi padre, un taxista con más de 20 años de experiencia, para encontrar una aplicación útil y sencilla.
                                </p>
                                <p>
                                    <strong className="text-white">Problema identificado:</strong> Las aplicaciones existentes no son intuitivas, 
                                    no cubren las necesidades reales de los taxistas y no simplifican sus tareas diarias.
                                </p>
                                <p>
                                    <strong className="text-white">Solución móvil:</strong> Versión nativa optimizada para dispositivos móviles, 
                                    ofreciendo la misma funcionalidad con mejor experiencia de usuario.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-yellow-500/30">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Características Principales</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">React Native</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Mobile First</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">APIs REST</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Tiempo Real</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">GPS & Maps</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Notificaciones</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Demo Video */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Demo de la Aplicación</h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Video demostrativo de las funcionalidades principales de la aplicación móvil TaxiDay.
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <video 
                            className="w-full rounded-lg shadow-lg"
                            controls
                            preload="metadata"
                        >
                            <source src="/projects/taxiday_mobile/DemoTaxiDayMobile.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </section>

                {/* Technical Details */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tecnologías Utilizadas</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                                    <h4 className="text-lg font-semibold text-white mb-2">Frontend Mobile</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["React Native", "JavaScript", "ES6+", "React Navigation", "AsyncStorage"].map((tech, index) => (
                                            <span key={index} className="text-xs bg-blue-500/20 text-white px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                                    <h4 className="text-lg font-semibold text-white mb-2">APIs y Servicios</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["REST APIs", "HTTP/HTTPS", "JSON", "WebSockets", "Push Notifications"].map((tech, index) => (
                                            <span key={index} className="text-xs bg-green-500/20 text-white px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20">
                                    <h4 className="text-lg font-semibold text-white mb-2">Funcionalidades</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["GPS Tracking", "Maps Integration", "Real-time Updates", "User Authentication", "Offline Support"].map((tech, index) => (
                                            <span key={index} className="text-xs bg-yellow-500/20 text-white px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Características Técnicas</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-2">🎯 Arquitectura</h4>
                                    <p className="text-sm text-gray-300">
                                        Arquitectura modular con componentes reutilizables, separación clara de responsabilidades 
                                        y patrones de diseño optimizados para aplicaciones móviles.
                                    </p>
                                </div>
                                
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-2">📱 UX/UI</h4>
                                    <p className="text-sm text-gray-300">
                                        Diseño centrado en el usuario con navegación intuitiva, feedback visual inmediato 
                                        y adaptación a diferentes tamaños de pantalla.
                                    </p>
                                </div>
                                
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-2">⚡ Performance</h4>
                                    <p className="text-sm text-gray-300">
                                        Optimización de rendimiento con lazy loading, gestión eficiente de memoria 
                                        y actualizaciones incrementales para una experiencia fluida.
                                    </p>
                                </div>
                                
                                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                    <h4 className="text-lg font-semibold text-white mb-2">🔒 Seguridad</h4>
                                    <p className="text-sm text-gray-300">
                                        Implementación de autenticación segura, encriptación de datos sensibles 
                                        y validación robusta de entrada de usuario.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Process */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Proceso de Desarrollo</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">📋</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Análisis y Planificación</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Estudio de requisitos, definición de arquitectura y planificación del desarrollo móvil.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">💻</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Desarrollo</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Implementación con React Native, integración de APIs y desarrollo de funcionalidades móviles.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">🚀</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Testing y Despliegue</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Pruebas exhaustivas en dispositivos móviles y optimización para producción.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
