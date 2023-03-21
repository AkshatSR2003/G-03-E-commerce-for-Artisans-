import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Context } from "../../../utils/context";
import { useContext } from "react";



const Banner = () => {
    const { setShowCart } = useContext(Context);
    const handleClick = () => {
        window.location.replace("https:en.wikipedia.org/wiki/Crafts_of_India");
      };
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Artisans</h1>
                    <p>
                    “Art is not a handicraft, it is the transmission of feeling the artist has experienced.”
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" onClick={handleClick}>
                        Read More
                        </div>
                        <div className="banner-cta v2" onClick={() => setShowCart(true)}>Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
