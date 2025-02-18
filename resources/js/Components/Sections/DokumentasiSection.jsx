const DokumentasiSection = ({ sectionLabel = 'DOKUMENTASI', organizationLabel = '', children }) => {
    return (
        <section id="dokumentasi-section" className="w-full px-7 md:px-10 lg:px-14 xl:px-16 pt-16 pb-12 bg-slate-300 scroll-mt-16 flex flex-col gap-6">
            <div id="dokumentasi-header-wrapper" className="w-full pt-6">
                <header id="dokumentasi-header" className="w-full text-center font-bold flex flex-col gap-2">
                    <h3 className="text-3xl md:text-5xl xl:text-6xl">{sectionLabel}</h3>
                    <h4 className="text-xl md:text-2xl xl:text-3xl !font-normal">{organizationLabel}</h4>
                </header>
            </div>
            <div id="dokumentasi-content-wrapper" className="w-full grid grid-flow-row lg:grid-flow-col gap-8">
                {children}
            </div>
        </section>
    );
}

const DokumentasiCard = ({ children }) => {
    return (
        <div id="dokumentasi-item-wrapper" className="w-full bg-white rounded-md shadow-md">
            {children}
        </div>
    );
}

export {
    DokumentasiSection,
    DokumentasiCard
};