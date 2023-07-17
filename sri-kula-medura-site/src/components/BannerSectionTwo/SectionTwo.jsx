import React from "react";
import "./SectionTwo.css";
import couple from "../../assets/BannerSectionTwo/couple.png"
import eclippse from "../../assets/BannerSectionTwo/eclippse.png"

const SectionTwo = () => {
    return (
        <div className="box">
                <div className="section">
                    <div className="overlap-group">
                        <img src={eclippse} alt="Eclippse" style={{marginLeft:"158px", marginTop:"77px"}}/>
                        <h1 className="text-wrapper">
                            “Elevate your special day with our exquisite collection of quality wedding dresses.”
                        </h1>
                        <img src={couple} alt="Couple" style={{width:"500px", marginTop:"69px", marginLeft:"70px"}}/>
                    </div>
                </div>
        </div>
    );
};

export default SectionTwo;
