import useScreenSize from '../../Others/UseScreenSize/useScreenSize'
import './LastSection.css'
import { motion } from 'framer-motion'

import hellLast from "../../assets/hellLast.webp"
import gotoHell from "../../assets/gotoHell.webp"
import hellBoyImg from "../../assets/hellboyImage.png"

const LastSection = () => {
    const isLargeScreen = useScreenSize()

    const handleMouseMove = (e) => {
        const { currentTarget } = e;
        const rect = currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const moveX = ((x / rect.width) - 0.5) * 30;

        const animate = currentTarget.querySelectorAll('.animate');
        animate.forEach((el, i) => {
            el.style.transition = "transform 0.4s cubic-bezier(0, 0.55, 0.45, 1)";
            el.style.transform = isLargeScreen ? `translateX(${moveX * (i === 0 ? 0.5 : 1)}px)` : "translateX(0)"
        })
    }
    const handleMouseLeave = (e) => {
        const animate = e.currentTarget.querySelectorAll('.animate');
        animate.forEach((el) => {
            el.style.transform = `translateX(0)`
        })
    }

    return (
        <section id='lastSection'>
            <motion.div
                initial={{ filter: "blur(10px) opacity(0.3)" }}
                whileInView={{ filter: "blur(0px) opacity(1)" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="lastWrapper"
            >
                <div className="last1">
                    <div className="lastImg1 animate">
                        <img src={hellLast} />
                    </div>
                    <div className="lastImg2 animate">
                        <img src={gotoHell} />
                    </div>
                </div>
                <img className='lastHellBoy' src={hellBoyImg} />
            </motion.div>
        </section>
    )
}

export default LastSection
