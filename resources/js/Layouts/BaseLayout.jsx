import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Layouts/Navbar";
import { LoadingSplash } from "@/Components/Fragments/Loading";
import { ContentContext } from "@/Context/ContentContext";
import { useContext, useEffect, useState } from "react";

function BaseLayout({ children }) {

    const { isLoadingContent } = useContext(ContentContext)
    const [showLoadingSplash, setShowLoadingSplash] = useState(isLoadingContent);

    useEffect(() => {
        if (!isLoadingContent) {
            const timeout = setTimeout(() => setShowLoadingSplash(false), 500);
            return () => clearTimeout(timeout);
        } else {
            setShowLoadingSplash(true);
        }
    }, [isLoadingContent])

    return (
        <main className="w-full relative">
            <div className={`w-full h-dvh absolute top-0 transition-opacity ${isLoadingContent ? 'opacity-100' : 'opacity-0'} z-50 duration-300`}>
                <LoadingSplash />
            </div>
            <Head title={isLoadingContent ? "Loading | Himpunan Mahasiswa Teknik Elektro" : "Home | Himpunan Mahasiswa Teknik Elektro"} />
            <div className={`w-full ${showLoadingSplash ? "hidden" : ""}`}>
                <Navbar />
                {children}
            </div>
        </main>
    );
}

export default BaseLayout;