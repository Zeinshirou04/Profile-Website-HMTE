const LoadingSplash = () => {
    return (
        <div className="w-full h-full z-50 flex justify-center items-center bg-white">
            <div className="w-full flex flex-col justify-center gap-6 items-center animate-pulse">
                <img
                    className="w-24"
                    src="favicon.ico"
                    alt="HMTE Logo"
                    loading="eager"
                />
                <h6 className="w-48 text-xl font-bold text-center">
                    Silahkan Tunggu Sebentar ya 😁
                </h6>
            </div>
        </div>
    );
}

export {
    LoadingSplash
};