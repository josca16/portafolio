import { NextResponse } from "next/server";

// Hey. If you're reading this from curl or devtools instead of the page,
// you're exactly the kind of person I'd like to talk to.
export async function GET() {
    const cv = {
        name: "Jose Carlos Membrive Martínez",
        title: "Desarrollador Fullstack Junior",
        location: "Sevilla, España",
        summary:
            "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma con base en Java, Spring Boot, bases de datos e IA aplicada al desarrollo. Enfoque meticuloso y estructurado, con atención al orden, la lógica y el análisis en cada proceso.",
        availability: "Buscando su primera oportunidad estable en desarrollo de software. Abierto a reubicarse.",
        contact: {
            email: "josecarlosmartinez98@outlook.com",
            linkedin: "https://www.linkedin.com/in/jose-carlos-membrive/",
            github: "https://github.com/josca16",
            portfolio: "https://portfolio-josecarlos.vercel.app/",
        },
        skills: {
            ia_aplicada: ["Claude", "ChatGPT", "documentación asistida", "prototipado", "refactorización"],
            backend: ["Java", "Spring Boot", "C# / .NET", "Python"],
            bases_de_datos: ["SQL (MariaDB)", "MongoDB", "APIs REST"],
            diseno_web: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
            devops_cloud: ["Docker", "Azure", "Git"],
        },
        experience: [
            {
                role: "Desarrollador en Prácticas",
                company: "CodeArt Solutions",
                location: "Remoto",
                period: "12/2024 – 05/2025",
                highlights: [
                    "Rediseño de la web oficial de la Confederación Andaluza de Federaciones Deportivas (CAFD), sobre Drupal.",
                    "Consulta e integración de datos sobre bases de datos relacionales.",
                ],
            },
        ],
        projects: [
            {
                name: "TaxiDay",
                type: "Backend / Full stack",
                description: "Gestión de jornadas, turnos, carreras e ingresos de taxistas.",
                stack: ["Java 17", "Spring Boot", "React", "MariaDB", "Docker"],
                url: "https://portfolio-josecarlos.vercel.app/projects/taxiday",
            },
            {
                name: "CAFD",
                type: "Proyecto profesional",
                description: "Rediseño de la web de la Confederación Andaluza de Federaciones Deportivas.",
                stack: ["Drupal", "SQL", "Scrum", "Responsive"],
                url: "https://portfolio-josecarlos.vercel.app/projects/cafd",
            },
            {
                name: "Videojuegos Unity",
                type: "Proyecto personal",
                description: "Tres videojuegos 2D/3D para dominar físicas, diseño de niveles y rendimiento.",
                stack: ["Unity", "C#"],
                url: "https://portfolio-josecarlos.vercel.app/projects/videojuegos-unity",
            },
            {
                name: "TaxiDay Mobile",
                type: "En desarrollo",
                description: "Prototipo móvil de TaxiDay para el contexto real de un taxista en movimiento.",
                stack: ["React Native", "JavaScript"],
                url: "https://portfolio-josecarlos.vercel.app/projects/taxiday-mobile",
            },
        ],
        education: {
            degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
            school: "Cesur, Sevilla",
            gpa: "8.6 / 10",
            period: "09/2023 – 06/2025",
        },
        certifications: [
            "Fundamentos profesionales de IA generativa — Microsoft & LinkedIn Learning (2025)",
            "Git, Odoo, Python — OpenWebinars",
        ],
        interests: ["Monitor y jugador de pádel", "Nutrición y rendimiento deportivo"],
    };

    return NextResponse.json(cv, {
        headers: { "Cache-Control": "public, max-age=3600" },
    });
}
