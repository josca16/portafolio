import Link from "next/link";

// Shared chrome for every project detail page — reuses the same design
// tokens and components as the homepage (.site-shell, .page-width, .button,
// .eyebrow) so a project page feels like part of the same site, not a
// different app bolted on.

export function ProjectShell({ children }) {
    return <main className="site-shell proj-page">{children}</main>;
}

export function ProjectNav() {
    return (
        <nav className="topbar page-width">
            <Link className="wordmark" href="/" aria-label="Volver al inicio">
                JC<span>.</span>
            </Link>
            <div className="nav-links">
                <Link href="/#work">Trabajo</Link>
                <Link href="/#capabilities">Capacidades</Link>
                <Link href="/#about">Sobre mí</Link>
            </div>
        </nav>
    );
}

export function ProjectHero({ eyebrow, title, tagline, accent = "orange", stack = [], github, liveUrl }) {
    return (
        <section className="proj-hero page-width">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="proj-tagline">{tagline}</p>
            {stack.length > 0 && (
                <div className="proj-pills">
                    {stack.map((s) => (
                        <span className={`proj-pill accent-${accent}`} key={s}>
                            {s}
                        </span>
                    ))}
                </div>
            )}
            {(github || liveUrl) && (
                <div className="hero-actions proj-hero-actions">
                    {liveUrl && (
                        <a className="button button-primary" href={liveUrl} target="_blank" rel="noreferrer">
                            Ver sitio en vivo <span>↗</span>
                        </a>
                    )}
                    {github && (
                        <a className="button button-quiet" href={github} target="_blank" rel="noreferrer">
                            Código en GitHub ↗
                        </a>
                    )}
                </div>
            )}
        </section>
    );
}

export function ProjectSection({ eyebrow, title, children }) {
    return (
        <section className="proj-section page-width">
            {(eyebrow || title) && (
                <div className="proj-section-heading">
                    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
                    {title && <h2>{title}</h2>}
                </div>
            )}
            {children}
        </section>
    );
}

export function FeatureGrid({ items, accent = "orange" }) {
    return (
        <div className="proj-feature-grid">
            {items.map(([title, text]) => (
                <div className={`proj-feature cap-${accent}`} key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
}

export function Media({ type = "video", src, caption, poster }) {
    return (
        <figure className="proj-media">
            {type === "video" ? (
                <video controls preload="metadata" poster={poster}>
                    <source src={src} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={caption || ""} loading="lazy" />
            )}
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
}

export function ProjectFooter() {
    return (
        <section className="proj-back page-width">
            <Link className="button button-quiet" href="/#work">
                ← Volver al portfolio
            </Link>
        </section>
    );
}
