import { ContentContext } from "@/Context/ContentContext";
import { useContext, useEffect } from "react";

const heroImg = [
    "assets/img/webp/tampilan_1.webp",
    "assets/img/webp/tampilan_2.webp",
    "assets/img/webp/tampilan_3.webp",
];

const Heros = () => {
    const { setLoadingContent, heroIndexAt } = useContext(ContentContext);

    const heros = heroImg.map((src, index) => {
        return (
            <li key={index} className={`absolute w-full h-full ${index === heroIndexAt ? '' : 'hidden'}`}>
                <img src={src} alt={`Dokumentasi HMTE - Hero - ${index}`} className={
                    `w-full h-full object-cover`
                } onLoad={() => {
                    setLoadingContent(false)
                }} aria-hidden="true" />
            </li>
        );
    })
    return heros;
}

const HeroSection = ({ children }) => {
    const { setHeroIndex, isLoadingContent } = useContext(ContentContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroIndex((prevIndex) => (prevIndex + 1) % heroImg.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero-section" className="w-full h-dvh relative">
            <div id="hero-section-content" className={`absolute w-full h-full top-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10 ${isLoadingContent ? 'opacity-0' : 'opacity-100'} transition-opacity delay-150 duration-500 ease-in-out px-7 md:px-10`}>
                {children}
            </div>
            <ul id="hero-section-background" className="relative w-full h-full list-none m-0 p-0" aria-live="polite">
                <Heros />
            </ul>
        </section>
    );
}

export default HeroSection;