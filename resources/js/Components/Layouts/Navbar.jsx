import { useState, useEffect } from "react";

const Navbar = () => {
    const [navPopped, setNavPopped] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setNavPopped(window.scrollY > 5);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav className={`w-full px-7 md:px-10 xl:px-16 flex items-center justify-between ${navPopped ? ' bg-white py-2 h-16 lg:h-20 xl:h-20 shadow-lg' : 'bg-transparent py-4 h-20 lg:h-24 xl:h-24'} fixed top-0 transition-all duration-500 z-40`}>
            <div className="w-full h-full">
                <a
                    href={route("home.index")}
                    className="h-full"
                >
                    <img
                        className={`transition-transform duration-500 ease-in-out transform h-full object-center object-cover ${navPopped ? 'scale-90' : 'scale-100'}`}
                        src="favicon.ico"
                        alt="Logo HMTE"
                    />
                </a>
            </div>
            <div className="w-full h-full">
                <a
                    href={route("home.index")}
                    className="w-full h-full flex justify-end"
                >
                    <img
                        className={`transition-transform duration-500 ease-in-out transform h-full object-center object-cover ${navPopped ? 'scale-90' : 'scale-100'}`}
                        src="assets/img/icon/abithah_Impeesaa.ico"
                        alt="Logo HMTE"
                    />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;