/* eslint-disable react-hooks/rules-of-hooks */
import { useScroll, useTransform } from "framer-motion";

const useScrollTransform = (targetRef) => {
    // Scroll progress and transformations for a dynamic target
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const y = (start, end) => {
        return useTransform(scrollYProgress, [0, 1], [start, end])
    }

    return y;

};

export default useScrollTransform;
