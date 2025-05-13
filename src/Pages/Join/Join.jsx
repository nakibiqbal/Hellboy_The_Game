import CommonDiv from "../../Others/CommonDiv/CommonDiv";
import useHoverEffect from "../../Others/UseHoverEffect/useHoverEffect";
import "./Join.css";

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
                    <img className="leftShit" src="src/assets/leftShit.webp" alt="Left Decoration" />
                    <CommonDiv
                        className="zIndex"
                        span="J"
                        src="src/assets/shadow.webp"
                        head1="oin the B.P.R.D"
                        head2="investigation!"
                        btnTxt1="BUY NOW!"
                        btnTxt2="JOIN NEWSLATTER"
                        src2="src/assets/buttonRed.webp"
                        src3="src/assets/button.png"
                    />
                    <img className="rightShit" src="src/assets/rightShit.webp" alt="Right Decoration" />
                </div>

                <div className="joinImg animatable" style={{ transition: "transform 0.2s ease-out" }}>
                    <img src="src/assets/joinImg.png" alt="Join Image" />
                </div>
            </div>
        </section>
    );
};

export default Join;
