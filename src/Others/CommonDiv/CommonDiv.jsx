/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
import "./CommonDiv.css"
import Button from "../Buttons.jsx/Button"

const CommonDiv = ({
    style,
    src,
    head1,
    head2,
    span,
    className,
    btnTxt1,
    btnTxt2,
    src2,
    src3,
}) => {
    return (

        <motion.div
            initial={{ filter: "blur(20px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileInView={{ filter: "blur(0)" }}
            style={style}
            className={`${className ? `ancient ${className}` : "ancient"}`}
        >
            {src && <img className="shadow" src={src} alt="Shadow" loading="lazy" />}
            <h1>
                {span && <span>{span}</span>}{head1}
            </h1>
            {head2 && <h1>{head2}</h1>}
            <br />
            {(btnTxt1 || btnTxt2 || src2 || src3) && (
                <div className="buttons">
                    {btnTxt1 && <Button btnText={btnTxt1} src={src2} />}
                    {btnTxt2 && <Button btnText={btnTxt2} src={src3} />}
                </div>
            )}
        </motion.div>

    )
}

export default CommonDiv