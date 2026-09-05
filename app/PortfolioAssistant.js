"use client";

import { useEffect, useRef, useState } from "react";

// Small local knowledge base built from the real content of this portfolio —
// no external API, no cost, no network call. Matches by keyword and answers
// in first person, as José Carlos would, in the same voice used across the
// rest of the site.
const KB = [
    {
        id: "tech",
        keywords: ["tecnologia", "tecnologias", "stack", "sabes", "dominas", "lenguaje", "lenguajes", "habilidad", "habilidades"],
        answer: "Mi base es Java y Spring Boot, con C#/.NET y Python de apoyo. En bases de datos me muevo con SQL (MariaDB) y MongoDB, y en frontend con React, Next.js y Tailwind CSS. En DevOps uso Docker, Azure y Git. Y sí, uso IA generativa (Claude, ChatGPT) en el día a día para documentar y acelerar — revisando siempre lo que sale de ahí antes de darlo por bueno.",
    },
    {
        id: "ia",
        keywords: ["ia", "inteligencia artificial", "chatgpt", "claude", "llm", "ia aplicada"],
        answer: "La IA generativa es parte de cómo trabajo: la uso para documentación, prototipado rápido y refactorización asistida. Me ayuda a pensar más rápido, pero entiendo y reviso cada línea antes de darla por buena — la trato como herramienta, no como sustituto.",
    },
    {
        id: "experiencia",
        keywords: ["experiencia", "codeart", "practicas", "prácticas", "trabajo profesional", "empresa"],
        answer: "Hice mis prácticas como Desarrollador en CodeArt Solutions (remoto, de diciembre de 2024 a mayo de 2025). Ahí participé en el rediseño de la web de la Confederación Andaluza de Federaciones Deportivas (CAFD) sobre Drupal, y en tareas de consulta e integración de datos sobre bases de datos relacionales — mi primera experiencia real en un equipo de desarrollo.",
    },
    {
        id: "fortalezas",
        keywords: ["contratarte", "contratar", "fortalezas", "aportas", "aporta", "valor", "elegirte", "por que tu", "diferencia"],
        answer: "Me distingo por un enfoque meticuloso y estructurado: me importa el orden, la lógica y entender a fondo la tecnología antes de usarla. Aprendo rápido, sumo claridad a quien trabaja conmigo, y no me conformo con que algo funcione — quiero que tenga sentido.",
    },
    {
        id: "proyectos",
        keywords: ["proyectos", "que has hecho", "que proyectos", "portfolio de proyectos"],
        answer: "Los principales son TaxiDay (gestión de jornadas de taxistas, mi proyecto más personal), CAFD (el rediseño web de mis prácticas), tres juegos hechos en Unity, y una versión móvil de TaxiDay todavía en desarrollo. Los tienes todos más arriba en esta misma página, con vídeo y detalles técnicos.",
    },
    {
        id: "taxiday",
        keywords: ["taxiday", "taxi"],
        answer: "TaxiDay es mi proyecto más personal: una plataforma para registrar jornadas, turnos, carreras e ingresos de taxistas. Nació viendo las dificultades de mi padre, taxista desde hace más de 20 años, con las apps que probaba. Está hecha con Java 17, Spring Boot, React y MariaDB, con Docker orquestando todo el entorno.",
    },
    {
        id: "cafd",
        keywords: ["cafd", "confederacion", "confederación", "deportivas"],
        answer: "CAFD fue mi primer proyecto en un equipo de desarrollo real: el rediseño completo de la web oficial de la Confederación Andaluza de Federaciones Deportivas, durante mis prácticas en CodeArt Solutions, con Drupal, SQL y metodología Scrum.",
    },
    {
        id: "unity",
        keywords: ["unity", "videojuego", "videojuegos", "juego"],
        answer: "En Unity hice tres proyectos, cada uno un paso más allá: Roll a Ball para asentar las bases del motor, TonyBird (un homenaje a mi amigo Toni) como primer juego 2D, y Geobattle, un shooter 3D con IA de enemigos — el más ambicioso de los tres.",
    },
    {
        id: "formacion",
        keywords: ["formacion", "formación", "estudios", "dam", "cesur", "nota", "titulo", "título", "carrera"],
        answer: "Soy Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) por Cesur, Sevilla, con una nota media de 8,6/10 — terminé en junio de 2025.",
    },
    {
        id: "disponibilidad",
        keywords: ["disponible", "disponibilidad", "buscas", "buscando", "oportunidad", "empleo", "puesto"],
        answer: "Estoy buscando mi primera oportunidad estable como desarrollador, con ganas reales de aprender en equipo. Estoy abierto a moverme si hace falta.",
    },
    {
        id: "contacto",
        keywords: ["contacto", "email", "correo", "telefono", "teléfono", "linkedin", "contratar", "hablar"],
        answer: "La vía más directa es escribirme a josecarlosmartinez98@outlook.com, o por LinkedIn — tienes el enlace en el pie de esta página.",
    },
    {
        id: "padel",
        keywords: ["padel", "pádel", "deporte", "interes", "interés", "intereses", "hobby", "nutricion", "nutrición"],
        answer: "Fuera del código soy monitor y jugador de pádel, con torneos provinciales y andaluces a mis espaldas — de ahí me viene bastante la paciencia para explicar las cosas paso a paso. También me interesa la nutrición y el rendimiento deportivo.",
    },
    {
        id: "ubicacion",
        keywords: ["sevilla", "ubicacion", "ubicación", "donde vive", "dónde vive", "ciudad"],
        answer: "Vivo en Sevilla, aunque estoy abierto a reubicarme por la oportunidad adecuada.",
    },
    {
        id: "sitio",
        keywords: ["portfolio", "este sitio", "esta pagina", "esta página", "como hiciste esto"],
        answer: "Este portfolio está hecho con Next.js y Tailwind CSS, este asistente incluido — sin frameworks de IA externos ni coste añadido, solo con la información real que ves en el sitio.",
    },
    {
        id: "saludo",
        keywords: ["hola", "buenas", "hey", "que tal", "qué tal", "buenos dias", "buenas tardes"],
        answer: "¡Hola! Pregúntame sobre mi experiencia, mis proyectos, las tecnologías que uso o mi formación — respondo con lo que hay en este portfolio, sin IA externa detrás.",
    },
];

