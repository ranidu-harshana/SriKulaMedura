import React from "react";
import "./Footer.css";
<<<<<<< Updated upstream

const Footer = () => {
    return (
        <div className="box">
            <div className="section-wrapper">
                <div className="section">
                    <div className="overlap-group">
                        <h1 className="text-wrapper">Quick Links</h1>
                        <div className="div">Contact Us</div>
                        <div className="text-wrapper-2">Our Location</div>
                        <div className="flex-container">
                            <div className="text">
                <span className="span">
                  About Us
                  <br />
                </span>
                            </div>
                            <div className="span-wrapper">
                <span className="text-wrapper-3">
                  Contact Us
                  <br />
                </span>
                            </div>
                            <div className="text-2">
                <span className="text-wrapper-4">
                  <br />
                </span>
                            </div>
                            <div className="text-3">
                <span className="text-wrapper-5">
                  Privacy Policy
                  <br />
                </span>
                            </div>
                            <div className="text-4">
                <span className="text-wrapper-6">
                  Refund Policy
                  <br />
                </span>
                            </div>
                            <div className="text-5">
                                <span className="text-wrapper-7">Terms and Conditions</span>
                            </div>
                        </div>
                        <div className="flex-container-2">
                            <div className="text-6">
                <span className="text-wrapper-8">
                  No.xxx,
                  <br />
                </span>
                            </div>
                            <div className="text-7">
                <span className="text-wrapper-9">
                  Street 01
                  <br />
                </span>
                            </div>
                            <div className="text-8">
                <span className="text-wrapper-10">
                  Street 02(optional)
                  <br />
                </span>
                            </div>
                            <div className="text-9">
                <span className="text-wrapper-11">
                  Town
                  <br />
                </span>
                            </div>
                            <div className="text-10">
                <span className="text-wrapper-12">
                  <br />
                </span>
                            </div>
                            <div className="text-11">
                <span className="text-wrapper-13">
                  Email
                  <br />
                </span>
                            </div>
                            <div className="text-12">
                <span className="text-wrapper-14">
                  <br />
                </span>
                            </div>
                            <div className="text-13">
                <span className="text-wrapper-15">
                  07xxxxxxxxxx
                  <br />
                </span>
                            </div>
                            <div className="text-14">
                                <span className="text-wrapper-16">07xxxxxxxxxx</span>
                            </div>
                        </div>
                        <img className="rectangle" alt="Rectangle" src="rectangle.png" />
                    </div>
=======
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <MDBFooter bgColor='' className='text-center text-lg-start text-muted bottom-fixed'>
            <div class='footerbody'>
                <section className=' justify-content-center justify-content-lg-between p-4 square border border-success'>

                    <div className='text-center text-dark'>
                        <Link to={""} className='me-4 text-reset'>
                            <FacebookIcon style={{ color: "#2E7D32" }}/>
                        </Link>
                        <Link to={""} className='me-4 text-reset'>
                            <GoogleIcon style={{ color: "#2E7D32" }}/>
                        </Link>
                        <Link to={""} className='me-4 text-reset'>
                            <InstagramIcon style={{ color: "#2E7D32" }}/>
                        </Link>
                        <Link to={""} className='me-4 text-reset'>
                            <LinkedInIcon style={{ color: "#2E7D32" }}/>
                        </Link>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5 text-dark '>
                        <MDBRow className='mt-3'>
                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>

                                <img src={Logo1} className='img-fluid ' alt='...' />
                            </MDBCol>

                            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 ' style={{ color: "#2E7D32" }}>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Groom Outfits
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Bride Outfits
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Page Boys
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Flower Girls
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4' style={{ color: "#2E7D32" }}>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        FAQ
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Try Outfit
                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'style={{ color: "#2E7D32" }}>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <HomeIcon style={{ color: "#2E7D32" }} className='me-2' />
                                    Sri Kula Medura, Rathnapura
                                </p>
                                <p>
                                    <EmailIcon style={{ color: "#2E7D32" }} className='me-3' />
                                    srikulamedura@gmail.com
                                </p>
                                <p>
                                    <PhoneIcon style={{ color: "#2E7D32" }} className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <FaxIcon style={{ color: "#2E7D32" }} className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: '#97c8bc' ,color: "#2E7D32"  }}>
                    Copyright @ 2023 Sri Kula Medura | All Rights Reserved.
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    );
};

export default Footer;