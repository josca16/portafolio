# Portfolio — Jose Carlos Membrive Martínez

Portfolio personal construido con Next.js 15 y Tailwind CSS 4. Diseño propio
(no una plantilla): tema claro "papel", tipografía condensada, acento naranja,
y una única fuente de verdad para el sistema de diseño en `app/globals.css`.

**En vivo:** https://portfolio-josecarlos.vercel.app
**Repo:** https://github.com/josca16/new-portfolio

## Contenido

- [Stack](#stack)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Detalles a propósito](#detalles-a-propósito)
- [Proyectos mostrados](#proyectos-mostrados)
- [Desarrollo local](#desarrollo-local)
- [Contacto](#contacto)

## Stack

Del portfolio en sí (no confundir con el stack de cada proyecto mostrado,
que varía por proyecto y se explica en su propia página de detalle):

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| UI | React 19 |
| Estilos | Tailwind CSS 4 + CSS propio en `globals.css` |
| Tipografías | Space Grotesk (texto), DM Mono (etiquetas/datos) |
| Animaciones | CSS + `IntersectionObserver` nativo, sin librerías |
| Despliegue | Vercel |

## Estructura del proyecto

```
Portfolio/
├── app/
│   ├── api/cv/route.js        # Endpoint oculto: GET /api/cv devuelve el CV en JSON
│   │   ├── projects/
│   │   ├── _shared.js         # Chrome común de las páginas de detalle
│   │   ├── taxiday/page.js
│   │   ├── taxiday-mobile/page.js
│   │   ├── cafd/page.js
│   │   └── videojuegos-unity/page.js
│   ├── globals.css            # Sistema de diseño completo (única fuente de verdad)
│   ├── layout.js               # Layout raíz + carga de fuentes
│   ├── page.js                 # Entry point (renderiza NewPortfolioHome)
│   ├── NewPortfolioHome.js     # Home: hero, proyectos, capacidades, sobre mí, contacto
│   ├── PortfolioAssistant.js  # Widget de chat local (botón "pregúntame")
│   └── ScrollReveal.js         # Animaciones al hacer scroll
├── public/
│   ├── company_logo/           # Logos de empresas (Cesur, CodeArt Solutions)
│   ├── projects_logo/          # Logos de cada proyecto
│   ├── projects/                # Capturas y demos por proyecto
│   ├── certificaciones/         # PDFs de certificados
│   └── social/                  # Iconos sociales y foto de perfil
└── README.md
```

Regla simple: si un archivo no aparece en este árbol, no se usa. La última
limpieza retiró 12 componentes de una iteración de diseño anterior (dark
theme con `backdrop-blur`), una ruta de prueba y ~500 líneas de CSS duplicado
que ya no correspondían a lo que se ve en producción.

## Detalles a propósito

Cosas que están así intencionadamente, por si alguien las revisa:

- **`GET /api/cv`** — devuelve el CV completo en JSON. Pensado para quien
  mire la red o el código fuente en vez de leer la página.
- **Widget de chat** (`pregúntame >_`) — responde preguntas básicas sobre
  el perfil sin backend ni coste de API.
- **Micro-interacciones deliberadas** — el punto verde de disponibilidad
  pulsa, el subrayado de la navegación se dibuja al pasar el ratón, las
  flechas de los botones se desplazan, las filas de "lo que aporto" y
  "sobre mí" reaccionan al pasar por encima. Todo respeta
  `prefers-reduced-motion`.

## Proyectos mostrados

| # | Proyecto | Tipo | Stack |
|---|---|---|---|
| 01 | TaxiDay | Backend / Full stack | Java 17 · Spring Boot · REST · MariaDB · Docker |
| 02 | CAFD | Proyecto profesional (prácticas) | Drupal · SQL · Scrum |
| 03 | Videojuegos Unity | Proyecto personal | Unity · C# |
| 04 | TaxiDay Mobile | En desarrollo | React Native · JavaScript |

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000 (o el siguiente puerto libre)
npm run build    # build de producción
npm start        # sirve el build de producción
```

## Contacto

- **Email:** josecarlosmartinez98@outlook.com
- **LinkedIn:** https://www.linkedin.com/in/jose-carlos-membrive/
- **GitHub:** https://github.com/josca16

---
© 2025 Jose Carlos Membrive Martínez.
