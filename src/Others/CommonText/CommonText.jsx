/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./CommonText.css"

const CommonText = ({ style, text, className }) => {

    return (
        <motion.div
            initial={{ filter: "blur(20px)" }}
            whileInView={{ filter: "blur(0)" }}
            viewport={{
                once: true
            }}
            transition={{ duration: 0.6, ease: " cubic-bezier(0.22, 1, 0.36, 1)" }}
            className={`out ${className}`}>

            {text.split("").map((char, i) => (
                <motion.h2
                    key={i}
                    style={style}
                >
                    {char}
                </motion.h2>
            ))}
        </motion.div>
    )
}

export default CommonText
