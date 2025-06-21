/* eslint-disable react/prop-types */
import "./Button.css"

const Button = ({ btnText, videoBtn, onClick, pointerEvents, opacity, src }) => {
    return (
        <div style={{ pointerEvents: pointerEvents, opacity: opacity }} className={`${videoBtn ? `button ${videoBtn}` : "button"}`} onClick={onClick} >
            <div className="buttonBg"></div>
            <img src={src} loading="lazy" />
            <p>{btnText}</p>
        </div>
    )
}

export default Button
