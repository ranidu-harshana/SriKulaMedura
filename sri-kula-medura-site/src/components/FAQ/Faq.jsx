import React from 'react';
import './Faq.css';
import {Container} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const FAQ = (props) => {
    return(
        <>
            <div className="faq-box">
                <Container fluid>
                    <div className="row">
                        <h1 className="text-center my-4" style={{color:"#378B75",fontWeight:"bold"}}>Frequently Asked Questions</h1>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-lg-2 col-md-1"></div>
                            <div className="col-lg-8 col-md-10 faq-mid mb-5">
                                <Accordion>
                                    <Accordion.Item eventKey="0" className="mb-4 mb-xs-0">
                                        <Accordion.Header className="faq-title">Online Shopping- Get in touch for more details</Accordion.Header>
                                        <Accordion.Body>
                                            In order to ensure that you have the ultimate sri kula medura shopping experience, our list of Frequently Asked Questions is compiled with you in mind! If you have any queries that are not answered here, please drop us an e-mail on customercare@odel.lk. We will respond as soon as possible.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="mb-4 mb-xs-2">
                                        <Accordion.Header>How do I change or cancel an order?</Accordion.Header>
                                        <Accordion.Body>
                                            Once an order has been confirmed you can change/cancel only if it’s 2 days prior to the delivery date. However, once you receive the item and wish to exchange it – you may bring the product to any one of our Odel outlets. For help, contact our customer service advisers who will assist you with your request.Please read our Returns Policy for more information.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className="mb-4">
                                        <Accordion.Header>What if I have received incorrect or faulty goods?</Accordion.Header>
                                        <Accordion.Body>
                                            We are sorry that your delivery has not gone smoothly.  Please read our Return Policy to find out how to return the item to us. You can send a complaint to customer care via email and then either you can get the faulty products exchanged or refunded. However there are some products that can’t be exchanged. Kindly refer to our Return & Refund policy to know about the non-exchangeable products.

                                            If your order is damaged please contact us on;
                                            Tel: 0115 128 128 (Between 8 a.m. – 8 p.m.)
                                            Email: customercare@odel.lk
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="mb-4">
                                        <Accordion.Header>I have been informed that there is a delay with my order. When can I expect to receive the item?</Accordion.Header>
                                        <Accordion.Body>
                                            Occasionally, due to circumstances outside our control, you might experience a slight delay. During this time we will keep you updated by e-mail or phone.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4" className="mb-4">
                                        <Accordion.Header>Where can the gift vouchers be redeemed?</Accordion.Header>
                                        <Accordion.Body>
                                            Gift vouchers can be redeemed at all Odel stores except for the Airport branch. Exclusive Wedding Gift Card can be redeemed at Odel Branches only.Branded All Store Gift vouchers can be redeemed at Splash, Crocs, Galleria, Mothercare, Fossil, Levi’s, LUVSL, Giordano and Tommy Hilfiger. Gift vouchers can be purchased by all means of cash.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5" className="mb-4">
                                        <Accordion.Header>What is an E-voucher & how can I redeem it?</Accordion.Header>
                                        <Accordion.Body>
                                            1. E- Voucher is a web-based product and customer can use for online purchases only and cannot be redeemable at any store.
                                            2. The value of E Vouchers must be fully utilized at the time of redemption (No partial utilization is allowed)
                                            3. E vouchers are having one-year expiry period.

                                            How can I redeem an E- Voucher?
                                            Step 01 – Purchase Odel All Store E-Voucher.

                                            Step 02 – Sign in to your odel.lk account. If you already don’t have an account, click the Profile Icon on the top right corner. Click “Register” and create an account by entering your email address, contact number, and password.

                                            Step 03 – After signing in, go to “My Account” by clicking on the Profile Icon. You can find “E-vouchers” in the dropdown.

                                            Step 04 – Select “E-vouchers” and the E-Voucher you purchased will be visible under “Available E-Vouchers”

                                            Here, You can use the E-Voucher to make purchases or share the E-Voucher with someone else through your account. Kindly note that the person you share the E-Voucher with also should have an odel.lk account created.

                                            Also when buying other items through odel.lk, the E-Voucher you purchased will be available for redeeming at the checkout.

                                            Please note that the E-Vouchers are not redeemable through any outlets.

                                            10. Can I use an E-Voucher for purchasing another E-Voucher or a Physical Voucher?
                                            Kindly note that E-Vouchers can not be used to purchase another E-Voucher or a Physical Voucher.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>How many days to deliver to my Address ?</Accordion.Header>
                                        <Accordion.Body>
                                            Orders will be delivered to the location provided by you within 6-8 working days
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="col-lg-2 col-md-1"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default FAQ;