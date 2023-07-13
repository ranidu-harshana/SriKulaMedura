import React from 'react';
import './ARAdBanner.css';
import arImg from '../../assets/ARAdBanner/augmentedReality.png';
import Button from 'react-bootstrap/Button';

const ARAdBanner = (props) => {
    return(
        <>
        <containor fluid>
            <div className="BodySecondBox">
                <div className="row mt-3">
                    <div className="col-md-2" ></div>
                    <div className="col-md-4 align-self-center cntSection1">
                        <p className="text-center fs-3 font-weight-bold arText">
                            Experience the <br/> Augmented Reality Here
                            <br/>
                            <Button className="button-decoration-2 btn-md mt-4">Try Out</Button>{' '}
                        </p>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <img src={arImg} className="arImg1"/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </containor>
        </>
    );
}

export default ARAdBanner;