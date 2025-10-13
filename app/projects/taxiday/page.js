import Image from "next/image";
import Link from "next/link";

export default function TaxiDayPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <header className="relative py-6 sm:py-8 px-4 sm:px-6 border-b border-yellow-500/20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors">
                        <span className="text-xl sm:text-2xl">←</span>
                        <span className="text-base sm:text-lg font-semibold">Volver al Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Image
                            src="/projects_logo/LOGOtaxiday.png"
                            alt="TaxiDay Logo"
                            width={32}
                            height={32}
                            className="rounded-lg sm:w-10 sm:h-10"
                        />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">TaxiDay</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Introduction */}
                <section className="mb-12 sm:mb-16">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                            Plataforma de Gestión de Taxis
                        </h2>
                        <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                            Aplicación completa para la gestión diaria de taxistas, con control de jornadas, 
                            registro de carreras y estadísticas detalladas de rendimiento.
                        </p>
                    </div>
                </section>

                {/* Project Origin */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                        <div>
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                                    <span className="text-xl sm:text-2xl">🚕</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Origen del Proyecto</h3>
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
                                    <strong className="text-white">Solución desarrollada:</strong> TaxiDay fue creada escuchando las ideas 
                                    y necesidades de un taxista real, ofreciendo una interfaz intuitiva y funcionalidades específicas.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-yellow-500/30">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Características Principales</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Interfaz Intuitiva</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Registro de Viajes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Histórico Completo</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <span className="text-gray-300">Estadísticas Visuales</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
                        Características Principales
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Dashboard Intuitivo</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Panel principal con métricas en tiempo real: jornadas activas, número de carreras y recaudación diaria.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📅</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Gestión de Jornadas</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Sistema completo para crear, gestionar y cerrar jornadas de trabajo con registro detallado de actividades.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Estadísticas Detalladas</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Visualización de rendimiento diario y mensual con análisis de tendencias y métricas de productividad.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🔐</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Sistema de Autenticación</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Login seguro con licencia de taxista y contraseña, con opciones de inicio de sesión social.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Aplicación Móvil</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Interfaz responsive optimizada para dispositivos móviles, permitiendo gestión desde cualquier lugar.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">💾</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">Base de Datos Robusta</h4>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Almacenamiento seguro de datos con MariaDB, garantizando integridad y rendimiento óptimo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Demo Video */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <div className="text-center mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Demo de la Aplicación</h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            Video demostrativo de las funcionalidades principales de TaxiDay.
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <video 
                            className="w-full rounded-lg shadow-lg"
                            controls
                            preload="metadata"
                        >
                            <source src="/projects/taxiday/demo.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Capturas de Pantalla</h3>
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-white mb-4">Dashboard Principal</h4>
                            <div className="relative w-full rounded-lg overflow-hidden border border-white/20">
                                <Image
                                    src="/projects/taxiday/dashboard.png"
                                    alt="Dashboard de TaxiDay"
                                    width={600}
                                    height={400}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-white mb-4">Página de Login</h4>
                            <div className="relative w-full rounded-lg overflow-hidden border border-white/20">
                                <Image
                                    src="/projects/taxiday/login.png"
                                    alt="Login de TaxiDay"
                                    width={600}
                                    height={400}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Details */}
                <section className="mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">
                        Detalles Técnicos
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Frontend</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>React Native:</strong> Aplicación móvil multiplataforma
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Interfaz moderna:</strong> Diseño oscuro con acentos amarillos
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Componentes reutilizables:</strong> Arquitectura modular
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Navegación intuitiva:</strong> UX optimizada para taxistas
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-4">Backend</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Spring Boot:</strong> Framework Java para API REST
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>MariaDB:</strong> Base de datos relacional robusta
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>Autenticación:</strong> Sistema seguro de login
                                </li>
                                <li className="flex items-center">
                                    <span className="text-yellow-400 mr-3">•</span>
                                    <strong>APIs RESTful:</strong> Comunicación cliente-servidor
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="mt-6 sm:mt-8">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center">DevOps & Herramientas</h4>
                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h5 className="text-lg font-semibold text-white mb-3">🐳 Docker</h5>
                                <p className="text-sm text-gray-300 mb-3">
                                    Todo el proyecto está containerizado con Docker, facilitando el despliegue y 
                                    asegurando consistencia entre diferentes entornos de desarrollo y producción.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Contenedores para frontend, backend y base de datos</li>
                                    <li>• Docker Compose para orquestación</li>
                                    <li>• Entorno de desarrollo reproducible</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h5 className="text-lg font-semibold text-white mb-3">🗄️ Adminer</h5>
                                <p className="text-sm text-gray-300 mb-3">
                                    Interfaz web ligera para gestión de base de datos, alternativa eficiente a DBeaver 
                                    que permite visualizar y gestionar datos de forma rápida y sencilla.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Acceso web directo a MariaDB</li>
                                    <li>• Interfaz intuitiva y responsive</li>
                                    <li>• Gestión de datos sin software adicional</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Plans */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mb-8 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Futuro del Proyecto</h3>
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">🚀</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Próximas Funcionalidades</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Geolocalización, sistema de pagos integrados y versión para clientes.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">🎯</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Objetivo</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Convertir TaxiDay en la aplicación de referencia para los taxistas.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20 text-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                <span className="text-2xl sm:text-3xl">✅</span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Estado Actual</h4>
                            <p className="text-xs sm:text-sm text-gray-300">
                                Aplicación completamente funcional y lista para ser utilizada.
                            </p>
                        </div>
                    </div>
                </section>

                {/* GitHub Link */}
                <section className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Código Fuente</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                        El proyecto está disponible en GitHub con documentación completa y código abierto.
                    </p>
                    
                    <div className="flex justify-center">
                        <a 
                            href="https://github.com/josca16/TaxiDay" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                        >
                            <span>📁</span>
                            Ver Código en GitHub
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
