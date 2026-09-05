import { ProjectShell, ProjectNav, ProjectHero, ProjectSection, FeatureGrid, Media, ProjectFooter } from "../_shared";

export default function CAFDPage() {
    return (
        <ProjectShell>
            <ProjectNav />
            <ProjectHero
                eyebrow="DESARROLLO WEB / CMS"
                title="CAFD"
                tagline="Rediseño completo, desde cero, de la web oficial de la Confederación Andaluza de Federaciones Deportivas — mi primer proyecto en un equipo de desarrollo real."
                accent="blue"
                stack={["Drupal", "SQL", "Scrum", "Responsive", "Docker"]}
                liveUrl="https://cafd.es"
                github="https://github.com/josca16/CAFD"
            />

            <ProjectSection eyebrow="CONTEXTO" title="De dónde sale">
                <p className="proj-lede">
                    La CAFD agrupa y coordina todas las federaciones deportivas de Andalucía. Durante mis prácticas profesionales en CodeArt Solutions participé en el rediseño completo de su web oficial sobre Drupal, trabajando en un equipo real con metodología Scrum: sprints de dos semanas, daily standups y retrospectivas. Fue mi primera experiencia viendo cómo se construye software fuera de un aula.
                </p>
            </ProjectSection>

            <ProjectSection eyebrow="FUNCIONALIDADES" title="Qué se construyó">
                <FeatureGrid
                    accent="blue"
                    items={[
                        ["Gestión de contenido", "Sistema completo para noticias, eventos y federaciones, editable por administradores sin tocar código."],
                        ["Diseño responsive", "La misma web funciona igual de bien en móvil, tablet y escritorio, con los colores corporativos de la CAFD."],
                        ["CMS Drupal", "Estructura de contenidos sobre Drupal, con módulos ajustados a las necesidades reales de la confederación."],
                        ["Base de datos relacional", "Modelo en SQL para federaciones, noticias y eventos."],
                        ["Entorno con Docker", "Drupal, base de datos y herramientas de gestión orquestados en contenedores, reproducibles en cualquier máquina."],
                        ["Trabajo en Scrum", "Sprints de dos semanas, reuniones diarias y entregas incrementales, en un entorno de empresa real."],
                    ]}
                />
            </ProjectSection>

            <ProjectSection eyebrow="EN PANTALLA" title="Cómo se ve">
                <Media type="image" src="/projects/cafd/CapturaCAFDinicio.png" caption="Página principal" />
                <Media type="video" src="/projects/cafd/VideoCAFD.mp4" caption="Recorrido completo del sitio" />
            </ProjectSection>

            <ProjectSection eyebrow="POR DEBAJO" title="Stack técnico">
                <FeatureGrid
                    accent="blue"
                    items={[
                        ["Drupal", "CMS sobre el que se construyó toda la estructura de contenidos y la lógica de administración."],
                        ["SQL", "Base de datos relacional para federaciones, noticias y eventos."],
                        ["HTML5 / CSS3", "Maquetación semántica y estilos responsive con los colores corporativos amarillo y azul."],
                        ["PHP", "Algunas funciones puntuales del lado del servidor, dentro del ecosistema de Drupal."],
                    ]}
                />
            </ProjectSection>

            <ProjectFooter />
        </ProjectShell>
    );
}
