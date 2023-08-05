import React from 'react';
import './CustomerReviews.css';
import customerBackground from '../../assets/CustomerReviews/cusBg.png';
import profilePicture from '../../assets/CustomerReviews/propic.jpg';
import Carousel from 'react-bootstrap/Carousel';

const CustomerReviews = (props) => {
    return (
        <>
            <div className="customerReviews">
                <img src={customerBackground} style={{position:"absolute"}}/>
                <Carousel>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card reviewCard" style={{backgroundColor:"#000000",opacity:"0.8"}}>
                                    <div className="text-center">
                                        <img src={profilePicture} className="profilePicture text-center rounded-circle"/>
                                        <p className="cardText">
                                            I recently discovered OnlineClothique.com and I can't stop raving about it! This online clothing shop is an absolute gem for fashion enthusiasts like myself. From trendy outfits to classic staples, they offer a diverse range of styles that cater to every taste.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card reviewCard" style={{backgroundColor:"#000000",opacity:"0.8"}}>
                                    <div className="text-center">
                                        <img src={profilePicture} className="profilePicture text-center rounded-circle"/>
                                        <p className="cardText">
                                            I recently discovered OnlineClothique.com and I can't stop raving about it! This online clothing shop is an absolute gem for fashion enthusiasts like myself. From trendy outfits to classic staples, they offer a diverse range of styles that cater to every taste.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <div className="card reviewCard" style={{backgroundColor:"#000000",opacity:"0.8"}}>
                                    <div className="text-center">
                                        <img src={profilePicture} className="profilePicture text-center rounded-circle"/>
                                        <p className="cardText">
                                            I recently discovered OnlineClothique.com and I can't stop raving about it! This online clothing shop is an absolute gem for fashion enthusiasts like myself. From trendy outfits to classic staples, they offer a diverse range of styles that cater to every taste.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default CustomerReviews;