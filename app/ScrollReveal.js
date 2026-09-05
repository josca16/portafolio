"use client";

import { useEffect } from "react";

// Native IntersectionObserver, no dependency: reveals .reveal / .reveal-group
// elements as they scroll into view, then stops watching them.
export default function ScrollReveal() {
    useEffect(() => {
        const targets = document.querySelectorAll(".reveal, .reveal-group");
        if (!targets.length || typeof IntersectionObserver === "undefined") return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );

        targets.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return null;
}
