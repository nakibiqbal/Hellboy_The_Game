/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import "./CommonText2.css"

const CommonText2 = ({ style, className, heading, heading2, paragraph, src, border, diamond }) => {
    return (

        <motion.div initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
            whileInView={{ opacity: 1 }} style={style} className={`${className ? `butterflyHouse ${className}` : `butterflyHouse`}`}>
            {src && <img src={src} loading="lazy" />}
            {heading && <h3>{heading}</h3>}
            {heading2 && <h4>{heading2}</h4>}
            {diamond && <span className={diamond}></span>}
            {border && <motion.span
                initial={{
                    transform: "scaleX(0)"
                }}
                whileInView={{
                    transform: "scaleX(1)"
                }}
                transition={{
                    duration: 0.8,
                    type: "tween"
                }}
                viewport={{
                    once: true
                }}
                className={border}></motion.span>
            }
            {paragraph && <p>{paragraph}</p>}
        </motion.div>

    )
}

export default CommonText2
