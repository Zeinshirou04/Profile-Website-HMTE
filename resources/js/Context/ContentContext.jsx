import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentContextProvider = ({ children }) => {
    const [isLoadingContent, setLoadingContent] = useState(true);
    const [heroIndexAt, setHeroIndex] = useState(0);
    const [pengurusPreviewKey, setPengurusPreviewKey] = useState('ketua');
    return (
        <ContentContext.Provider value={{ isLoadingContent, setLoadingContent, heroIndexAt, setHeroIndex, pengurusPreviewKey, setPengurusPreviewKey }}>
            {children}
        </ContentContext.Provider>
    );
}