import { useRef } from "react";
import { motion } from "framer-motion";
import CommonText2 from "../../Others/CommonText2/CommonText2";
import "./StickySection.css";
import useScreenSize from "../../Others/UseScreenSize/useScreenSize";
import useScrollTransform from "../../Others/UseScrollTransform/useScrollTransform";
import useHoverEffect from "../../Others/UseHoverEffect/useHoverEffect";

import image5 from "../../assets/image5.jpg";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import fox from "../../assets/fox.webp";
import gol from "../../assets/gol.webp";
import crown from "../../assets/crown.webp";

const StickySection = () => {
    const stickySection = useRef(null);
    const isLargeScreen = useScreenSize();
    const y = useScrollTransform(stickySection);
    const { handleMouseMoveSection, handleMouseLeaveSection } = useHoverEffect(100);

    // Function to get dynamic styles based on screen size
    const getDynamicStyle = (start, end) => {
        const yTransform = y(start, end);
        return isLargeScreen
            ? { y: yTransform, transition: "all 1.5s cubic-bezier(0.22, 1, 0.36, 1)" }
            : {};  // Empty styles for small screens
    };
    const dynamicCommonText = [
        {
            src: image5,
            heading2: "Authentic",
            paragraph: "A graphical style that evokes the original art style of the comics and makes every moment of the game look - and feel - like it was ripped straight from the comic books.",
            id: 1
        },
        {
            src: image9,
            heading2: "Fight like Hellboy",
            paragraph: "Chain together hard-hitting melee and ranged attacks to fight a diverse array of increasingly nightmarish enemies.",
            id: 2
        },
        {
            src: image10,
            heading2: "A true Hellboy story",
            paragraph: "A narrative true to the spirit of the comics, tying together several independent stories into one unified Hellboy experience.",
            id: 3
        },
    ];

    return (
        <section
            onMouseMove={handleMouseMoveSection}
            onMouseLeave={handleMouseLeaveSection}
            ref={stickySection}
            id="StickySection"
        >
            <div className="foxCircle">
                <div className="tracking-container">
                    <div className="foxCircleContent1 animatable">
                        <motion.img
                            initial={{ filter: "brightness(0)" }}
                            whileInView={{ filter: "brightness(1)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            src={fox}
                            loading="lazy"
                        />
                    </div>
                    <div className="foxCircleContent2 animatable">
                        <motion.img
                            initial={{ filter: "blur(10px)" }}
                            whileInView={{ filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            src={gol}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="stickyContent">
                <div className="commonText2">
                    <CommonText2
                        src={crown}
                        className="uniq"
                        heading="An Original Hellboy B.P.R.D. story"
                        paragraph="Developed by Upstream Arcade, Hellboy: Web of Wyrd is an original story created in partnership with Dark Horse Comics and creator Mike Mignola. Like the comics, the game sends Hellboy on a series of vastly different and wholly unique adventures; and while those stories stand on their own, they are all tied to the mysterious legacy of The Butterfly House."
                        border="border"
                        diamond="diamond"
                    />
                </div>
                <div className="stickyBody">
                    {dynamicCommonText.map((cmnTxt) => {
                        const { src, heading2, paragraph, id } = cmnTxt;
                        return (
                            <div key={id} className="stickytwos">
                                <motion.img
                                    initial={{ filter: "blur(10px)" }}
                                    whileInView={{ filter: "blur(0px)" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    style={id === 2 ? getDynamicStyle(800, -600) : getDynamicStyle(500, -300)}
                                    className={`stickImgs ${id === 2 ? "stick2" : ""}${id === 3 ? "stick3" : ""}`}
                                    src={src}
                                    loading="lazy"
                                />
                                <CommonText2 className="uniq" heading2={heading2} paragraph={paragraph} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StickySection;