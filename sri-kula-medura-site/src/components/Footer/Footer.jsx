import Logo1 from "../../assets/logos/Logo1.png"
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
    return (
        <MDBFooter bgColor='' className='text-center text-lg-start text-muted'>
            <div class='footerbody'>
                <section className=' justify-content-center justify-content-lg-between p-4 square border border-success'>

                    <div className='text-center text-dark'>
                        <a href='' className='me-4 text-reset '>
                            <MDBIcon style={{ color: "#2E7D32" }} fab icon='facebook-f' />
                        </a>
                        <a href='' className='me-4 text-reset' style={{color:"red !important"}}>
                            <MDBIcon  style={{ color: "#2E7D32" }} fab icon='google' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon style={{ color: "#2E7D32" }} fab icon='instagram' />
                        </a>
                        <a href='' className='me-4 text-reset'>
                            <MDBIcon style={{ color: "#2E7D32" }} fab icon='linkedin' />
                        </a>
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
                                    <MDBIcon style={{ color: "#2E7D32" }} icon='home' className='me-2' />
                                    Sri Kula Medura, Rathnapura
                                </p>
                                <p>
                                    <MDBIcon style={{ color: "#2E7D32" }} icon='envelope' className='me-3' />
                                    srikulamedura@gmail.com
                                </p>
                                <p>
                                    <MDBIcon style={{ color: "#2E7D32" }} icon='phone' className='me-3' /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon style={{ color: "#2E7D32" }} icon='print' className='me-3' /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: '#97c8bc' ,color: "#2E7D32"  }}>
                    Copyright @ 2023 Sri Kula Medura | All Rights Reserved.
                </div>
            </div>
        </MDBFooter>

    );
}
export default Footer;