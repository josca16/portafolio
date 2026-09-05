"use client";

import { useEffect, useRef, useState } from "react";

// Small local knowledge base built from the real content of this portfolio —
// no external API, no cost, no network call. Matches by keyword and answers
// with facts that already live on this site.
const KB = [
    {
        id: "tech",
        keywords: ["tecnologia", "tecnologias", "stack", "sabes", "dominas", "lenguaje", "lenguajes", "habilidad", "habilidades"],
        answer: "Backend: Java y Spring Boot como base, más C# / .NET y Python. Bases de datos: SQL (MariaDB) y MongoDB. Diseño web: React, Next.js, Tailwind CSS. DevOps y cloud: Docker, Azure, Git. Y uso IA generativa (Claude, ChatGPT) como parte habitual del flujo de trabajo, no como discurso.",
    },
    {
        id: "ia",
        keywords: ["ia", "inteligencia artificial", "chatgpt", "claude", "llm", "ia aplicada"],
        answer: "Integro IA generativa en el día a día: documentación, prototipado y refactorización asistida. La uso como acelerador del razonamiento, no como sustituto — reviso y entiendo cada línea que sale de ahí.",
    },
    {
        id: "experiencia",
        keywords: ["experiencia", "codeart", "practicas", "prácticas", "trabajo profesional", "empresa"],
        answer: "Desarrollador en Prácticas en CodeArt Solutions (remoto, 12/2024 – 05/2025): participó en el rediseño de la web de la Confederación Andaluza de Federaciones Deportivas (CAFD) sobre Drupal, y en tareas de consulta e integración de datos sobre bases de datos relacionales.",
    },
    {
        id: "taxiday",
        keywords: ["taxiday", "taxi"],
        answer: "TaxiDay: plataforma para registrar jornadas, turnos, carreras e ingresos de taxistas, nacida de una necesidad real de su familia. Java 17 · Spring Boot · React · MariaDB · Docker, con API REST y autenticación.",
    },
    {
        id: "cafd",
        keywords: ["cafd", "confederacion", "confederación", "deportivas"],
        answer: "CAFD: rediseño y desarrollo de la web oficial de la Confederación Andaluza de Federaciones Deportivas, durante sus prácticas en CodeArt Solutions. Drupal · SQL · Scrum · responsive.",
    },
    {
        id: "unity",
        keywords: ["unity", "videojuego", "videojuegos", "juego"],
        answer: "Tres videojuegos 2D/3D en Unity + C#, construidos para dominar físicas, diseño de niveles y optimización de rendimiento.",
    },
    {
        id: "formacion",
        keywords: ["formacion", "formación", "estudios", "dam", "cesur", "nota", "titulo", "título", "carrera"],
        answer: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), Cesur, Sevilla — nota media 8,6/10 (09/2023 – 06/2025).",
    },
    {
        id: "disponibilidad",
        keywords: ["disponible", "disponibilidad", "buscas", "buscando", "oportunidad", "empleo", "puesto"],
        answer: "Está buscando su primera oportunidad estable en desarrollo de software — abierto también a reubicarse.",
    },
    {
        id: "contacto",
        keywords: ["contacto", "email", "correo", "telefono", "teléfono", "linkedin", "contratar", "hablar"],
        answer: "La forma más directa: josecarlosmartinez98@outlook.com — o por LinkedIn (enlace en el pie de la página).",
    },
    {
        id: "padel",
        keywords: ["padel", "pádel", "deporte", "interes", "interés", "intereses", "hobby", "nutricion", "nutrición"],
        answer: "Monitor y jugador de pádel, con experiencia en torneos provinciales y andaluces — y de ahí saca su forma de explicar y adaptar soluciones a quien las necesita. También le interesa la nutrición y el rendimiento.",
    },
    {
        id: "ubicacion",
        keywords: ["sevilla", "ubicacion", "ubicación", "donde vive", "dónde vive", "ciudad"],
        answer: "Está en Sevilla, España — y abierto a reubicarse por la oportunidad adecuada.",
    },
    {
        id: "saludo",
        keywords: ["hola", "buenas", "hey", "que tal", "qué tal", "buenos dias", "buenas tardes"],
        answer: "¡Hola! Pregúntame sobre su experiencia, proyectos, tecnologías o formación — respondo con lo que hay en este portfolio.",
    },
];

const CHIPS = [
    "¿Qué tecnologías dominas?",
    "Cuéntame de TaxiDay",
    "¿Tienes experiencia profesional?",
    "¿Cómo te contacto?",
];

const FALLBACK =
    "No tengo una respuesta preparada para eso exactamente. Prueba con algo sobre experiencia, proyectos, tecnologías o formación — o escríbeme directamente a josecarlosmartinez98@outlook.com.";

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
        { from: "bot", text: "¡Hola! Soy un asistente sencillo de este portfolio — sin IA externa, solo respondo con la info real que hay aquí. Prueba una de estas o escribe tu pregunta:" },
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