const CHIPS = [
    "¿Qué tecnologías dominas?",
    "Cuéntame de TaxiDay",
    "¿Por qué deberían contratarte?",
    "¿Cómo te contacto?",
];

const FALLBACK =
    "No tengo una respuesta preparada para eso exactamente. Pregúntame sobre experiencia, proyectos, tecnologías, formación o cómo contactarme — o escríbeme directamente a josecarlosmartinez98@outlook.com.";

function normalize(s) {
    return s
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function findAnswer(text) {
    const q = normalize(text);
    let best = null;
    let bestScore = 0;
    for (const topic of KB) {
        let score = 0;
        for (const kw of topic.keywords) {
            if (q.includes(normalize(kw))) score++;
        }
        if (score > bestScore) {
            bestScore = score;
            best = topic;
        }
    }
    return best ? best.answer : FALLBACK;
}

export default function PortfolioAssistant() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "¡Hola! Soy un asistente sin IA externa detrás — solo respondo con lo que ya está escrito en este portfolio, en primera persona, como si te contestase José Carlos. Prueba una de estas o escribe tu pregunta:" },
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, open]);

    function send(text) {
        const clean = text.trim();
        if (!clean) return;
        const answer = findAnswer(clean);
        setMessages((m) => [...m, { from: "user", text: clean }, { from: "bot", text: answer }]);
        setInput("");
    }

    return (
        <div className="assistant-root">
            {open && (
                <div className="assistant-panel" role="dialog" aria-label="Asistente del portfolio">
                    <div className="assistant-header">
                        <span>
                            <span className="assistant-dot" /> pregúntame_
                        </span>
                        <button aria-label="Cerrar" onClick={() => setOpen(false)}>
                            ×
                        </button>
                    </div>
                    <div className="assistant-messages" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div className={`assistant-msg assistant-${m.from}`} key={i}>
                                {m.text}
                            </div>
                        ))}
                    </div>
                    <div className="assistant-chips">
                        {CHIPS.map((c) => (
                            <button key={c} onClick={() => send(c)}>
                                {c}
                            </button>
                        ))}
                    </div>
                    <form
                        className="assistant-input-row"
                        onSubmit={(e) => {
                            e.preventDefault();
                            send(input);
                        }}
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Escribe tu pregunta…"
                            aria-label="Escribe tu pregunta"
                        />
                        <button type="submit" aria-label="Enviar">
                            ↵
                        </button>
                    </form>
                </div>
            )}
            <button className="assistant-fab" onClick={() => setOpen((v) => !v)}>
                {open ? "cerrar" : "pregúntame >_"}
            </button>
        </div>
    );
}
