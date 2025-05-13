import Button from "../../Others/Buttons.jsx/Button"
import "./Home.css"
import { motion } from "framer-motion"

const Home = () => {
    return (

        <motion.section
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            viewport={{ once: true }}
            id="homeSection">
            <div className="overlayShadow">
                <div className="homeContent">
                    <div className="homeWrapper">
                        <img className="hellBoy" src="src\assets\hellboyImage.png" />
                        <p className="platforms">Out now on all platforms!</p>
                        <Button src="src\assets\button.png" btnText="BUY NOW!" />
                        <div className="Cimages">
                            <img src="src\assets\ps.png" />
                            <img src="src\assets\xBox.png" />
                            <img src="src\assets\pcImg.png" />
                            <img src="src\assets\switch.png" />
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="scroll">
                <img className="rotate" src="src\assets\scroll.webp" />
                <img className="rotate" src="src\assets\!.webp" />
            </a>
        </motion.section>

    )
}

export default Home
