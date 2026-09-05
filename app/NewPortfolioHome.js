import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import PortfolioAssistant from "./PortfolioAssistant";

const projects = [
    {
        number: "01",
        title: "TaxiDay",
        type: "Backend / Full stack",
        description:
            "Plataforma para registrar jornadas, turnos, carreras e ingresos de taxistas, nacida de una necesidad real de mi familia.",
        proof: "Java 17 · Spring Boot · REST · MariaDB · Docker",
        link: "/projects/taxiday",
        image: "/projects/taxiday/login.png",
        accent: "orange",
    },
    {
        number: "02",
        title: "CAFD",
        type: "Proyecto profesional",
        description:
            "Rediseño y desarrollo de la web de la Confederación Andaluza de Federaciones Deportivas durante mis prácticas en CodeArts.",
        proof: "Drupal · SQL · Scrum · Responsive",
        link: "/projects/cafd",
        image: "/projects/cafd/CapturaCAFDinicio.png",
        accent: "blue",
    },
    {
        number: "03",
        title: "Videojuegos Unity",
        type: "Proyecto personal",
        description:
            "Tres videojuegos 2D/3D construidos para dominar Unity, C# y las mecánicas de físicas y jugabilidad.",
        proof: "Unity · C# · Físicas · Diseño de niveles",
        link: "/projects/videojuegos-unity",
        image: "/projects/videojuegos-unity/CapturaToniBirds.JPG",
        accent: "green",
    },
    {
        number: "04",
        title: "TaxiDay Mobile",
        type: "En desarrollo",
        description:
            "Prototipo móvil para llevar la gestión de la jornada al contexto real de un taxista en movimiento.",
        proof: "React Native · JavaScript · navegación",
        link: "/projects/taxiday-mobile",
        image: "/projects_logo/LOGOtaxiday_mobile.png",
        accent: "orange",
    },
];

const capabilities = [
    ["Backend", "Java, Spring Boot, APIs REST, JPA, SQL y autenticación", "orange"],
    ["Entrega", "Git, Docker, documentación técnica y entornos reproducibles", "blue"],
    ["IA aplicada", "Uso de IA para analizar problemas, acelerar desarrollo, documentar y revisar con criterio", "green"],
    ["Forma de trabajar", "Orden, pensamiento lógico, aprendizaje continuo y comunicación clara", "orange"],
];

