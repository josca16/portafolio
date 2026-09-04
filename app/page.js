import Image from "next/image";
import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import ProjectPreview from "./components/ProjectPreview";
import PadelGallery from "./components/PadelGallery";
import ProjectVideo from "./components/ProjectVideo";
import ScrollReveal from "./components/ScrollReveal";
import DemoWithCode from "./components/DemoWithCode";
import CertificationCard from "./components/CertificationCard";
import MobileCertifications from "./components/MobileCertifications";

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
            description: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma con GPA de 8.6/10. Formación integral en desarrollo web, móvil, bases de datos y herramientas modernas de desarrollo.",
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
            description: "Plataforma completa para gestión de taxistas con control de jornadas, carreras y estadísticas",
            image: "/projects_logo/LOGOtaxiday.png",
            domain: "/projects/taxiday",
            technologies: ["React", "Spring Boot", "Java", "MariaDB", "JWT", "REST API"],
            category: "Full Stack",
            status: "Completado"
        },
        {
            title: "TaxiDay Mobile",
            description: "Aplicación móvil nativa para servicios de taxi, actualmente en desarrollo",
            image: "/projects_logo/LOGOtaxiday_mobile.png",
            domain: "/projects/taxiday-mobile",
            technologies: ["React Native", "Redux", "JavaScript", "APIs", "Navigation"],
            category: "Mobile App",
            status: "En desarrollo"
        },
        {
            title: "CAFD",
            description: "Rediseño completo de la web oficial de la Confederación Andaluza de Federaciones Deportivas",
            image: "/projects_logo/logoCAFD.png",
            domain: "/projects/cafd",
            technologies: ["Drupal", "PHP", "SQL", "HTML5", "CSS3", "Docker"],
            category: "Web Development",
            status: "Completado"
        },
        {
            title: "Videojuegos Unity",
            description: "Colección de miniproyectos desarrollados para dominar Unity, C# y mecánicas de videojuegos",
            image: "/projects_logo/unityLogo.png",
            domain: "/projects/videojuegos-unity",
            technologies: ["Unity", "C#", "Game Development", "OOP", "Physics"],
            category: "Game Development",
            status: "Completado"
        },
    ];

    const projectVideos = [
        {
            title: "TaxiDay Demo",
            description: "Demostración de la plataforma de gestión de taxis",
            videoSrc: "/projects/taxiday/demo.mp4",
            thumbnailSrc: "/projects/taxiday/dashboard.png",
            codeSnippet: `@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private TaxistaService taxistaService;
    
    @Autowired
    private JwtService jwtService;
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Taxista taxista = taxistaService.authenticate(
                request.getLicencia(), 
                request.getPassword()
            );
            
            if (taxista == null) {
                return ResponseEntity.status(401)
                    .body("Credenciales inválidas");
            }
            
            String token = jwtService.generateToken(taxista);
            AuthResponse response = new AuthResponse(token, taxista);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body("Error interno del servidor");
        }
    }
}`,
            codeLanguage: "Java",
            codeTitle: "Controlador de Autenticación Spring Boot"
        },
        {
            title: "TaxiDay Mobile Demo",
            description: "Aplicación móvil para servicios de taxi",
            videoSrc: "/projects/taxiday_mobile/DemoTaxiDayMobile.mp4",
            thumbnailSrc: "/projects_logo/LOGOtaxiday_mobile.png",
            codeSnippet: `const HomeScreen = () => {
    const dispatch = useDispatch();
    const { carrerasHoy, ganancias } = useSelector(
        state => state.taxista);
    
    const iniciarJornada = () => {
        dispatch(iniciarJornadaAction());
        navigation.navigate('Mapa');
    };
    
    return (
        <View style={styles.container}>
            <StatCard titulo="Carreras Hoy" valor={carrerasHoy} />
            <StatCard titulo="Ganancias" valor={\`€\${ganancias}\`} />
            <Button title="Iniciar Jornada" onPress={iniciarJornada} />
        </View>
    );
};`,
            codeLanguage: "JavaScript",
            codeTitle: "Pantalla Principal React Native"
        },
        {
            title: "CAFD Demo",
            description: "Rediseño de la web de la Confederación Andaluza de Federaciones Deportivas",
            videoSrc: "/projects/cafd/VideoCAFD.mp4",
            thumbnailSrc: "/projects/cafd/CapturaCAFDinicio.png",
            codeSnippet: `<?php
function cafd_preprocess_node(&$variables) {
    if ($variables['node']->type == 'federacion') {
        $node = $variables['node'];
        $variables['federacion_nombre'] = $node->title;
        $variables['federacion_descripcion'] = $node->body['und'][0]['value'];
        $variables['federacion_logo'] = file_create_url($node->field_logo['und'][0]['uri']);
    }
}`,
            codeLanguage: "PHP",
            codeTitle: "Template Drupal para Federaciones"
        },
        {
            title: "Unity Games Demo",
            description: "Colección de videojuegos desarrollados en Unity",
            videoSrc: "/projects/videojuegos-unity/DemoGeoBattle.mp4",
            thumbnailSrc: "/projects/videojuegos-unity/CapturaToniBirds.JPG",
            codeSnippet: `public class GeoBattleController : MonoBehaviour
{
    public GameObject projectilePrefab;
    public Transform firePoint;
    public float projectileSpeed = 10f;
    public float fireRate = 0.5f;
    
    private float nextFireTime;
    private Camera playerCamera;
    
    void Start()
    {
        playerCamera = Camera.main;
    }
    
    void Update()
    {
        HandleInput();
    }
    
    void HandleInput()
    {
        // Detectar clic del mouse para disparar
        if (Input.GetMouseButtonDown(0) && Time.time >= nextFireTime)
        {
            FireProjectile();
            nextFireTime = Time.time + fireRate;
        }
        
        // Rotar hacia la posición del mouse
        Vector3 mousePos = playerCamera.ScreenToWorldPoint(Input.mousePosition);
        mousePos.z = 0f;
        Vector3 direction = (mousePos - transform.position).normalized;
        transform.rotation = Quaternion.LookRotation(Vector3.forward, direction);
    }
    
    void FireProjectile()
    {
        GameObject projectile = Instantiate(projectilePrefab, 
            firePoint.position, firePoint.rotation);
        
        Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
        rb.velocity = transform.up * projectileSpeed;
        
        Destroy(projectile, 3f); // Destruir proyectil después de 3 segundos
    }
}`,
            codeLanguage: "C#",
            codeTitle: "Sistema de Combate GeoBattle"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-900">
            <Header />

            {/* About Me Section - Premium */}
            <section id="about" className="section relative overflow-hidden">
                {/* Efectos de fondo premium */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-10 w-40 h-40 bg-cyan-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-500 rounded-full animate-pulse delay-700"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Sobre mí
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>
                    
                    {/* Layout horizontal compacto - 4 columnas en una fila */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                                        <span className="text-white text-xl md:text-2xl">💻</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3">Desarrollador Multiplataforma</h3>
                                    {/* Versión móvil - más concisa */}
                                    <p className="text-sm text-slate-300 leading-relaxed md:hidden">
                                        Programador junior titulado en <strong className="text-cyan-400">Desarrollo de Aplicaciones Multiplataforma</strong>, 
                                        con experiencia profesional en <strong className="text-cyan-400">Codearts</strong>.
                                    </p>
                                    {/* Versión desktop - completa */}
                                    <p className="text-sm text-slate-300 leading-relaxed hidden md:block">
                                        Programador junior titulado en <strong className="text-cyan-400">Desarrollo de Aplicaciones Multiplataforma</strong>, 
                                        con experiencia en entorno profesional tras mis prácticas en <strong className="text-cyan-400">Codearts</strong>.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                                        <span className="text-white text-xl md:text-2xl">⚙️</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3">Enfoque Metódico</h3>
                                    {/* Versión móvil - más concisa */}
                                    <p className="text-sm text-slate-300 leading-relaxed md:hidden">
                                        Me distingo por un enfoque <strong className="text-blue-400">meticuloso y estructurado</strong>, 
                                        con especial atención al orden y la lógica.
                                    </p>
                                    {/* Versión desktop - completa */}
                                    <p className="text-sm text-slate-300 leading-relaxed hidden md:block">
                                        Me distingo por un enfoque <strong className="text-blue-400">meticuloso y estructurado</strong>, 
                                        con especial atención al orden, la lógica y el análisis de cada proceso.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                                        <span className="text-white text-xl md:text-2xl">🚀</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3">Soluciones Efectivas</h3>
                                    {/* Versión móvil - más concisa */}
                                    <p className="text-sm text-slate-300 leading-relaxed md:hidden">
                                        Busco comprender a fondo las tecnologías para aportar 
                                        <strong className="text-purple-400">soluciones eficaces y estables</strong> con sentido.
                                    </p>
                                    {/* Versión desktop - completa */}
                                    <p className="text-sm text-slate-300 leading-relaxed hidden md:block">
                                        Busco comprender a fondo las tecnologías con las que trabajo para aportar 
                                        <strong className="text-purple-400">soluciones eficaces, estables y con sentido</strong>.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                                        <span className="text-white text-xl md:text-2xl">🛡️</span>
                                    </div>
                                    <h3 className="text-sm md:text-lg font-bold text-white mb-2 md:mb-3">Trabajo Colaborativo</h3>
                                    {/* Versión móvil - más concisa */}
                                    <p className="text-sm text-slate-300 leading-relaxed md:hidden">
                                        Disfruto aprendiendo de otros y <strong className="text-green-400">sumando claridad en entornos colaborativos</strong>, 
                                        siempre buscando mejorar profesionalmente.
                                    </p>
                                    {/* Versión desktop - completa */}
                                    <p className="text-sm text-slate-300 leading-relaxed hidden md:block">
                                        Disfruto aprendiendo de otros y <strong className="text-green-400">sumando claridad en entornos colaborativos</strong>, 
                                        siempre buscando mejorar y crecer profesionalmente.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            {/* Skills Section - Premium */}
            <section id="skills" className="section relative overflow-hidden">
                {/* Efectos de fondo premium */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-orange-500 rounded-full animate-pulse delay-700"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-8">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-sm text-green-300 font-semibold">
                                    🛠️ Stack Tecnológico
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-8">
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                Habilidades
                                </span>
                            </h2>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-green-500/30">
                                    <span className="text-2xl">⚡</span>
                                    <span className="text-sm text-slate-300"><strong className="text-green-400">25+</strong> Tecnologías</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">🎯</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">6</strong> Categorías</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    {/* Versión móvil - Habilidades mejoradas */}
                    <div className="md:hidden mb-8">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6">
                                
                                {/* Habilidades Técnicas */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                                            <span className="text-white text-lg">💻</span>
                                        </div>
                                        <h4 className="text-base font-bold text-cyan-400">Técnicas</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { name: "Java", level: "Avanzado", color: "from-orange-500 to-red-500" },
                                            { name: "TypeScript", level: "Intermedio", color: "from-blue-600 to-cyan-600" },
                                            { name: "Python", level: "Intermedio", color: "from-blue-500 to-cyan-500" },
                                            { name: "React", level: "Intermedio", color: "from-cyan-400 to-blue-500" },
                                            { name: "Docker", level: "Intermedio", color: "from-blue-600 to-indigo-600" },
                                            { name: ".NET", level: "Intermedio", color: "from-purple-500 to-indigo-500" },
                                            { name: "Spring Boot", level: "Avanzado", color: "from-green-500 to-emerald-500" },
                                            { name: "SQL", level: "Avanzado", color: "from-blue-500 to-purple-500" }
                                        ].map((skill, index) => (
                                            <div key={index} className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/30">
                                                <div className="text-sm font-semibold text-white mb-1">{skill.name}</div>
                                                <div className="text-xs text-slate-400 mb-2">{skill.level}</div>
                                                <div className={`h-1.5 bg-gradient-to-r ${skill.color} rounded-full`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Habilidades Personales */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <span className="text-white text-lg">🧠</span>
                                        </div>
                                        <h4 className="text-base font-bold text-purple-400">Personales</h4>
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Liderazgo", desc: "Dirigir equipos y proyectos", icon: "👑" },
                                            { name: "Creatividad", desc: "Soluciones innovadoras", icon: "💡" },
                                            { name: "Adaptabilidad", desc: "Flexibilidad en cambios", icon: "🔄" },
                                            { name: "Trabajo en equipo", desc: "Colaboración efectiva", icon: "🤝" }
                                        ].map((skill, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/30">
                                                <div className="text-2xl">{skill.icon}</div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold text-white">{skill.name}</div>
                                                    <div className="text-xs text-slate-400">{skill.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Versión desktop - Habilidades mejoradas */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8">
                        {/* Habilidades Técnicas */}
                        <ScrollReveal animation="fade-left" delay={100}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <span className="text-white text-2xl">💻</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Habilidades Técnicas</h3>
                                        <p className="text-cyan-400 text-base">Tecnologías que domino</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { name: "Java", level: "Avanzado", progress: 90, color: "from-orange-500 to-red-500" },
                                        { name: "Spring Boot", level: "Avanzado", progress: 85, color: "from-green-500 to-emerald-500" },
                                        { name: "SQL", level: "Avanzado", progress: 85, color: "from-blue-500 to-purple-500" },
                                        { name: "Python", level: "Intermedio", progress: 80, color: "from-blue-500 to-cyan-500" },
                                        { name: "TypeScript", level: "Intermedio", progress: 75, color: "from-blue-600 to-cyan-600" },
                                        { name: ".NET", level: "Intermedio", progress: 70, color: "from-purple-500 to-indigo-500" },
                                        { name: "React", level: "Intermedio", progress: 70, color: "from-cyan-400 to-blue-500" },
                                        { name: "Docker", level: "Intermedio", progress: 65, color: "from-blue-600 to-indigo-600" }
                                    ].map((skill, index) => (
                                        <div key={index} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">{skill.name}</span>
                                                <span className="text-xs text-slate-400">{skill.level}</span>
                                            </div>
                                            <div className="w-full bg-slate-700/50 rounded-full h-2">
                                                <div 
                                                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{ width: `${skill.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Habilidades Personales */}
                        <ScrollReveal animation="fade-right" delay={200}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                                        <span className="text-white text-2xl">🧠</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Habilidades Personales</h3>
                                        <p className="text-purple-400 text-base">Competencias que me definen</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4">
                                    {[
                                        { name: "Liderazgo", desc: "Dirigir equipos y proyectos con eficacia", icon: "👑", color: "from-yellow-500 to-orange-500" },
                                        { name: "Creatividad", desc: "Desarrollo de soluciones innovadoras", icon: "💡", color: "from-blue-500 to-cyan-500" },
                                        { name: "Adaptabilidad", desc: "Flexibilidad ante cambios y desafíos", icon: "🔄", color: "from-green-500 to-emerald-500" },
                                        { name: "Trabajo en equipo", desc: "Colaboración efectiva y comunicación", icon: "🤝", color: "from-purple-500 to-pink-500" },
                                        { name: "Pensamiento crítico", desc: "Análisis lógico y resolución de problemas", icon: "🧩", color: "from-indigo-500 to-purple-500" },
                                        { name: "Aprendizaje continuo", desc: "Curiosidad constante y mejora personal", icon: "📚", color: "from-cyan-500 to-blue-500" }
                                    ].map((skill, index) => (
                                        <div key={index} className="group flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 hover:bg-slate-600/40 transition-all duration-300">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                                {skill.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">{skill.name}</h4>
                                                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{skill.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </section>


            {/* Projects Section - Reorganizada */}
            <section id="projects" className="section relative overflow-hidden bg-slate-800/30">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-8">
                                <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Mis Proyectos
                                </span>
                            </h2>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
                                    <span className="text-2xl">🚀</span>
                                    <span className="text-sm text-slate-300"><strong className="text-purple-400">+4</strong> Proyectos</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                                    <span className="text-2xl">🎯</span>
                                    <span className="text-sm text-slate-300"><strong className="text-cyan-400">100%</strong> Funcionales</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">💻</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">Multi</strong> Tecnologías</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Grid de proyectos con preview mejorado */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null;
                            }
                            return (
                                <ScrollReveal key={index} animation="bounce-in" delay={index * 100}>
                                    <ProjectItem project={project} />
                                </ScrollReveal>
                            );
                        })}
                    </div>

                    {/* Sección de Demos con Código - Oculto en móvil */}
                    <ScrollReveal animation="fade-up" delay={400} className="hidden md:block">
                        <div className="text-center mb-8 mt-16">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Demos + Código
                            </span>
                            </h3>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Explora los proyectos en acción con sus respectivos fragmentos de código
                        </p>
                    </div>
                        </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8 hidden md:grid">
                        {projectVideos.map((video, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                                <DemoWithCode
                                    videoSrc={video.videoSrc}
                                    videoTitle={video.title}
                                    codeSnippet={video.codeSnippet}
                                    codeLanguage={video.codeLanguage}
                                    codeTitle={video.codeTitle}
                                    codeDescription={video.description}
                                    aspectRatio="16/9"
                            />
                        </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* Work Experience Section*/}
            <section id="experience" className="section relative overflow-hidden">
                {/* Efectos de fondo premium */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-8">
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                                Experiencia Laboral
                            </span>
                            </h2>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-green-500/30">
                                    <span className="text-2xl">💼</span>
                                    <span className="text-sm text-slate-300"><strong className="text-green-400">+4</strong> Proyectos</span>
                    </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">⏱️</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">2+</strong> Años</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Versión móvil - Experiencia compacta */}
                    <div className="md:hidden mb-8">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-white mb-4 text-center">Mi Experiencia</h3>
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-green-500/30 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                                            <div className="flex items-start gap-4">
                                                <div className="relative">
                                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                                        <Image
                                                            src="/company_logo/codearts.png"
                                                            alt="CodeArts Logo"
                                                            width={32}
                                                            height={32}
                                                            className="object-contain"
                                                        />
                                </div>
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-base font-bold text-white mb-1">CodeArts Solutions</h4>
                                                    <p className="text-sm text-green-400 font-semibold mb-1">Desarrollador en Prácticas</p>
                                                    <p className="text-xs text-slate-400 mb-2">2024 - 2025</p>
                                                    <p className="text-sm text-slate-300">Desarrollo web con Drupal y PHP</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="relative group">
                                        <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-purple-500/30 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                                            <div className="flex items-start gap-4">
                                                <div className="relative">
                                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                                        <Image
                                                            src="/company_logo/cesur.png"
                                                            alt="Cesur Logo"
                                                            width={32}
                                                            height={32}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-base font-bold text-white mb-1">Cesur Formación</h4>
                                                    <p className="text-sm text-purple-400 font-semibold mb-1">Grado Superior DAM</p>
                                                    <p className="text-xs text-slate-400 mb-2">Sep 2023 - Jun 2025</p>
                                                    <p className="text-sm text-slate-300">Desarrollo de Aplicaciones Multiplataforma • <span className="text-yellow-400 font-semibold">8.6/10</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 hidden md:grid">
                        {experiences.map((experience, index) => (
                            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                                <ExperienceItem experience={experience} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications Section - MEJORADA */}
            <section id="certifications" className="section relative overflow-hidden">
                {/* Efectos de fondo premium */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-8">
                            <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                    Certificaciones Profesionales
                            </span>
                            </h2>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                                    <span className="text-2xl">📜</span>
                                    <span className="text-sm text-slate-300"><strong className="text-cyan-400">6+</strong> Certificaciones</span>
                    </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">100%</strong> Verificables</span>
                                </div>
                            </div>
                    </div>
                    </ScrollReveal>
                    
                    {/* Grid compacto de certificaciones */}
                    <ScrollReveal animation="fade-up">
                        {/* Versión móvil - Lista con enlaces */}
                        <MobileCertifications />

                        {/* Versión desktop - Grid compacto 3x2 */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 hidden md:grid">
                            <CertificationCard
                                title="Python Avanzado"
                                issuer="OpenWebinars"
                                description="POO, estructuras de datos y desarrollo de aplicaciones"
                                pdfUrl="/certificaciones/certificado_curso_de_python__aprende_a_programar_en_python_3.pdf"
                                icon="🐍"
                                color="from-blue-500 to-cyan-500"
                                skills={["Python 3", "POO"]}
                            />

                            <CertificationCard
                                title="Desarrollo Web PHP"
                                issuer="OpenWebinars"
                                description="Aplicaciones web dinámicas y APIs"
                                pdfUrl="/certificaciones/certificado_php__fundamentos.pdf"
                                icon="🌐"
                                color="from-indigo-500 to-purple-500"
                                skills={["PHP", "Backend"]}
                            />

                            <CertificationCard
                                title="Odoo ERP"
                                issuer="OpenWebinars"
                                description="Desarrollo de módulos empresariales"
                                pdfUrl="/certificaciones/certificado_curso_de_odoo.pdf"
                                icon="📊"
                                color="from-purple-500 to-indigo-500"
                                skills={["Odoo", "ERP"]}
                            />

                            <CertificationCard
                                title="Git Profesional"
                                issuer="OpenWebinars"
                                description="Control de versiones avanzado"
                                pdfUrl="/certificaciones/certificado_curso_de_git.pdf"
                                icon="🔧"
                                color="from-orange-500 to-red-500"
                                skills={["Git", "GitHub"]}
                            />

                            <CertificationCard
                                title="IA Generativa"
                                issuer="Microsoft & LinkedIn"
                                description="Fundamentos de Inteligencia Artificial"
                                pdfUrl="/certificaciones/CertificadoDeFinalizacion_Fundamentos%20profesionales%20de%20IA%20generativa%20por%20Microsoft%20y%20LinkedIn.pdf"
                                icon="🤖"
                                color="from-green-500 to-emerald-500"
                                skills={["IA", "ML"]}
                            />

                            <CertificationCard
                                title="Scrum & Drupal"
                                issuer="CodeArts Solutions"
                                description="Formación empresarial en metodologías ágiles y CMS"
                                icon="🔄"
                                color="from-blue-500 to-purple-500"
                                skills={["Scrum", "Drupal"]}
                            />
                        </div>
                    </ScrollReveal>
                                    </div>
            </section>

            {/* Personal Interests Section - Movido al final */}
            <section id="interests" className="section relative overflow-hidden bg-slate-800/30">
                {/* Efectos de fondo */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full animate-pulse delay-500"></div>
                                </div>

                <div className="container-custom relative z-10">
                    <ScrollReveal animation="zoom-rotate">
                        <div className="text-center mb-6 md:mb-12">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-semibold">
                                    🌟 Más allá del código
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-8">
                            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                                Conóceme más
                            </span>
                        </h2>
                        </div>
                    </ScrollReveal>

                    {/* Sección Mi Pádel - Cuadro independiente */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-cyan-500/20 rounded-2xl p-6">
                            <div className="space-y-4">
                                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🎓</span>
                                        <h4 className="text-lg font-semibold text-white">Monitor de Pádel</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">Monitor de pádel. Me motiva enseñar, comunicar y ver el progreso de los demás. Esta experiencia me ha enseñado paciencia, claridad en la comunicación y la satisfacción de ver cómo otros mejoran con mi ayuda.</p>
                                </div>
                                
                                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">🏆</span>
                                        <h4 className="text-lg font-semibold text-white">Jugador de Pádel</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">Jugador de pádel con experiencia en torneos provinciales y regionales. Desarrollé constancia, ambición y mentalidad competitiva. El deporte me enseña disciplina, trabajo en equipo y la importancia de la práctica constante.</p>
                                </div>
                                
                                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">💚</span>
                                        <h4 className="text-lg font-semibold text-white">Nutrición y Rendimiento</h4>
                                    </div>
                                    <p className="text-sm text-slate-300">Interesado en la nutrición y el rendimiento. Me gusta aprender cómo mejorar energía y bienestar. Esta pasión por optimizar procesos y resultados se refleja también en mi enfoque hacia el desarrollo de software.</p>
                                </div>
                            </div>
                        </div>
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
