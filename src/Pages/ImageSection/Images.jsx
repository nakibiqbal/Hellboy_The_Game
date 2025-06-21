import CommonText from "../../Others/CommonText/CommonText";
import "./Images.css";
import { motion } from "framer-motion";

// Import images statically with updated paths
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";

import dot from "../../assets/dot.webp";
import now from "../../assets/now.webp";
import and from "../../assets/and.webp";
import anotherFara from "../../assets/anotheFara.webp";

const Images = () => {
    const images = [
        { images: image1, id: 1 },
        { images: image2, id: 2 },
        { images: image3, id: 3 },
        { images: image4, id: 4 },
        { images: image5, id: 5 },
        { images: image6, id: 6 },
        { images: image7, id: 7 },
        { images: image8, id: 8 },
    ];
    const abImages = [
        { images: dot, className: "dot", id: 1 },
        { images: now, className: "now", id: 2 },
        { images: and, className: "and", id: 3 },
        { images: anotherFara, className: "anotherFara", id: 4 }
    ];

    const handleMouseMove = (e, id) => {
        const target = e.target.closest(".images").querySelector("img");
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the container
        const moveX = ((x / rect.width) - 0.5) * 20; // Adjust multiplier for effect strength
        target.style.transform = `translate(${moveX}px, 0) scale(${id === 5 ? 1.1 : 1})`;
    };

    const handleMouseLeave = (e, id) => {
        const target = e.target.closest(".images").querySelector("img");
        target.style.transform = `translate(0, 0) scale(${id === 5 ? 1.1 : 1})`;
    };

    return (
        <section id="imgSection">
            <CommonText className="imageTxt" text="WAAA !" />
            <div className="imgWrapper">
                {images.map((img) => {
                    const { id, images } = img;
                    return (
                        <div
                            key={id}
                            className="images"
                            onMouseMove={(e) => handleMouseMove(e, id)}
                            onMouseLeave={(e) => handleMouseLeave(e, id)}
                        >
                            <motion.img
                                initial={{ filter: "blur(10px)" }}
                                whileInView={{ filter: "blur(0px)" }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                viewport={{ once: true }}
                                className={`${id === 5 ? "scaledImage" : "image"}`}
                                src={images}
                                alt={`Image ${id}`}
                                loading="lazy"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="absoluteStuffs">
                {abImages.map(abImg => {
                    const { images, className, id } = abImg;
                    return <img key={id} className={className} src={images} loading="lazy" />;
                })}
            </div>
        </section>
    );
};

export default Images;