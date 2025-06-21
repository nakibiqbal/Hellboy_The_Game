import { motion } from "framer-motion"
import Button from "../../Others/Buttons.jsx/Button"
import "./Home.css"
import hellboyImg from "../../assets/hellboyImage.png"
import hellboyBg from "../../assets/homeImage.jpg"
import hellboyBgMob from "../../assets/boymob.png"
import button from "../../assets/button.png"
import ps from "../../assets/ps.png"
import xBox from "../../assets/xBox.png"
import pcImg from "../../assets/pcImg.png"
import switchImg from "../../assets/switch.png"
import scroll from "../../assets/scroll.webp"
import exclamat from "../../assets/!.webp"
import circle from "../../assets/circle.webp"
import useScreenSize from "../../Others/UseScreenSize/useScreenSize"

const Home = () => {
    const isLargeScreen = useScreenSize();
    return (

        <motion.section
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            viewport={{ once: true }}
            style={{
                backgroundImage: `url(${isLargeScreen ? hellboyBg : hellboyBgMob})`,
            }}
            id="homeSection">
            <div className="overlayShadow">
                <div className="homeContent">
                    <div className="homeWrapper">
                        <img className="hellBoy" src={hellboyImg} loading="lazy" />
                        <p className="platforms">Out now on all platforms!</p>
                        <Button src={button} btnText=" BUY NOW!" />
                        <div className="Cimages">
                            <img src={ps} loading="lazy" />
                            <img src={xBox} loading="lazy" />
                            <img src={pcImg} loading="lazy" />
                            <img src={switchImg} loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="scroll" style={{ backgroundImage: `url(${circle})` }} >
                <img className="rotate" src={scroll} loading="lazy" />
                <img className="rotate" src={exclamat} loading="lazy" />
            </a>
        </motion.section>

    )
}

export default Home