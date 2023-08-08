import React from 'react';
import './Register.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Groom from '../../assets/Register/groom.png';
import Bride from '../../assets/Register/bride.png';


const Test = (props) => {
    return(
        <>
            <container fluid>
                <div className="">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 registerBox position-absolute top-50 start-50 translate-middle">
                            <div className="text-center">
                                <p className="regTitle text-center">REGISTER</p>
                            </div>
                            <div className="registerBox-image">
                                <div>
                                <div style={{position:"absolute",marginLeft:"41%",marginTop:"13%"}}>
                                    <div id="heart" className="scale-in-center" ></div>
                                </div>
                                <div>
                                    <img src={Groom} className="box box1"/>
                                    <img src={Bride} className="box box2"/>
                                </div>
                                </div>
                            </div>
                            <div className="registerBox-form">
                                <hr className="mb-4" style={{backgroundColor:"white",width:"w-100",height:"4px"}}/>
                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                        <Form.Label column sm={4} className="text-white">
                                            Mobile Number
                                        </Form.Label>
                                        <Col sm={8}>
                                            <Form.Control type="text" placeholder="+94 XX XXX XXX" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Col sm={12}>
                                            <Button type="submit" className="bg-white w-100 registerBox-form-text" >SIGN UP</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </container>
        </>
    );
}

export default Test;