import { ContentContext } from "@/Context/ContentContext";
import { useContext } from "react";

const PengurusSection = ({ organizationLabel = '', sectionLabel = 'PENGURUS', children }) => {
    return (
        <section id="pengurus-section" className="w-full h-dvh px-7 md:px-10 lg:px-14 xl:px-16 mt-16 mb-12 flex flex-col gap-6 scroll-mt-16">
            <div id="pengurus-header-wrapper" className="w-full h-1/6 pt-6">
                <header id="pengurus-header" className="w-full text-center font-bold flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl xl:text-6xl">{sectionLabel}</h3>
                    <h4 className="text-xl md:text-2xl xl:text-3xl !font-normal">{organizationLabel}</h4>
                </header>
            </div>
            <div id="pengurus-content-wrapper" className="w-full h-5/6 flex flex-col xl:flex-row m-0 p-0 gap-8">
                {children}
            </div>
        </section>
    );
}

const PengurusPreview = ({ children }) => {
    return (
        <figure id="pengurus-preview-wrapper" className="max-w-full w-full xl:w-3/4 h-3/4 xl:h-full overflow-x-auto">
            <div className="h-full w-max lg:w-full">
                {children}
            </div>
        </figure>
    );
}


const PengurusItemList = ({ images = {} }) => {

    const { setPengurusPreviewKey } = useContext(ContentContext);

    const PengurusItems = () => {
        const items = Object.entries(images).map(([key, value], index) => {
            return (
                <li key={index} className="h-full xl:h-auto xl:w-full shrink-0 hover:cursor-pointer" onClick={() => {
                    setPengurusPreviewKey(key)
                }}>
                    <figure className="h-full">
                        <img
                            loading="lazy"
                            className="h-full object-cover"
                            src={value['src']}
                            alt={value['alt']}
                        />
                    </figure>
                </li>
            );
        })

        return items
    }

    return (
        <div className="max-w-full w-full xl:w-1/4 h-1/4 xl:h-full overflow-x-auto">
            <ol className="h-full flex flex-row xl:flex-col gap-4 xl:gap-8 list-none">
                <PengurusItems />
            </ol>
        </div>
    );
}

export {
    PengurusSection,
    PengurusPreview,
    PengurusItemList
};