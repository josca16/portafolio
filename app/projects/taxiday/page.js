import { ProjectShell, ProjectNav, ProjectHero, ProjectSection, FeatureGrid, Media, ProjectFooter } from "../_shared";

export default function TaxiDayPage() {
    return (
        <ProjectShell>
            <ProjectNav />
            <ProjectHero
                eyebrow="BACKEND / FULL STACK"
                title="TaxiDay"
                tagline="Plataforma para registrar jornadas, turnos, carreras e ingresos de taxistas — nacida de una necesidad real de mi familia, no de un enunciado de clase."
                accent="orange"
                stack={["Java 17", "Spring Boot", "React", "MariaDB", "Docker"]}
                github="https://github.com/josca16/TaxiDay"
            />

            <ProjectSection eyebrow="ORIGEN" title="Por qué existe">
                <p className="proj-lede">
                    Mi padre lleva más de 20 años como taxista, y ninguna de las aplicaciones que probó le resultaba realmente útil: poco intuitivas y pensadas para un caso genérico, no para el día a día de alguien que necesita anotar una carrera entre semáforo y semáforo. TaxiDay nació escuchando eso — una interfaz simple, construida sobre un backend que sí lleva las cosas bien hechas por debajo.
                </p>
            </ProjectSection>

            <ProjectSection eyebrow="FUNCIONALIDADES" title="Qué hace">
                <FeatureGrid
                    accent="orange"
                    items={[
                        ["Dashboard con métricas reales", "Jornadas activas, número de carreras y recaudación diaria de un vistazo."],
                        ["Gestión de jornadas y turnos", "Crear, gestionar y cerrar jornadas con registro detallado de la actividad."],
                        ["Estadísticas diarias y mensuales", "Visualización del rendimiento y tendencias a lo largo del tiempo."],
                        ["Autenticación segura", "Login con licencia de taxista y contraseña, con inicio de sesión social."],
                        ["Diseño responsive", "La misma interfaz funciona igual de bien en el móvil que en el escritorio."],
                        ["Base de datos robusta", "MariaDB, garantizando integridad de los datos de cada carrera."],
                    ]}
                />
            </ProjectSection>

            <ProjectSection eyebrow="EN PANTALLA" title="Cómo se ve">
                <div className="proj-media-grid">
                    <Media type="image" src="/projects/taxiday/login.png" caption="Pantalla de acceso" />
                    <Media type="image" src="/projects/taxiday/dashboard.png" caption="Panel principal" />
                </div>
                <Media type="video" src="/projects/taxiday/demo.mp4" caption="Demo completa" />
            </ProjectSection>

            <ProjectSection eyebrow="POR DEBAJO" title="Stack técnico">
                <FeatureGrid
                    accent="orange"
                    items={[
                        ["Frontend — React", "Interfaz construida con componentes reutilizables y navegación pensada para un uso rápido, casi de un solo vistazo."],
                        ["Backend — Spring Boot", "API REST con autenticación, gestión de roles y comunicación segura entre capas."],
                        ["Base de datos — MariaDB", "Modelo relacional para jornadas, turnos y carreras, con Adminer para gestión rápida sin herramientas extra."],
                        ["Docker Compose", "Backend, frontend, base de datos y Adminer orquestados en un único entorno reproducible."],
                    ]}
                />
            </ProjectSection>

            <ProjectFooter />
        </ProjectShell>
    );
}
