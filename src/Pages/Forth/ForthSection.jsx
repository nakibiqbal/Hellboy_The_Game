import { useRef } from "react"
import CommonDiv from "../../Others/CommonDiv/CommonDiv"
import CommonText from "../../Others/CommonText/CommonText"
import "./ForthSection.css"
import { motion } from "framer-motion"
import CommonText2 from "../../Others/CommonText2/CommonText2"
import useScreenSize from "../../Others/UseScreenSize/useScreenSize"
import useScrollTransform from "../../Others/UseScrollTransform/useScrollTransform"

import shadow from "../../assets/shadow.webp"
import leaf from "../../assets/leaf.webp"
import pathor from "../../assets/pathor.webp"
import fara from "../../assets/fara.webp"
import gach from "../../assets/gach.webp"
import img1 from "../../assets/img1.webp"
import crap from "../../assets/crap.webp"
import forthHell from "../../assets/forthHell.webp"
import hand from "../../assets/hand.webp"

const ForthSection = () => {
    const isLargeScreen = useScreenSize()
    const forthSection = useRef(null);
    const y = useScrollTransform(forthSection);

    const getDynamicStyle = (start, end) => {
        const yTransform = y(start, end);
        return isLargeScreen
            ? { y: yTransform, transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }
            : {};
    };
    const head2 = <h1> The Butterfly &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /> House </h1>

    return (

        <section ref={forthSection} id="forthSection" >
            {/* leftContent */}
            <div className="img3">
                <motion.div style={getDynamicStyle(400, -300)} className="divLeaf">
                    <CommonDiv src={shadow} className="five" span="U" head1="ncover" head2={head2} />
                    <img className="leaf" src={leaf} loading="lazy" />
                </motion.div>
            </div>

            <div className="middleC">
                <CommonText style={getDynamicStyle(400, -300)} className="mystery" text="MYSTERY!!" />
                <motion.div className="pathorDiv" style={getDynamicStyle(1100, -1100)}>
                    <img className="pathor" src={pathor} loading="lazy" />
                </motion.div>
                <motion.div className="leftImgWrapper" style={getDynamicStyle(200, -100)} >
                    <img className="fara" src={fara} loading="lazy" />
                    <img className="gach" src={gach} loading="lazy" />
                    <motion.img initial={{ filter: "blur(10px)" }} viewport={{ once: true }} whileInView={{ filter: "blur(0)" }} transition={{ duration: 1, ease: "easeInOut" }} className="crap" src={crap} loading="lazy" />
                </motion.div>
                <motion.img initial={{ filter: "sepia(1) blur(10px)" }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{ once: true }} whileInView={{ filter: "sepia(0) blur(0px)" }} style={getDynamicStyle(400, -300)} className="forthHell" src={forthHell} loading="lazy" />
                <motion.div style={getDynamicStyle(-50, 200)}>
                    <img className="img1" src={img1} loading="lazy" />
                </motion.div>
            </div>

            <div className="forthWrapper">
                <CommonText2
                    style={getDynamicStyle(700, -500)}
                    className="uniq"
                    border="border"
                    diamond="diamond"
                    heading="The Butterfly House"
                    paragraph="Built in 1962 by occultist Pasquale Deneveaux, The Butterfly House is more than a mere residence; it’s a gateway. Its perverse angles and non-Euclidean geometries were designed with a singular foul purpose in mind: to open doorways into a terrible and fascinating dimension called The Wyrd."
                />
            </div>
            <motion.img
                initial={{ filter: "blur(10px)" }}
                whileInView={{ filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
                style={getDynamicStyle(-400, 0)} className="hand" src={hand} loading="lazy" />
        </section>

    )
}

export default ForthSection