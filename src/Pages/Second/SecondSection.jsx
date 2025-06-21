import { useRef } from "react";
import { motion } from "framer-motion";
import "./SecondSection.css";

import shadow from "../../assets/shadow.webp";
import secondBg from "../../assets/secondBg.png";
import boy from "../../assets/boy.webp";

import CommonDiv from "../../Others/CommonDiv/CommonDiv";
import CommonText from "../../Others/CommonText/CommonText";
import useScreenSize from "../../Others/UseScreenSize/useScreenSize";
import useScrollTransform from "../../Others/UseScrollTransform/useScrollTransform";

const SecondSection = () => {
    const section2 = useRef(null);
    const isLargeScreen = useScreenSize();
    const y = useScrollTransform(section2);

    // Function to generate dynamic styles
    const getDynamicStyle = (start, end) => {
        const yTransform = y(start, end);
        return isLargeScreen
            ? { y: yTransform, transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }
            : {};
    };

    return (
        <section id="section2" ref={section2}>
            <div className="one2">
                <CommonDiv
                    style={getDynamicStyle(400, -400)}
                    className="one"
                    src={shadow}
                    span="A"
                    head1="ncient evil lives"
                    head2="in the Wyrd"
                />
            </div>
            {/* Background Image */}
            <img className="sec2bg" src={secondBg} alt="Background" loading="lazy" />

            <div className="two2">
                <CommonDiv
                    head1="Let"
                    style={getDynamicStyle(700, -800)}
                    className="two"
                />

                <CommonText text="out!"
                    style={getDynamicStyle(400, -1000)}
                />

                <CommonDiv
                    head1="Eager to be"
                    style={getDynamicStyle(700, -800)}
                    className="three"
                />
                {/* Boy image */}
                <motion.img
                    style={getDynamicStyle(100, -300)}
                    className="boy"
                    src={boy}
                    alt="Boy"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default SecondSection;