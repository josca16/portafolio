import Image from "next/image";
import Link from "next/link";

export default function TaxiDayPage() {
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
                            <Image src="/projects_logo/LOGOtaxiday.png" alt="TaxiDay Logo" width={28} height={28} className="rounded-lg" />
                            <h1 className="text-xl md:text-2xl font-bold text-white">TaxiDay</h1>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container-custom py-8">
                {/* Introduction */}
                <section className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Plataforma de Gestión de Taxis
                        </h2>
                        <p className="text-base text-slate-300 max-w-3xl mx-auto">
                            Aplicación completa para la gestión diaria de taxistas, con control de jornadas, 
                            registro de carreras y estadísticas detalladas de rendimiento.
                        </p>
                    </div>
                </section>

                {/* Project Origin */}
                <section className="card p-8 mb-12">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <span className="text-xl">🚕</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">Origen del Proyecto</h3>
                            </div>
                            <div className="space-y-3 text-sm text-slate-300">
                                <p><strong className="text-white">Experiencia personal:</strong> La idea surgió de observar las dificultades de mi padre, un taxista con más de 20 años de experiencia.</p>
                                <p><strong className="text-white">Problema identificado:</strong> Las aplicaciones existentes no son intuitivas ni cubren las necesidades reales de los taxistas.</p>
                                <p><strong className="text-white">Solución desarrollada:</strong> TaxiDay fue creada escuchando las ideas y necesidades de un taxista real.</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-500/30">
                            <h4 className="text-base font-semibold text-white mb-3">Características</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                {["Interfaz Intuitiva", "Registro de Viajes", "Histórico Completo", "Estadísticas Visuales"].map((f, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                        <span className="text-slate-300">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="mb-12">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">Características Principales</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "📊", title: "Dashboard Intuitivo", desc: "Panel con métricas en tiempo real" },
                            { icon: "📅", title: "Gestión de Jornadas", desc: "Sistema completo de control de trabajo" },
                            { icon: "📈", title: "Estadísticas Detalladas", desc: "Análisis de rendimiento diario y mensual" },
                            { icon: "🔐", title: "Autenticación Segura", desc: "Login con licencia de taxista" },
                            { icon: "📱", title: "Responsive", desc: "Optimizado para dispositivos móviles" },
                            { icon: "💾", title: "Base de Datos Robusta", desc: "MariaDB con alta integridad" }
                        ].map((f, idx) => (
                            <div key={idx} className="card p-6">
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-3">
                                    <span className="text-xl">{f.icon}</span>
                                </div>
                                <h4 className="text-base font-semibold text-white mb-2">{f.title}</h4>
                                <p className="text-sm text-slate-300">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Demo Video */}
                <section className="card p-8 mb-12">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Demo de la Aplicación</h3>
                    <div className="max-w-4xl mx-auto">
                        <video className="w-full rounded-lg" controls preload="metadata">
                            <source src="/projects/taxiday/demo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>

                {/* Screenshots */}
                <section className="card p-8 mb-12">
                    <h3 className="text-xl font-bold text-white mb-6 text-center">Capturas de Pantalla</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-base font-semibold text-white mb-3">Dashboard Principal</h4>
                            <Image src="/projects/taxiday/dashboard.png" alt="Dashboard" width={600} height={400} className="w-full rounded-lg border border-slate-700" />
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-white mb-3">Página de Login</h4>
                            <Image src="/projects/taxiday/login.png" alt="Login" width={600} height={400} className="w-full rounded-lg border border-slate-700" />
                        </div>
                    </div>
                </section>

                {/* GitHub Link */}
                <section className="text-center">
                    <a href="https://github.com/josca16/TaxiDay" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                        <span>📁</span>
                        Ver Código en GitHub
                    </a>
                </section>
            </main>
        </div>
    );
}
