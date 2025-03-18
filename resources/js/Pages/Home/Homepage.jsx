import BaseLayout from "@/Layouts/BaseLayout";
import HeroSection from "@/Components/Sections/HeroSection";
import { StrukturalContentItems, StrukturalSection } from "@/Components/Sections/StrukturalSection";
import { PengurusPreview, PengurusSection, PengurusItemList } from "@/Components/Sections/PengurusSection";
import { DokumentasiSection, DokumentasiCard } from "@/Components/Sections/DokumentasiSection";
import { useContext } from "react";
import { ContentContext } from "@/Context/ContentContext";

const PengurusHMTE = {
    'ketua': {
        src: "assets/img/webp/struktural/ketua_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Ketua"
    },
    'wakil-ketua': {
        src: "assets/img/webp/struktural/waketu_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Wakil Ketua"
    },
    'sekretaris': {
        src: "assets/img/webp/struktural/sekretaris_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Sekretaris"
    },
    'bendahara': {
        src: "assets/img/webp/struktural/bendahara_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Bendahara"
    },
    'internal': {
        src: "assets/img/webp/struktural/internal_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Internal"
    },
    'external': {
        src: "assets/img/webp/struktural/eksternal_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - External"
    },
    'kominfo': {
        src: "assets/img/webp/struktural/kominfo_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - Kominfo"
    },
    'kwu': {
        src: "assets/img/webp/struktural/kwu_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - KWU"
    },
    'psdm': {
        src: "assets/img/webp/struktural/psdm_1.webp",
        alt: "Dokumentasi HMTE - Pengurus - PSDM"
    }
};

function Homepage() {

    const { pengurusPreviewKey } = useContext(ContentContext)

    return (
        <BaseLayout>
            <HeroSection>
                <div className="w-full h-full flex justify-center items-center">
                    <header className="flex flex-col items-center gap-4">
                        <div className="w-5/6 md:w-full">
                            <h1 className="text-white text-center text-4xl lg:text-4xl xl:text-6xl font-bold text-wrap">HIMPUNAN MAHASISWA TEKNIK ELEKTRO</h1>
                        </div>
                        <div className="px-16">
                            <h2 className="text-white text-center text-xl lg:text-2xl xl:text-5xl font-normal text-wrap">UNIVERSITAS DIAN NUSWANTORO</h2>
                        </div>
                    </header>
                </div>
            </HeroSection>
            <section id="visi-misi-section" className="w-full h-dvh px-7 md:px-10 lg:px-14 xl:px-16 py-12 flex flex-col justify-center sm:h-auto lg:flex-row lg:py-24 xl:py-32 2xl:py-40 gap-12 relative">
                <figure id="visi-misi-background" className="absolute w-full h-full -z-10 left-0 top-0 flex flex-col lg:flex-row items-center justify-center opacity-15">
                    <div className="flex w-full h-full gap-12 justify-center items-center">
                        <img className="w-32 md:w-36 lg:w-44 2xl:w-52" src="favicon.ico" alt="Logo HMTE - Background Visi Misi" />
                    </div>
                    <div className="flex w-full h-full gap-12 justify-center items-center">
                        <img className="w-32 md:w-36 lg:w-44 2xl:w-52" src="assets/img/icon/abithah_Impeesaa.ico" alt="Logo Kabinet - Background Visi Misi" />
                    </div>
                </figure>
                <article id="visi-section" className="w-full flex flex-col gap-4">
                    <header className="w-full font-bold text-black">
                        <h3 id="visi-title" className="text-4xl 2xl:text-5xl text-center">VISI</h3>
                    </header>
                    <p id="visi-content" className="text-center 2xl:text-xl">
                        Menjadikan HMTE UDINUS sebagai organisasi kemahasiswaan yang unggul dalam pengembangan kualitas mahasiswanya dan berperan aktif sebagai wadah aspirasi, kreasi, dan prestasi mahasiswa Teknik Elektro Udinus
                    </p>
                </article>
                <article id="misi-section" className="w-full flex flex-col gap-4">
                    <header className="w-full font-bold text-black">
                        <h3 id="misi-title" className="text-4xl text-center 2xl:text-5xl">MISI</h3>
                    </header>
                    <ol id="misi-content" className="list-decimal list-inside flex flex-col gap-2 2xl:text-xl">
                        <li>
                            Mengembangkan program kerja yang berfokus pada pengembangan kualitas anggota HMTE dan mahasiswa Teknik Elektro Udinus.
                        </li>
                        <li>
                            Meningkatkan partisipasi aktif mahasiswa dan anggota HMTE dalam kegiatan organisasi.
                        </li>
                        <li>
                            Memberikan kebebasan anggota agar dapat berekspresi dan berkreasi untuk meningkatkan hardskill dan softskill.
                        </li>
                        <li>
                            Merangkul, mengayomi, dan membuka saluran komunikasi bagi anggota HMTE dan mahasiswa Teknik Elektro sehingga terciptanya lingkungan yang harmonis.
                        </li>
                    </ol>
                </article>
            </section>
            <StrukturalSection sectionLabel="STRUKTURAL HMTE">
                <div id="struktural-content-wrapper" className="bg-[#787474] w-full h-auto py-12 2xl:py-24 px-7 md:px-10 lg:px-14 xl:px-16">
                    <ol id="struktural-content" className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 2xl:gap-y-24 list-none">
                        <StrukturalContentItems />
                    </ol>
                </div>
            </StrukturalSection>
            <PengurusSection organizationLabel="HIMPUNAN MAHASISWA TEKNIK ELEKTRO">
                {/* <figure id="ketua-preview-wrapper" className="w-full h-full relative">
                    <img className="absolute h-full w-auto left-1/2 -translate-x-1/2" src="assets/img/png/fais-single-nobg.png" alt="" />
                    <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-300 p-4">
                        <header className="font-bold">
                            <h4>Ketua HMTE 2024 / 2025</h4>
                        </header>
                    </figcaption>
                </figure> */}
                <PengurusPreview>
                    <img loading="lazy"
                        className="h-full w-max lg:w-full object-cover"
                        src={PengurusHMTE[pengurusPreviewKey]['src']}
                        alt={PengurusHMTE[pengurusPreviewKey]['alt']}
                    />
                </PengurusPreview>
                <PengurusItemList images={PengurusHMTE} />
            </PengurusSection>
            <DokumentasiSection organizationLabel="HIMPUNAN MAHASISWA TEKNIK ELEKTRO">
                <DokumentasiCard>
                    <figure className="w-full">
                        <div className="w-full">
                            <img
                                className="rounded-t-md w-full object-cover"
                                src="assets/img/webp/documentation/tamp_1.webp"
                                alt="Dokumentasi HMTE - Dokumentasi - A"
                                loading="lazy"
                            />
                        </div>
                    </figure>
                </DokumentasiCard>
                <DokumentasiCard>
                    <figure className="w-full">
                        <div className="w-full">
                            <img
                                className="rounded-t-md w-full object-cover"
                                src="assets/img/webp/documentation/tamp_2.webp"
                                alt="Dokumentasi HMTE - Dokumentasi - B"
                            />
                        </div>
                    </figure>
                </DokumentasiCard>
            </DokumentasiSection>
        </BaseLayout>
    );
}

export default Homepage;