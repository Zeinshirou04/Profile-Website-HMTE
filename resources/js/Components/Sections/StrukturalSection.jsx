import { ContentContext } from "@/Context/ContentContext";
import { useContext } from "react";

const Struktural = {
    'ketua': 'Ketua',
    'wakil-ketua': 'Wakil Ketua',
    'sekretaris': 'Sekretaris',
    'bendahara': 'Bendahara',
    'internal': 'Internal',
    'external': 'External',
    'kominfo': 'Kominfo',
    'kwu': 'KWU',
    'psdm': 'PSDM'
}

const StrukturalSection = ({ sectionLabel = 'STRUKTURAL', children }) => {
    return (
        <section id="struktural-section" className="w-full flex flex-col">
            <div id="struktural-header-wrapper" className="w-full h-80 md:h-96 m-0 p-0">
                <header id="struktural-header" className="w-full h-full relative">
                    <div id="struktural-title-wrapper" className="w-full h-full bg-gradient-to-b from-black/80 via-black/60 to-black/80 absolute flex items-center justify-center">
                        <h3 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold w-3/4 mx-auto text-center">{sectionLabel}</h3>
                    </div>
                    <figure className="w-full h-full">
                        <img className="w-full h-full object-cover" src="assets/img/webp/tampilan_struktur.webp" alt="Dokumentasi HMTE - Struktural" loading="lazy" />
                    </figure>
                </header>
            </div>
            {children}
        </section>
    );
}

const StrukturalContentItems = () => {

    const { setPengurusPreviewKey } = useContext(ContentContext);

    const content = Object.entries(Struktural).map(([key, value], index) => {
        return (
            <a href="#pengurus-section" onClick={() => {
                setPengurusPreviewKey(key);
            }}>
                <li id={`struktural-${key}-wrapper`} className="flex flex-col items-center hover:cursor-pointer text-white">
                    <header id="struktural-ketua-num" className="font-bold">
                        <h5 className="text-4xl 2xl:text-5xl">{index > 10 ? index : `0${index + 1}`}</h5>
                    </header>
                    <header id="struktural-ketua-label">
                        <h6 className="text-2xl 2xl:text-3xl text">{value}</h6>
                    </header>
                </li>
            </a>
        );
    });

    return content;
}

export {
    StrukturalSection,
    StrukturalContentItems
};