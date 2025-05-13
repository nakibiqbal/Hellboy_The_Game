import CommonDiv from "../../Others/CommonDiv/CommonDiv";
import useHoverEffect from "../../Others/UseHoverEffect/useHoverEffect";
import "./Join.css";

import leftShift from "../../assets/leftShit.webp";
import rightShift from "../../assets/rightShit.webp";
import joinImg from "../../assets/joinImg.png";
import buttonRed from "../../assets/buttonRed.webp";
import button from "../../assets/button.png";
import shadow from "../../assets/shadow.webp";

const Join = () => {
    const { handleMouseLeaveSection, handleMouseMoveSection } = useHoverEffect(-50)

    return (
        <section
            id="joinSection"
            onMouseMove={handleMouseMoveSection}
            onMouseLeave={handleMouseLeaveSection}
        >
            <div className="joinContentWrapper">
                <div
                    className="joinBtn animatable"

                    style={{
                        transition: "transform 0.2s ease-out", // Smooth effect on reset
                    }}
                >
                    <img className="leftShit" src={leftShift} alt="Left Decoration" />
                    <CommonDiv
                        className="zIndex"
                        span="J"
                        src={shadow}
                        head1="oin the B.P.R.D"
                        head2="investigation!"
                        btnTxt1="BUY NOW!"
                        btnTxt2="JOIN NEWSLATTER"
                        src2={buttonRed}
                        src3={button}
                    />
                    <img className="rightShit" src={rightShift} alt="Right Decoration" />
                </div>

                <div className="joinImg animatable" style={{ transition: "transform 0.2s ease-out" }}>
                    <img src={joinImg} alt="Join Image" />
                </div>
            </div>
        </section>
    );
};

export default Join;
