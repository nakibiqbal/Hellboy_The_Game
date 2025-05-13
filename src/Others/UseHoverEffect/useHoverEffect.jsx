import useScreenSize from "../UseScreenSize/useScreenSize";

const useHoverEffect = (moveFactor = 0) => {
    const isLargeScreen = useScreenSize();

    const handleMouseMoveSection = (e) => {
        const { currentTarget } = e; // Current section
        const rect = currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left
        const moveX = (x / rect.width - 0.5) * moveFactor; // Cursor-relative movement

        // Elements within the current section
        const elements = currentTarget.querySelectorAll(".animatable");

        elements.forEach((el, index) => {
            el.style.transition = "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
            el.style.transform = isLargeScreen ? `translate(${moveX * (index === 0 ? 1 : 0.5)}px, 0)` : "translate(0, 0)";
        });
    };

    const handleMouseLeaveSection = (e) => {
        const elements = e.currentTarget.querySelectorAll(".animatable");
        elements.forEach((el) => {
            el.style.transform = "translate(0, 0)";
        });
    };

    return { handleMouseMoveSection, handleMouseLeaveSection };
};

export default useHoverEffect;
