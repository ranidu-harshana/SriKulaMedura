import React from 'react';
import './BannerFirst.css';
import weddingCouple from '../../assets/Body/weddingCouple.png';

const BannerFirst = (props) =>{
    return(
        <>
        <containor fluid>
            <div className="BodyFirstBox">
                <div className="row">
                    <div className="col-md-2">
                        <div id="circleSM1"></div>
                        <div id="circleLG1"></div>
                        <div id="circleSM2"></div>
                        <div id="circleLG2"></div>
                        <div id="circleSM3"></div>
                        <div id="circleLG3"></div>
                        <div id="circleSM4"></div>
                        <div id="circleLG4"></div>
                        <div id="circleSM5"></div>
                        <div id="circleLG5"></div>
                    </div>
                    <div className="col-md-4 align-self-center columnFirst" >
                        <p className="bodyTextFirst fst-italic fs-5 fs-md-6 align-middle text-center p-4">
                            "Elevate your special day with our exquisite collection of quality wedding dresses."
                        </p>
                    </div>
                    <div className="col-md-4 text-center mt-5 align-self-center columnSecond">
                        <img src={weddingCouple} className="weddingCoupleImg"/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </containor>
        </>
    );
}

export default BannerFirst;