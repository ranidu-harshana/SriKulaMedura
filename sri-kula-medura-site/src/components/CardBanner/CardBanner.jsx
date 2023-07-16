import React from 'react';
import savetime from '../../assets/CardBanner/savetime.png';
import payment from '../../assets/CardBanner/payment.png';
import userfriendly from '../../assets/CardBanner/userfriendly.png';
import './CardBanner.css';

const CardBanner = (props) => {
    return(
        <>
            <containor fluid>
                <div className="CardBannerBox" >
                    <div className="row">
                        <div className="my-3">
                            <h3 className="CardBannerText text-center">
                                Our Features and Services
                            </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center card-all">
                        <div className="col-md-2">
                            <div className="card">
                                <div className="text-center mt-4 mb-2">
                                    <img src={savetime} className="card-img-top " alt=""/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center mb-3">Save Time</h5>
                                    <p className="card-text text-justify">
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 mx-5">
                            <div className="card">
                                <div className="text-center mt-4 mb-2">
                                    <img src={payment} className="card-img-top " alt=""/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center mb-3">Easy Payment</h5>
                                    <p className="card-text text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card">
                                <div className="text-center mt-4 mb-2">
                                    <img src={userfriendly} className="card-img-top " alt=""/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center mb-3">User Friendly</h5>
                                    <p className="card-text text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </containor>
        </>
    );
}

export default CardBanner;