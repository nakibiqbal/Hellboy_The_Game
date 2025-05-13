import CommonText2 from "../../Others/CommonText2/CommonText2"
import { FaTwitter, FaInstagram, FaDiscord, FaFacebookF, FaReddit } from "react-icons/fa";

import "./Footer.css"

import arcade from "../../assets/arcade.png"
import horse from "../../assets/horse.png"
import good from "../../assets/good.webp"

const Footer = () => {
    return (

        <section id="footerSection">
            <div className="footerWrapper">

                <div className="footerDiv1">
                    <CommonText2 border="border" className="footerWidth" />
                </div>

                <div className="footerDiv2">

                    <CommonText2 diamond="diamond" className="footerDiamond1" />

                    <div className="footerMainContent2">

                        <div className="footerContent1">
                            <div className="footerText">
                                <p>
                                    Dark Horse Comics(R) and the Dark Horse logo are registered trademarks of Dark Horse Comics LLC.
                                    <br />
                                    <br />
                                    Hellboy™ 2023 Mike Mignola.
                                </p>
                            </div>
                            <div className="footerImgs">
                                <img src={arcade} />
                                <img src={horse} />
                                <img src={good} />
                            </div>
                        </div>

                        <div className="footerContent1 reverse">
                            <div className="footerLinks">
                                <a href="#">DISCLAIMER</a>
                                <a href="#">PRIVACY POLICY</a>
                                <a href="#">MEDIA</a>
                            </div>
                            <div className="footerIcons">
                                <a href="#" >Join Newsletter</a>
                                <div className="footerIc">
                                    <a href="#">

                                        <FaTwitter />
                                    </a>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaDiscord />
                                    </a>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#">
                                        <FaReddit />
                                    </a>
                                </div>
                                <a href="#">Join Newsletter</a>
                                <a href="#" style={{ color: "#ffe2a7" }}>Wishlist</a>

                            </div>
                        </div>

                    </div>

                    <CommonText2 diamond="diamond" className="footerDiamond2" />

                </div>

                <div className="footerDiv1">
                    <CommonText2 border="border" className="footerWidth" />
                </div>

                <div style={{ width: "100%", paddingBottom: "2rem" }} className="footerLinks">
                    <a href="#">WEBSITE BY PSYCHOATIVE STUDIOS</a>
                    <a href="#">CLONE BY NAKIB IQBAL</a>
                </div>

            </div>
        </section>

    )
}

export default Footer