export default function NewPortfolioHome() {
    return (
        <main className="site-shell">
            <ScrollReveal />
            <PortfolioAssistant />
            <nav className="topbar page-width">
                <a className="wordmark" href="#top" aria-label="Inicio">
                    JC<span>.</span>
                </a>
                <div className="nav-links">
                    <a href="#work">Trabajo</a>
                    <a href="#capabilities">Capacidades</a>
                    <a href="#about">Sobre mí</a>
                    <a className="nav-cta" href="mailto:josecarlosmartinez98@outlook.com">
                        Contacto
                    </a>
                </div>
            </nav>

            <section id="top" className="hero page-width">
                <div className="hero-copy">
                    <p className="eyebrow">SEVILLA · DISPONIBLE PARA OPORTUNIDADES</p>
                    <h1>
                        Construyo software con
                        <em> criterio.</em>
                    </h1>
                    <p className="hero-lede">
                        Desarrollador junior orientado a backend Java y Spring Boot. Me gusta convertir problemas reales en productos claros, mantenibles y útiles, usando la IA como acelerador y no como sustituto del razonamiento.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#work">Ver proyectos <span>↘</span></a>
                        <a className="button button-quiet" href="https://github.com/josca16" target="_blank" rel="noreferrer">GitHub ↗</a>
                    </div>
                </div>
                <div className="hero-side">
                    <div className="portrait-frame">
                        <Image src="/social/profile.png" alt="Jose Carlos Membrive" fill sizes="(max-width: 800px) 70vw, 340px" priority />
                    </div>
                    <div className="hero-note">
                        <span className="status-dot" />
                        <p>Buscando mi primera oportunidad estable en desarrollo de software.</p>
                    </div>
                </div>
            </section>

            <section className="proof-strip page-width" aria-label="Resumen profesional">
                <div><strong>8,6</strong><span>media DAM</span></div>
                <div><strong>Java</strong><span>stack principal</span></div>
                <div><strong>Real</strong><span>experiencia en CodeArts</span></div>
                <div><strong>IA</strong><span>trabajo aumentado</span></div>
            </section>

            <section id="work" className="section-block page-width">
                <div className="section-heading reveal">
                    <p className="eyebrow">EVIDENCIA, NO PALABRAS</p>
                    <h2>Trabajo seleccionado</h2>
                    <p>Una selección corta de proyectos que puedo explicar de principio a fin: problema, arquitectura, decisiones y límites.</p>
                </div>
                <div className="project-grid reveal-group">
                    {projects.map((project) => (
                        <a className={`project-card-new accent-${project.accent}`} href={project.link} key={project.title}>
                            <div className="project-thumb">
                                <span className="project-tag">{project.type}</span>
                                <Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
                            </div>
                            <div className="project-card-body">
                                <p className="project-number">{project.number}</p>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-card-foot">
                                    <span>{project.proof}</span>
                                    <b>↗</b>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section id="capabilities" className="section-block section-tint">
                <div className="page-width capabilities-grid">
                    <div className="section-heading reveal">
                        <p className="eyebrow">LO QUE APORTO</p>
                        <h2>Base sólida.<br /><em>Aprendizaje honesto.</em></h2>
                    </div>
                    <div className="capabilities-list reveal-group">
                        {capabilities.map(([title, text, color], index) => (
                            <div className={`capability cap-${color}`} key={title}>
                                <span>0{index + 1}</span>
                                <div><h3>{title}</h3><p>{text}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="about-block page-width reveal">
                <div className="about-label">
                    <div className="about-label-top">
                        <p className="eyebrow">SOBRE MÍ</p>
                        <span>01</span>
                    </div>
                    <dl className="about-facts">
                        <div>
                            <dt>Formación</dt>
                            <dd>Técnico Superior en DAM · Cesur, Sevilla · 8,6/10</dd>
                        </div>
                        <div>
                            <dt>Experiencia</dt>
                            <dd>Desarrollador en Prácticas · CodeArt Solutions</dd>
                        </div>
                        <div>
                            <dt>Base técnica</dt>
                            <dd>Java · Spring Boot · IA aplicada · Diseño web</dd>
                        </div>
                        <div>
                            <dt>Fuera del código</dt>
                            <dd>Monitor y jugador de pádel · torneos provinciales y andaluces</dd>
                        </div>
                        <div>
                            <dt>Ubicación</dt>
                            <dd>Sevilla, España · disponible para reubicarme</dd>
                        </div>
                    </dl>
                </div>
                <div className="about-copy">
                    <h2>Estoy construyendo una carrera con paciencia, dirección y trabajo real.</h2>
                    <p>
                        Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (Cesur, Sevilla, nota media 8,6/10). Antes de llamarme especialista en algo que aún estoy consolidando, prefiero demostrarlo con proyectos y conversaciones técnicas claras: cómo lo pensé, qué decisiones tomé y dónde están sus límites.
                    </p>
                    <p>
                        Mi experiencia como monitor y jugador de pádel me enseñó a explicar, escuchar y adaptar una solución a la persona que la necesita — la misma idea que aplico al programar: entender el problema real antes de escribir la primera línea.
                    </p>
                    <p>
                        Trabajo con IA generativa a diario, pero como herramienta que acelera, no que sustituye el criterio: reviso, cuestiono y entiendo cada línea que uso. Ahora mismo busco mi primera oportunidad estable en desarrollo, donde seguir creciendo técnicamente y aportar rigor desde el primer día.
                    </p>
                </div>
            </section>

            <section className="contact-block page-width reveal">
                <p className="eyebrow">¿HABLAMOS?</p>
                <h2>Un problema bien planteado<br /><em>merece una buena solución.</em></h2>
                <a className="button button-primary" href="mailto:josecarlosmartinez98@outlook.com">josecarlosmartinez98@outlook.com <span>↗</span></a>
            </section>

            <footer className="footer page-width">
                <span>Jose Carlos Membrive</span>
                <span>Backend Java · IA aplicada · Sevilla</span>
                <span className="footer-hint" title="Para quien mira el código">{"// GET /api/cv"}</span>
                <a href="https://www.linkedin.com/in/jose-carlos-membrive/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </footer>
        </main>
    );
}
