import { ProjectShell, ProjectNav, ProjectHero, ProjectSection, FeatureGrid, Media, ProjectFooter } from "../_shared";

export default function TaxiDayMobilePage() {
    return (
        <ProjectShell>
            <ProjectNav />
            <ProjectHero
                eyebrow="MOBILE / PROTOTIPO EN DESARROLLO"
                title="TaxiDay Mobile"
                tagline="La versión nativa de TaxiDay, pensada para que un taxista lo lleve en el bolsillo. Todavía en desarrollo — esto es un prototipo, no un producto terminado."
                accent="orange"
                stack={["React Native", "JavaScript", "React Navigation"]}
            />

            <ProjectSection eyebrow="POR QUÉ" title="La misma idea, en el móvil">
                <p className="proj-lede">
                    TaxiDay nació pensando en mi padre, taxista desde hace más de 20 años, y en lo poco intuitivas que le resultaban las apps que probaba. La versión web ya resuelve lo esencial; esta es la exploración de cómo sería esa misma experiencia nativa, en el móvil, con la app siempre a mano entre carrera y carrera.
                </p>
            </ProjectSection>

            <ProjectSection eyebrow="ESTADO ACTUAL" title="Qué hay hecho, honestamente">
                <FeatureGrid
                    accent="orange"
                    items={[
                        ["Navegación entre pantallas", "Estructura de la app con React Navigation: login, jornadas y perfil."],
                        ["Consumo de la API de TaxiDay", "Conexión con el mismo backend en Spring Boot que usa la versión web."],
                        ["Diseño mobile-first", "Interfaz pensada desde cero para pantalla táctil, no una adaptación de la web."],
                        ["En construcción", "Persistencia local, notificaciones y pulido de UI son los siguientes pasos, todavía sin cerrar."],
                    ]}
                />
            </ProjectSection>

            <ProjectSection eyebrow="EN PANTALLA" title="Demo">
                <Media type="video" src="/projects/taxiday_mobile/DemoTaxiDayMobile.mp4" caption="Prototipo — estado actual" />
            </ProjectSection>

            <ProjectSection eyebrow="POR DEBAJO" title="Stack técnico">
                <FeatureGrid
                    accent="orange"
                    items={[
                        ["React Native", "Base de la app, compartiendo lógica y componentes entre iOS y Android."],
                        ["JavaScript (ES6+)", "Lógica de la aplicación y comunicación con la API."],
                        ["React Navigation", "Navegación entre pantallas de la app."],
                        ["APIs REST", "Mismo backend de TaxiDay, consumido desde el cliente móvil."],
                    ]}
                />
            </ProjectSection>

            <ProjectFooter />
        </ProjectShell>
    );
}
