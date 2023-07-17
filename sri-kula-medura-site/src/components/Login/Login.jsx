import React from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput} from 'mdb-react-ui-kit';
import accountcircle from "../../assets/Body/accountcircle.png"
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Login.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Login = () => {
    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='p-3 mb-2 bg-success bg-gradient text-white rounded-5 my-5 mx-auto'
                             style={{borderRadius: '1rem', maxWidth: '400px',}}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                            {/*<img src={accountcircle} className='img-fluid ' alt='...' style={{width:"8rem", color:"#ffff"}}/>*/}
                            <AccountCircleIcon style={{
                                fontSize: "100px"
                            }}/>
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address'
                                      id='formControlLg' type='email' size="lg"/>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password'
                                      id='formControlLg' type='password' size="lg"/>

                            <p className="small mb-3 pb-lg-2 text-start"><a class="text-white-50" href="#!">Forgot
                                password?</a></p>
                            <MDBBtn outline className='mx-2  ' color='white' size='lg' rounded>
                                Login
                            </MDBBtn>

                            <div className='d-flex flex-row mt-4 mb-2'>
                                <FacebookIcon style={{color: "#ffff"}}/> &nbsp;
                                <GoogleIcon style={{color: "#ffff"}}/> &nbsp;
                                <InstagramIcon style={{color: "#ffff"}}/> &nbsp;
                                <LinkedInIcon style={{color: "#ffff"}}/> &nbsp;
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;