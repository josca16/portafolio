import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space",
    display: "swap",
});

const dmMono = DM_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

export const metadata = {
    title: "Jose Carlos Membrive | Backend Java e IA aplicada",
    description:
        "Portfolio profesional de Jose Carlos Membrive, desarrollador junior orientado a backend Java, Spring Boot e IA aplicada.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body
                className={`${spaceGrotesk.variable} ${dmMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
