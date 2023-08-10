import React from "react";
import "./Aboutus.css";
import Logo1 from "../../assets/logos/Logo1.png"
import {Container} from "react-bootstrap";

const AboutUsC = () => {
    return (
        <>
            <div className="aboutUs-box">
                <Container fluid>
                    <div className="row">
                        <h1 className="text-center my-4" style={{color:"#378B75",fontWeight:"bold"}}>About Us</h1>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-8 col-md-10 aboutUs-mid mb-5">
                                <div className="text-center my-4">
                                    <img src={Logo1} className="aboutLogo" alt={''}/>
                                </div>
                                <div className="px-xl-5 px-lg-5 px-md-4 aboutUs-mid-text">
                                    <p>
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                      industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                      and scrambled it to make a type specimen book. <br />
                                    </p>

                                    <p>
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
                                    </p>

                                    <p>
                                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                      industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                                      leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-1"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AboutUsC;
