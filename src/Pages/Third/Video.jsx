import { useState } from "react";
import "./Video.css";
import videoBg from "../../assets/videoBg.png"
import button from "../../assets/button.png"
import Button from "../../Others/Buttons.jsx/Button";

const Video = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const pointerEvents = isPlaying ? "none" : "auto";
    const opacity = isPlaying ? 0 : 1;

    const [videoSrc, setVideoSrc] = useState(
        "https://www.youtube.com/embed/6pxOKt0v5AQ"
    );

    const handlePlayVideo = () => {
        // Add autoplay parameter to the YouTube URL
        setVideoSrc("https://www.youtube.com/embed/6pxOKt0v5AQ?autoplay=1");
        setIsPlaying(true)
    };

    return (
        <section
            id="videoSection">
            <img src={videoBg} className="videoBorder" alt="Video Border" />

            {/* Always render the iframe */}
            <iframe
                className="video"
                frameBorder="0"
                src={videoSrc}
                title="Hellboy Web of Wyrd Official Launch Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            {/* Button */}
            <Button src={button} btnText="WATCH TRAILER" videoBtn="videoBtn" onClick={handlePlayVideo} pointerEvents={pointerEvents} opacity={opacity} />
        </section>
    );
};

export default Video;
