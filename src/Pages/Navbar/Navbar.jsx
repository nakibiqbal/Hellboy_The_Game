import { FaTwitter, FaInstagram, FaDiscord, FaFacebookF, FaReddit } from "react-icons/fa";
import { useState } from "react";

import "./Navbar.css"

import nav from "../../assets/nav.png"
import closeBtn from "../../assets/closeBtn.png"

const Navbar = () => {
    const [onClicked, setOnClicked] = useState(false);
    const x = onClicked ? 0 : -100;
    const blur = onClicked ? 0 : 10;
    const visibility = onClicked ? "visible" : "hidden"

    return (
        <>
            <button className="navButton" onClick={() => setOnClicked(!onClicked)} ><img src={nav} /></button>
            <div style={{
                filter: `blur(${blur}px)`,
                transform: `translateX(${x}%)`,
                zIndex: 999999,
                padding: "5rem 2rem",
                visibility: visibility
            }}
                className="navMobWrapper">
                <button className="navButton" onClick={() => setOnClicked(!onClicked)} ><img src={closeBtn} /></button>

                <div className="navLeft">
                    <div className="wishlist">
                        <div className="div1"></div>
                        <a href="#">Wishlist</a>
                        <div className="div2"></div>
                    </div>
                    <a href="href">Trailer</a>
                    <a href="href">Join Newsletter</a>
                </div>
                <div className="navRight">
                    <FaTwitter />
                    <FaInstagram />
                    <FaDiscord />
                    <FaFacebookF />
                    <FaReddit />
                </div>
            </div>



            <section id="navSection">
                <div className="navWrapper">
                    <div className="navLeft">
                        <div className="wishlist">
                            <div className="div1"></div>
                            <a href="#">Wishlist</a>
                            <div className="div2"></div>
                        </div>
                        <a href="href">Trailer</a>
                        <a href="href">Join Newsletter</a>
                    </div>
                    <div className="navRight">
                        <FaTwitter />
                        <FaInstagram />
                        <FaDiscord />
                        <FaFacebookF />
                        <FaReddit />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
