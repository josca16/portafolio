import { ProjectShell, ProjectNav, ProjectHero, ProjectSection, FeatureGrid, Media, ProjectFooter } from "../_shared";

export default function UnityGamesPage() {
    return (
        <ProjectShell>
            <ProjectNav />
            <ProjectHero
                eyebrow="GAME DEV / C#"
                title="Videojuegos Unity"
                tagline="Tres proyectos hechos durante mi formación, cada uno un paso más allá del anterior: de las físicas básicas a un shooter 3D con IA de enemigos."
                accent="green"
                stack={["Unity", "C#", "Físicas", "Sprites 2D", "Game Design"]}
            />

            <ProjectSection eyebrow="01 — PRIMER CONTACTO" title="Roll a Ball">
                <p className="proj-lede">
                    Mi primer proyecto en Unity: controlar una bola por un circuito, recoger monedas y llegar a la plataforma final. Sirvió para asentar lo esencial del motor — físicas, input del usuario, colisiones y un sistema de puntuación simple.
                </p>
                <Media type="video" src="/projects/videojuegos-unity/DemoRollABall.mp4" caption="Roll a Ball — demo" />
                <FeatureGrid
                    accent="blue"
                    items={[
                        ["Unity 3D", "Componentes y prefabs fundamentales del motor."],
                        ["Físicas", "Movimiento y colisiones basados en el sistema de físicas de Unity."],
                        ["Input System", "Control de la bola a partir de la entrada del jugador."],
                        ["Navegación 3D", "Circuito con recolección de monedas y meta."],
                    ]}
                />
            </ProjectSection>

            <ProjectSection eyebrow="02 — HOMENAJE A TONI" title="TonyBird">
                <p className="proj-lede">
                    Un Flappy Bird propio, protagonizado por mi compañero y amigo Toni — un homenaje, no una copia sin más. Fue mi primer proyecto 2D: menú principal, mecánica de vuelo y obstáculos, y un sistema de puntuación al estilo del original.
                </p>
                <div className="proj-media-grid">
                    <Media type="video" src="/projects/videojuegos-unity/DemoToniBird.mp4" caption="TonyBird — demo" />
                    <Media type="image" src="/projects/videojuegos-unity/CapturaToniBirds.JPG" caption="Captura del juego" />
                </div>
                <FeatureGrid
                    accent="green"
                    items={[
                        ["Unity 2D", "Primer proyecto trabajando en dos dimensiones."],
                        ["Animación de sprites", "Movimiento y ciclos de animación del personaje."],
                        ["Diseño de UI", "Menú principal y pantalla de puntuación."],
                        ["Estados de juego", "Transición entre menú, partida y game over."],
                    ]}
                />
            </ProjectSection>

            <ProjectSection eyebrow="03 — MECÁNICAS AVANZADAS" title="Geobattle">
                <p className="proj-lede">
                    Un shooter 3D: controlas un cubo que dispara, recoge munición y vida, y se enfrenta a enemigos con IA propia hasta llegar a un jefe final con más vida y mayor cadencia de disparo. El proyecto más ambicioso de los tres, documentado en profundidad como trabajo de fin de módulo.
                </p>
                <Media type="video" src="/projects/videojuegos-unity/DemoGeoBattle.mp4" caption="Geobattle — demo" />
                <p style={{ marginTop: "-6px" }}>
                    <a className="button button-quiet" href="/projects/videojuegos-unity/004_PMYDM_Membrive_Martinez_JoseCarlos.pptx" download>
                        Descargar documentación ↓
                    </a>
                </p>
                <FeatureGrid
                    accent="orange"
                    items={[
                        ["Sistema de vida y munición", "Recolección de recursos y gestión de estado del jugador."],
                        ["IA de enemigos", "Enemigos con comportamiento propio y munición infinita."],
                        ["Boss battle", "Fase final con un enemigo más grande, más vida y disparo más rápido."],
                        ["Documentación completa", "Memoria del proyecto entregada como trabajo de fin de módulo."],
                    ]}
                />
            </ProjectSection>

            <ProjectFooter />
        </ProjectShell>
    );
}
