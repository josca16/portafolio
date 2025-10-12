"use client";
import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal - Componente para animaciones al hacer scroll
 * Detecta cuando un elemento entra en el viewport y aplica animaciones
 */
export default function ScrollReveal({ 
    children, 
    animation = "fade-up", 
    delay = 0,
    threshold = 0.3,
    className = "" 
}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -200px 0px"
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isVisible, threshold]);

    const delayClass = delay > 0 ? `delay-${delay}` : "";
    const animationClass = isVisible ? `${animation} ${delayClass}` : "";

    return (
        <div 
            ref={elementRef} 
            className={`scroll-reveal ${animationClass} ${className}`}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            {children}
        </div>
    );
}

