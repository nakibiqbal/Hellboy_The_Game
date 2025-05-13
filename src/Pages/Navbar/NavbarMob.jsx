import { FaTwitter, FaInstagram, FaDiscord, FaFacebookF, FaReddit } from "react-icons/fa";
import "./NavbarMob.css"
import { useState } from "react";

const NavbarMob = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <div className="navbarMobile">
            {navbar && <div className="navMobWrapper">
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
            </div>}
        </div>
    )
}

export default NavbarMob
