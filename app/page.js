import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import PadelGallery from "./components/PadelGallery";
import ProjectVideo from "./components/ProjectVideo";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
    const experiences = [
        {
            title: "Desarrollador en Prácticas",
            company: "CodeArts Solutions",
            period: "2024 - 2025",
            description: "Prácticas profesionales en desarrollo web con Drupal y PHP, participando en proyectos reales para clientes corporativos. Desarrollo de la página oficial de la Confederación Andaluza de Federaciones Deportivas (CAFD) desde cero.",
            projects: [
                "Rediseño completo de la web oficial de CAFD",
                "Desarrollo web con Drupal y PHP",
                "Gestión de bases de datos relacionales",
                "Metodología Scrum en entorno empresarial",
            ],
            technologies: ["Drupal", "PHP", "SQL", "Scrum", "HTML5", "CSS3"],
            image: "/company_logo/codearts.png",
        },
        {
            title: "Estudiante de Grado Superior",
            company: "Cesur",
            period: "Sep. 2023 - Jun. 2025",
            description: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma con GPA de 8.2/10. Formación integral en desarrollo web, móvil, bases de datos y herramientas modernas de desarrollo.",
            projects: [
                "Programación orientada a objetos con Java y C#",
                "Desarrollo web con HTML5, CSS3, JavaScript y PHP",
                "Desarrollo móvil con React Native y aplicaciones nativas",
                "Bases de datos relacionales y NoSQL (SQL, MariaDB, MongoDB)",
                "Desarrollo de videojuegos con Unity y C#",
                "Administración de sistemas Windows y Linux",
                "Metodologías ágiles y control de versiones con Git",
                "Despliegue y contenedores con Docker y Azure"
            ],
            technologies: [
                "Java", 
                "JavaScript", 
                "C#", 
                "Unity", 
                ".NET", 
                "React Native",
                "Docker",
                "Azure",
                "HTML5",
                "CSS3",
                "PHP",
                "SQL",
                "MariaDB",
                "MongoDB",
                "Git"
            ],
            image: "/company_logo/cesur.png",
        },
    ];

    const projects = [
        {
            title: "TaxiDay",
            description: "Plataforma de gestión de taxis con React Native + Spring Boot",
            image: "/projects_logo/LOGOtaxiday.png",
            domain: "/projects/taxiday",
            technologies: ["React Native", "Spring Boot", "Java", "MariaDB"],
        },
        {
            title: "TaxiDay Mobile",
            description: "Aplicación móvil nativa para gestión de servicios de taxi",
            image: "/projects_logo/LOGOtaxiday_mobile.png",
            domain: "/projects/taxiday-mobile",
            technologies: ["React Native", "Mobile Development", "JavaScript", "APIs"],
        },
        {
            title: "CAFD",
            description: "Rediseño completo de la web oficial de la Confederación Andaluza de Federaciones Deportivas",
            image: "/projects_logo/logoCAFD.png",
            domain: "/projects/cafd",
            technologies: ["Drupal", "PHP", "SQL", "HTML5", "CSS3", "Docker"],
        },
        {
            title: "Videojuegos Unity",
            description: "Miniproyectos desarrollados para aprender Unity, C# y mecánicas de videojuegos",
            image: "/projects_logo/unityLogo.png",
            domain: "/projects/videojuegos-unity",
            technologies: ["Unity", "C#", "Game Development", "OOP"],
        },
    ];

    const projectVideos = [
        {
            title: "TaxiDay Demo",
            description: "Demostración de la plataforma de gestión de taxis",
            videoSrc: "/projects/taxiday/demo.mp4",
            thumbnailSrc: "/projects/taxiday/dashboard.png"
        },
        {
            title: "TaxiDay Mobile Demo",
            description: "Aplicación móvil para servicios de taxi",
            videoSrc: "/projects/taxiday_mobile/DemoTaxiDayMobile.mp4",
            thumbnailSrc: "/projects_logo/LOGOtaxiday_mobile.png"
        },
        {
            title: "CAFD Demo",
            description: "Rediseño de la web de la Confederación Andaluza de Federaciones Deportivas",
            videoSrc: "/projects/cafd/VideoCAFD.mp4",
            thumbnailSrc: "/projects/cafd/CapturaCAFDinicio.png"
        },
        {
            title: "Unity Games Demo",
            description: "Colección de videojuegos desarrollados en Unity",
            videoSrc: "/projects/videojuegos-unity/DemoToniBird.mp4",
            thumbnailSrc: "/projects/videojuegos-unity/CapturaToniBirds.JPG"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            {/* About Me Section - Premium */}
            <section id="about" className="section relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="bounce-in">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Sobre mí
                                </span>
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Conoce mi perfil profesional y las habilidades que me definen como desarrollador
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-cyan-400/50 transition-all duration-500">
                                {/* Efectos de fondo animados */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-500 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500 rounded-full blur-lg animate-pulse delay-500"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">💻</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Desarrollador Multiplataforma</h3>
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Programador junior titulado en <strong className="text-cyan-400">Desarrollo de Aplicaciones Multiplataforma</strong>, con experiencia en entorno profesional tras mis prácticas en Codearts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-blue-400/50 transition-all duration-500">
                                {/* Efectos de fondo animados */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-500 rounded-full blur-lg animate-pulse delay-500"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🎯</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Enfoque Metódico</h3>
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Me distingo por un enfoque <strong className="text-blue-400">meticuloso y estructurado</strong>, con especial atención al orden, la lógica y el análisis de cada proceso.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-purple-400/50 transition-all duration-500">
                                {/* Efectos de fondo animados */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-pink-500 rounded-full blur-lg animate-pulse delay-500"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🚀</span>
                            </div>
                                        <h3 className="text-xl font-bold text-white">Soluciones Efectivas</h3>
                                    </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Busco comprender a fondo las tecnologías con las que trabajo para aportar <strong className="text-purple-400">soluciones eficaces, estables y con sentido</strong>.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 relative overflow-hidden shadow-2xl group-hover:border-green-400/50 transition-all duration-500">
                                {/* Efectos de fondo animados */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-4 right-4 w-16 h-16 bg-green-500 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-emerald-500 rounded-full blur-lg animate-pulse delay-500"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <span className="text-2xl">🤝</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Trabajo Colaborativo</h3>
                            </div>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Disfruto aprendiendo de otros y <strong className="text-green-400">sumando claridad en entornos colaborativos</strong>, siempre buscando mejorar y crecer profesionalmente.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            {/* Skills Section */}
            <section id="skills" className="section relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="flip-in">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Habilidades
                                </span>
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Tecnologías y competencias que domino para crear soluciones innovadoras
                            </p>
                        </div>
                    </ScrollReveal>
                    
                    <div className="grid xl:grid-cols-2 gap-12">
                        {/* Habilidades Técnicas */}
                        <ScrollReveal animation="fade-left" delay={100}>
                            <div className="relative group">
                            {/* Efecto de brillo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-2xl">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 animate-ping opacity-20"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            Habilidades Técnicas
                                        </h3>
                                        <p className="text-sm text-cyan-400">Tecnologías y herramientas que domino</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        {
                                            category: "Lenguajes de Programación",
                                            skills: ["Java", "JavaScript", "C#", "PHP", "SQL"],
                                            color: "from-blue-500 to-cyan-500",
                                            icon: "💻"
                                        },
                                        {
                                            category: "Frameworks y Librerías",
                                            skills: ["Spring Boot", "React Native", ".NET", "Unity", "Drupal"],
                                            color: "from-green-500 to-emerald-500",
                                            icon: "🚀"
                                        },
                                        {
                                            category: "Bases de Datos",
                                            skills: ["MariaDB", "MongoDB", "MySQL", "PostgreSQL"],
                                            color: "from-purple-500 to-indigo-500",
                                            icon: "🗄️"
                                        },
                                        {
                                            category: "Herramientas y DevOps",
                                            skills: ["Git", "Docker", "Azure", "APIs REST", "Scrum"],
                                            color: "from-orange-500 to-red-500",
                                            icon: "🛠️"
                                        },
                                        {
                                            category: "Frontend y Diseño",
                                            skills: ["HTML5", "CSS3", "Responsive Design", "UI/UX"],
                                            color: "from-pink-500 to-rose-500",
                                            icon: "🎨"
                                        }
                                    ].map((group, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${group.color} flex items-center justify-center text-sm`}>
                                                    {group.icon}
                                                </div>
                                                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                                    {group.category}
                                                </h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1.5 text-sm bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-600/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                                                    >
                                                {skill}
                                            </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                        
                        {/* Habilidades Personales */}
                        <ScrollReveal animation="fade-right" delay={200}>
                            <div className="relative group">
                            {/* Efecto de brillo */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 animate-ping opacity-20"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            Habilidades Personales
                                        </h3>
                                        <p className="text-sm text-purple-400">Competencias que me definen como profesional</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { skill: "Pensamiento estructurado", icon: "🧩", desc: "Análisis lógico y metodología ordenada" },
                                        { skill: "Enfoque en resultados reales", icon: "🎯", desc: "Orientación hacia objetivos medibles" },
                                        { skill: "Aprendizaje profundo", icon: "📚", desc: "Curiosidad constante y mejora continua" },
                                        { skill: "Autonomía responsable", icon: "🚀", desc: "Iniciativa con responsabilidad" },
                                        { skill: "Atención al detalle", icon: "🔍", desc: "Precisión y calidad en cada proyecto" },
                                        { skill: "Trabajo en equipo", icon: "🤝", desc: "Colaboración efectiva y comunicación" },
                                        { skill: "Comunicación efectiva", icon: "💬", desc: "Claridad en ideas y propuestas" }
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-4 p-4 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 hover:from-slate-600/40 hover:to-slate-700/40 transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                                                    {item.skill}
                                                </h4>
                                                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            {/* Projects Section - Premium */}
            <section id="projects" className="section relative overflow-hidden bg-slate-800/30">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                Mis Proyectos
                                </span>
                            </h2>
                            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Explora mi portfolio de proyectos desarrollados con las últimas tecnologías. 
                                Cada proyecto representa un desafío único resuelto con creatividad y precisión técnica.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null;
                            }
                            return (
                                <ScrollReveal key={index} animation="bounce-in" delay={index * 100}>
                                    <div className="relative group">
                                        <div className="relative transform transition-all duration-500 hover:scale-105">
                                    <ProjectItem project={project} />
                                            {/* Efecto de brillo en hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                                        </div>
                                </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Project Videos Section */}
            <section id="videos" className="section relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                Demos en Video
                            </span>
                            </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Ve mis proyectos en acción a través de estas demostraciones interactivas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projectVideos.map((video, index) => {
                            const colors = [
                                { from: "from-blue-500", to: "to-cyan-500", icon: "🚕" },
                                { from: "from-green-500", to: "to-emerald-500", icon: "📱" },
                                { from: "from-orange-500", to: "to-red-500", icon: "🏆" },
                                { from: "from-purple-500", to: "to-indigo-500", icon: "🎮" }
                            ];
                            const colorConfig = colors[index % colors.length];
                            
                            return (
                                <div key={index} className="relative group">
                                    {/* Efecto de brillo */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${colorConfig.from} ${colorConfig.to}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                                    
                                    <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-${colorConfig.from.split('-')[1]}-500/20 rounded-2xl p-10 hover:border-${colorConfig.from.split('-')[1]}-500/40 transition-all duration-500`}>
                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="relative">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorConfig.from} ${colorConfig.to} flex items-center justify-center shadow-2xl text-2xl`}>
                                                {colorConfig.icon}
                                            </div>
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorConfig.from} ${colorConfig.to} animate-ping opacity-20`}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {video.title}
                                            </h3>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base text-slate-400">Demostración interactiva</span>
                                                <span className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium">
                                                    DEMO
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-base text-slate-300 mb-8 leading-relaxed">
                                        {video.description}
                                    </p>
                                        
                            <ProjectVideo
                                videoSrc={video.videoSrc}
                                thumbnailSrc={video.thumbnailSrc}
                                title={video.title}
                                description={video.description}
                            />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Work Experience Section*/}
            <section id="experience" className="section relative overflow-hidden bg-slate-800/30">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                Experiencia Laboral
                            </span>
                            </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Mi trayectoria profesional y académica que me ha llevado hasta aquí
                        </p>
                    </div>

                    <div className="grid xl:grid-cols-2 gap-10">
                        {experiences.map((experience, index) => (
                            <div key={index} className="relative group">
                                {/* Efecto de brillo */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                
                                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/20 rounded-2xl p-10 hover:border-green-500/40 transition-all duration-500">
                                    <ExperienceItem experience={experience} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="section relative overflow-hidden">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                Certificaciones y Cursos
                            </span>
                            </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Formación continua y certificaciones que respaldan mi experiencia
                        </p>
                    </div>
                    
                        <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Certificados de OpenWebinars",
                                description: "Git | Odoo | Python | PHP",
                                icon: "📜",
                                color: "from-cyan-500 to-blue-500"
                            },
                            {
                                title: "Curso de metodología Scrum",
                                description: "Impartido en el entorno empresarial de CodeArts Solutions",
                                icon: "🔄",
                                color: "from-blue-500 to-purple-500"
                            },
                            {
                                title: "Curso de Drupal",
                                description: "Introducción práctica al desarrollo web con el CMS Drupal, aplicado directamente al proyecto CAFD",
                                icon: "🌐",
                                color: "from-purple-500 to-indigo-500"
                            }
                        ].map((cert, index) => (
                            <div key={index} className="relative group">
                                {/* Efecto de brillo */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                                
                                <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-${cert.color.split('-')[1]}-500/20 rounded-2xl p-8 hover:border-${cert.color.split('-')[1]}-500/40 transition-all duration-500`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-2xl text-2xl`}>
                                                {cert.icon}
                                            </div>
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} animate-ping opacity-20`}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-slate-400">Certificación profesional</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                                        </div>
                                    </div>
            </section>

            {/* Personal Interests Section - Movido al final */}
            <section id="interests" className="section relative overflow-hidden bg-slate-800/30">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl animate-pulse delay-500"></div>
                                </div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                                Conóceme más
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Más allá del código, estos son los aspectos que me definen como persona y que aportan valor a mi perfil profesional
                        </p>
                            </div>
                            
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Docencia",
                                icon: "🎓",
                                color: "from-emerald-500 to-cyan-500",
                                description: "Monitor de pádel. Me motiva enseñar, comunicar y ver el progreso de los demás. Esta experiencia me ha enseñado paciencia, claridad en la comunicación y la satisfacción de ver cómo otros mejoran con mi ayuda."
                            },
                            {
                                title: "Deporte",
                                icon: "🏆",
                                color: "from-cyan-500 to-blue-500",
                                description: "Jugador de pádel con experiencia en torneos provinciales y andaluces. Desarrollé constancia, ambición y mentalidad competitiva. El deporte me enseña disciplina, trabajo en equipo y la importancia de la práctica constante."
                            },
                            {
                                title: "Nutrición",
                                icon: "💚",
                                color: "from-green-500 to-emerald-500",
                                description: "Interesado en la nutrición y el rendimiento. Me gusta aprender cómo mejorar energía y bienestar. Esta pasión por optimizar procesos y resultados se refleja también en mi enfoque hacia el desarrollo de software."
                            }
                        ].map((interest, index) => (
                            <div key={index} className="relative group">
                                {/* Efecto de brillo */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${interest.color}/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                                
                                <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-${interest.color.split('-')[1]}-500/20 rounded-2xl p-8 hover:border-${interest.color.split('-')[1]}-500/40 transition-all duration-500`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center shadow-2xl text-2xl`}>
                                                {interest.icon}
                                            </div>
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} animate-ping opacity-20`}></div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {interest.title}
                                            </h3>
                                            <p className="text-sm text-slate-400">Aspecto personal</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {interest.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <PadelGallery />
                </div>
            </section>


            <footer className="border-t border-cyan-600/20 py-6">
                <div className="container-custom">
                    <p className="text-sm text-center text-slate-400">
                        © {new Date().getFullYear()} Jose Carlos Membrive Martinez. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
