import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";
import ProjectPreview from "./components/ProjectPreview";
import PadelGallery from "./components/PadelGallery";
import ProjectVideo from "./components/ProjectVideo";
import ScrollReveal from "./components/ScrollReveal";
import DemoWithCode from "./components/DemoWithCode";
import CertificationCard from "./components/CertificationCard";

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
            description: "Plataforma completa para gestión de taxistas con control de jornadas, carreras y estadísticas",
            image: "/projects_logo/LOGOtaxiday.png",
            domain: "/projects/taxiday",
            technologies: ["React Native", "Spring Boot", "Java", "MariaDB", "JWT", "REST API"],
            category: "Full Stack",
            status: "Completado"
        },
        {
            title: "TaxiDay Mobile",
            description: "Aplicación móvil nativa con interfaz intuitiva para servicios de taxi",
            image: "/projects_logo/LOGOtaxiday_mobile.png",
            domain: "/projects/taxiday-mobile",
            technologies: ["React Native", "Redux", "JavaScript", "APIs", "Navigation"],
            category: "Mobile App",
            status: "Completado"
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
/**
 * @file
 * Template para mostrar las federaciones deportivas
 */

function cafd_preprocess_node(&$variables) {
    if ($variables['node']->type == 'federacion') {
        $node = $variables['node'];
        
        // Obtener datos de la federación
        $variables['federacion_nombre'] = $node->title;
        $variables['federacion_descripcion'] = $node->body['und'][0]['value'];
        $variables['federacion_logo'] = file_create_url(
            $node->field_logo['und'][0]['uri']
        );
        
        // Obtener deportes asociados
        $deportes = [];
        if (!empty($node->field_deportes)) {
            foreach ($node->field_deportes['und'] as $deporte) {
                $deportes[] = $deporte['taxonomy_term']->name;
            }
        }
        $variables['deportes'] = $deportes;
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-semibold">
                                    👨‍💻 Perfil Profesional
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    Sobre mí
                                </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Conoce mi perfil profesional y las habilidades que me definen como desarrollador
                            </p>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">🎯</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">100%</strong> Profesional</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
                                    <span className="text-2xl">🚀</span>
                                    <span className="text-sm text-slate-300"><strong className="text-purple-400">+2</strong> Años Experiencia</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    {/* Layout horizontal compacto - 4 columnas en una fila */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ScrollReveal animation="fade-up" delay={100}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-white text-2xl">💻</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Desarrollador Multiplataforma</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Programador junior titulado en <strong className="text-cyan-400">Desarrollo de Aplicaciones Multiplataforma</strong>, 
                                        con experiencia en entorno profesional tras mis prácticas en <strong className="text-cyan-400">Codearts</strong>.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={200}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-white text-2xl">⚙️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Enfoque Metódico</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Me distingo por un enfoque <strong className="text-blue-400">meticuloso y estructurado</strong>, 
                                        con especial atención al orden, la lógica y el análisis de cada proceso.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={300}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-white text-2xl">🚀</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Soluciones Efectivas</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        Busco comprender a fondo las tecnologías con las que trabajo para aportar 
                                        <strong className="text-purple-400">soluciones eficaces, estables y con sentido</strong>.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal animation="fade-up" delay={400}>
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 hover-lift">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                        <span className="text-white text-2xl">🛡️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Trabajo Colaborativo</h3>
                                    <p className="text-sm text-slate-300 leading-relaxed">
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-sm text-green-300 font-semibold">
                                    🛠️ Stack Tecnológico
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                    Habilidades
                                </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Tecnologías y competencias que domino para crear soluciones innovadoras
                            </p>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-green-500/30">
                                    <span className="text-2xl">⚡</span>
                                    <span className="text-sm text-slate-300"><strong className="text-green-400">25+</strong> Tecnologías</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">🎯</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">6</strong> Categorías</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                                    <span className="text-2xl">🚀</span>
                                    <span className="text-sm text-slate-300"><strong className="text-cyan-400">2025</strong> Actualizado</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                    
                    <div className="section-grid-2">
                        {/* Habilidades Técnicas */}
                        <ScrollReveal animation="fade-left" delay={100}>
                            <div className="relative group h-full">
                                <div className="section-card section-card-large h-full flex flex-col border-cyan-500/20 hover:border-cyan-500/40">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                            <div className="section-card-icon bg-gradient-to-br from-cyan-600 to-blue-600 w-16 h-16">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 animate-ping opacity-20"></div>
                                    </div>
                                    <div>
                                            <h3 className="section-card-title text-2xl">
                                            Habilidades Técnicas
                                        </h3>
                                            <p className="section-card-subtitle text-cyan-400">Tecnologías y herramientas que domino</p>
                                    </div>
                                </div>
                                
                                    <div className="space-y-6 flex-1">
                                    {[
                                        {
                                            category: "Lenguajes de Programación",
                                            skills: ["Java", "JavaScript", "Python", "C#", "PHP", "SQL", "TypeScript"],
                                            color: "from-blue-500 to-cyan-500",
                                            icon: "💻"
                                        },
                                        {
                                            category: "Frameworks y Librerías",
                                            skills: ["Spring Boot", "React Native", "React", "Node.js", ".NET", "Unity", "Django"],
                                            color: "from-green-500 to-emerald-500",
                                            icon: "🚀"
                                        },
                                        {
                                            category: "Bases de Datos",
                                            skills: ["MariaDB", "MongoDB", "MySQL", "PostgreSQL", "Redis"],
                                            color: "from-purple-500 to-indigo-500",
                                            icon: "🗄️"
                                        },
                                        {
                                            category: "Cloud y DevOps",
                                            skills: ["Docker", "AWS", "Azure", "Kubernetes", "CI/CD", "Git"],
                                            color: "from-orange-500 to-red-500",
                                            icon: "☁️"
                                        },
                                        {
                                            category: "Frontend y Diseño",
                                            skills: ["HTML5", "CSS3", "Tailwind", "Next.js", "Responsive Design", "UI/UX"],
                                            color: "from-pink-500 to-rose-500",
                                            icon: "🎨"
                                        },
                                        {
                                            category: "Metodologías y APIs",
                                            skills: ["APIs REST", "GraphQL", "Scrum", "Agile", "Microservicios"],
                                            color: "from-yellow-500 to-amber-500",
                                            icon: "🔄"
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
                            <div className="relative group h-full">
                                <div className="section-card section-card-large h-full flex flex-col border-purple-500/20 hover:border-purple-500/40">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative">
                                        <div className="section-card-icon bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 animate-ping opacity-20"></div>
                                    </div>
                                    <div>
                                        <h3 className="section-card-title text-2xl">
                                            Habilidades Personales
                                        </h3>
                                        <p className="section-card-subtitle text-purple-400">Competencias que me definen como profesional</p>
                                    </div>
                                </div>
                                
                                    <div className="space-y-4 flex-1">
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-semibold">
                                    💼 Portfolio Profesional
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                    Mis Proyectos
                                </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Explora mi portfolio de proyectos desarrollados con las últimas tecnologías
                            </p>
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

                    {/* Sección de Demos con Código */}
                    <ScrollReveal animation="fade-up" delay={400}>
                        <div className="text-center mb-8 mt-16">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Demos + Código
                                </span>
                            </h3>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Explora los proyectos en acción con sus respectivos fragmentos de código
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 gap-8">
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-sm text-green-300 font-semibold">
                                    💼 Trayectoria Profesional
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                                    Experiencia Laboral
                                </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Mi trayectoria profesional y académica que me ha llevado hasta aquí
                            </p>
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-full text-sm text-orange-300 font-semibold">
                                    🎓 Formación Continua
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                                    Certificaciones Profesionales
                            </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Mi compromiso con el aprendizaje continuo se refleja en estas certificaciones oficiales que respaldan mi experiencia técnica
                        </p>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                                    <span className="text-2xl">📜</span>
                                    <span className="text-sm text-slate-300"><strong className="text-cyan-400">6+</strong> Certificaciones</span>
                    </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
                                    <span className="text-2xl">💻</span>
                                    <span className="text-sm text-slate-300"><strong className="text-purple-400">3</strong> Categorías</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-blue-500/30">
                                    <span className="text-2xl">✓</span>
                                    <span className="text-sm text-slate-300"><strong className="text-blue-400">100%</strong> Verificables</span>
                                </div>
                            </div>
                    </div>
                    </ScrollReveal>
                    
                    {/* Backend Development */}
                    <ScrollReveal animation="fade-up">
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">🔧</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Desarrollo Backend</h3>
                                    <p className="text-sm text-slate-400">Lenguajes y frameworks del lado del servidor</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <CertificationCard
                                    title="Desarrollo con Python"
                                    issuer="OpenWebinars"
                                    description="Programación orientada a objetos, estructuras de datos avanzadas y desarrollo de aplicaciones en Python"
                                    pdfUrl="/certificaciones/certificado_curso_de_python__aprende_a_programar_en_python_3.pdf"
                                    icon="🐍"
                                    color="from-blue-500 to-cyan-500"
                                    skills={["Python 3", "POO", "Estructuras de datos"]}
                                />

                                <CertificationCard
                                    title="Fundamentos Python"
                                    issuer="OpenWebinars"
                                    description="Dominio de sintaxis Python, tipos de datos, funciones y módulos para el desarrollo de aplicaciones robustas"
                                    pdfUrl="/certificaciones/certificado_python_desde_cero.pdf"
                                    icon="⚡"
                                    color="from-cyan-500 to-blue-500"
                                    skills={["Python", "Programación", "Desarrollo", "Scripting"]}
                                />

                                <CertificationCard
                                    title="Desarrollo Web con PHP"
                                    issuer="OpenWebinars"
                                    description="Creación de aplicaciones web dinámicas con PHP, gestión de bases de datos y desarrollo de APIs"
                                    pdfUrl="/certificaciones/certificado_php__fundamentos.pdf"
                                    icon="🌐"
                                    color="from-indigo-500 to-purple-500"
                                    skills={["PHP", "Desarrollo web", "Backend", "Bases de datos"]}
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Business Applications & DevOps */}
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">🏢</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Herramientas Empresariales & DevOps</h3>
                                    <p className="text-sm text-slate-400">ERP, control de versiones y gestión de proyectos</p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <CertificationCard
                                    title="Desarrollo ERP con Odoo"
                                    issuer="OpenWebinars"
                                    description="Desarrollo y personalización de módulos en el ERP open source Odoo para gestión empresarial integral"
                                    pdfUrl="/certificaciones/certificado_curso_de_odoo.pdf"
                                    icon="📊"
                                    color="from-purple-500 to-indigo-500"
                                    skills={["Odoo", "ERP", "Python", "Gestión empresarial"]}
                                />

                                <CertificationCard
                                    title="Git Profesional"
                                    issuer="OpenWebinars"
                                    description="Control de versiones avanzado, flujos de trabajo colaborativos y gestión profesional de repositorios"
                                    pdfUrl="/certificaciones/certificado_curso_de_git.pdf"
                                    icon="🔧"
                                    color="from-orange-500 to-red-500"
                                    skills={["Git", "GitHub", "Control de versiones", "Colaboración"]}
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Emerging Technologies */}
                    <ScrollReveal animation="fade-up" delay={200}>
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                                    <span className="text-2xl">🤖</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Tecnologías Emergentes</h3>
                                    <p className="text-sm text-slate-400">Inteligencia Artificial y Machine Learning</p>
                                </div>
                            </div>
                            
                            <div className="flex justify-center">
                                <div className="max-w-md w-full">
                                    <CertificationCard
                                        title="IA Generativa Profesional"
                                        issuer="Microsoft & LinkedIn"
                                        description="Fundamentos de Inteligencia Artificial Generativa y sus aplicaciones prácticas en desarrollo profesional"
                                        pdfUrl="/certificaciones/CertificadoDeFinalizacion_Fundamentos profesionales de IA generativa por Microsoft y LinkedIn.pdf"
                                        icon="🤖"
                                        color="from-green-500 to-emerald-500"
                                        skills={["IA", "Machine Learning", "Generative AI", "Microsoft"]}
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Cursos empresariales adicionales */}
                    <ScrollReveal animation="fade-up" delay={600}>
                        <div className="mt-16">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                        Formación Empresarial
                                    </span>
                                </h3>
                                <p className="text-slate-400">Cursos especializados recibidos durante mi experiencia profesional</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div className="relative group">
                                    <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-500">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl text-2xl">
                                                    🔄
                                            </div>
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 animate-ping opacity-20"></div>
                                        </div>
                                        <div>
                                                <h4 className="text-xl font-bold text-white mb-1">
                                                    Metodología Scrum
                                                </h4>
                                                <p className="text-sm text-blue-400">CodeArts Solutions</p>
                                        </div>
                                    </div>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                            Formación práctica en metodologías ágiles Scrum impartida en entorno empresarial real, aplicada directamente en proyectos con clientes
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Scrum", "Agile", "Sprint", "Daily", "Retrospectivas"].map((skill, i) => (
                                                <span key={i} className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                                                    {skill}
                                                </span>
                                            ))}
                                </div>
                                        </div>
                                    </div>
                                    
                                <div className="relative group">
                                    <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl text-2xl">
                                                    🏗️
                                                </div>
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 animate-ping opacity-20"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-1">
                                                    Desarrollo con Drupal
                                                </h4>
                                                <p className="text-sm text-purple-400">CodeArts Solutions</p>
                                </div>
                            </div>
                                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                            Introducción práctica al desarrollo web con el CMS Drupal, aplicada directamente al rediseño completo del proyecto CAFD
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Drupal", "CMS", "PHP", "Twig", "Módulos"].map((skill, i) => (
                                                <span key={i} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                                                    {skill}
                                                </span>
                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-semibold">
                                    🌟 Más allá del código
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                                    Conóceme más
                                </span>
                            </h2>
                            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                                Más allá del código, estos son los aspectos que me definen como persona y que aportan valor a mi perfil profesional
                            </p>
                            <div className="mt-6 flex justify-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-emerald-500/30">
                                    <span className="text-2xl">🎓</span>
                                    <span className="text-sm text-slate-300"><strong className="text-emerald-400">Monitor</strong> Pádel</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-500/30">
                                    <span className="text-2xl">🏆</span>
                                    <span className="text-sm text-slate-300"><strong className="text-cyan-400">Torneos</strong> Regionales</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-green-500/30">
                                    <span className="text-2xl">💚</span>
                                    <span className="text-sm text-slate-300"><strong className="text-green-400">Nutrición</strong> Optimización</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                            
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
                                description: "Jugador de pádel con experiencia en competiciones locales y regionales. Desarrollé constancia, ambición y mentalidad competitiva. El deporte me enseña disciplina, trabajo en equipo y la importancia de la práctica constante."
                            },
                            {
                                title: "Nutrición",
                                icon: "💚",
                                color: "from-green-500 to-emerald-500",
                                description: "Interesado en la nutrición y el rendimiento. Me gusta aprender cómo mejorar energía y bienestar. Esta pasión por optimizar procesos y resultados se refleja también en mi enfoque hacia el desarrollo de software."
                            }
                        ].map((interest, index) => (
                            <div key={index} className="relative group">
                                <div className={`relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-${interest.color.split('-')[1]}-500/20 rounded-2xl p-8 hover:border-${interest.color.split('-')[1]}-500/40 transition-all duration-500`}>
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
