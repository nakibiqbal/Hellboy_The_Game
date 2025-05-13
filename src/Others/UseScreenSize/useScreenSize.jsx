import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);

    // Update screen size dynamically
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth > 991);
    };

    useEffect(() => {
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return isLargeScreen;
};

export default useScreenSize;
