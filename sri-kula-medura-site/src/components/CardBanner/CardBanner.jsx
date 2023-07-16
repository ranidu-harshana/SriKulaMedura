import React from 'react';
import savetime from '../../assets/CardBanner/savetime.png';
import payment from '../../assets/CardBanner/payment.png';
import userfriendly from '../../assets/CardBanner/userfriendly.png';
import './CardBanner.css';
import Card from "./Card";

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
                        <Card title={'Save Time'} image={savetime} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur"}/>
                        <Card title={'Easy Payment'} image={payment} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur"}/>
                        <Card title={'User Friendly'} image={userfriendly} content={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloribus nam nisi quam voluptas! Deleniti ducimus impedit ipsa voluptatibus? Aspernatur"}/>
                    </div>
                </div>
            </containor>
        </>
    );
}

export default CardBanner;