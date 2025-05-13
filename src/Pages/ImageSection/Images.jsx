import CommonText from "../../Others/CommonText/CommonText";
import "./Images.css";
import { motion } from "framer-motion";

const Images = () => {
    const images = [
        { images: "src/assets/image1.jpg", id: 1 },
        { images: "src/assets/image2.jpg", id: 2 },
        { images: "src/assets/image3.jpg", id: 3 },
        { images: "src/assets/image4.jpg", id: 4 },
        { images: "src/assets/image5.jpg", id: 5 },
        { images: "src/assets/image6.jpg", id: 6 },
        { images: "src/assets/image7.jpg", id: 7 },
        { images: "src/assets/image8.jpg", id: 8 },
    ];
    const abImages = [
        { images: "src/assets/dot.webp", className: "dot", id: 1 },
        { images: "src/assets/now.webp", className: "now", id: 2 },
        { images: "src/assets/and.webp", className: "and", id: 3 },
        { images: "src/assets/anotheFara.webp", className: "anotherFara", id: 4 }
    ]

    const handleMouseMove = (e, id) => {
        const target = e.target.closest(".images").querySelector("img");
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the container
        const moveX = ((x / rect.width) - 0.5) * 20; // Adjust multiplier for effect strength
        target.style.transform = `translate(${moveX}px, 0) scale(${id === 5 ? 1.1 : 1})`;
    };

    const handleMouseLeave = (e, id) => {
        const target = e.target.closest(".images").querySelector("img");
        target.style.transform = `translate(0, 0) scale(${id === 5 ? 1.1 : 1}`;
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
                                initial={{ filter: "blur(20px) opacity(0)" }}
                                whileInView={{ filter: "blur(0px) opacity(1)" }}
                                transition={{ duration: 1, ease: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                                viewport={{ once: true }}
                                className={`${id === 5 ? "scaledImage" : "image"}`}
                                src={images}
                                alt={`Image ${id}`}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="absoluteStuffs">
                {abImages.map(abImg => {
                    const { images, className, id } = abImg
                    return <img key={id} className={className} src={images} />
                })}
            </div>
        </section>
    );
};

export default Images;
