import React from "react";
import "./AboutUs.css";
import Logo1 from "../../assets/logos/Logo1.png"

const AboutUs = () => {
    return (
        <div className="box">
                <div className="section">
                    <div className="overlap-group">
                        <div className="rectangle" />
                        <h1 className="text-wrapper">About Us</h1>
                        <div className="div" />
                        <div className="flex-container">
                            <div className="text">
                <span className="span">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. <br />
                </span>
                            </div>
                            <div className="span-wrapper">
                <span className="span">
                  <br />
                </span>
                            </div>
                            <div className="text">
                <span className="span">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
                  <br />
                </span>
                            </div>
                            <div className="span-wrapper">
                <span className="span">
                  <br />
                </span>
                            </div>
                            <div className="text">
                <span className="span">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
                            </div>
                        </div>
                        <img src={Logo1} alt="Logo removebg" className='img-fluid' />
                        <div className="rectangle-2" />
                    </div>
                </div>
        </div>
    );
};

export default AboutUs;
