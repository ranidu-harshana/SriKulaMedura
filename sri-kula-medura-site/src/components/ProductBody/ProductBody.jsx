import React from'react';
import './ProductBody.css';
import {Col, Container, Row} from "react-bootstrap";
import {Stack} from "@mui/material";
// import {Button, Container, Nav, Navbar, Form} from "react-bootstrap";
import tShirt1 from '../../assets/Product/t1.jpeg';
import tShirt2 from '../../assets/Product/t2.jpeg';
import tShirt3 from '../../assets/Product/t3.jpeg';
import tShirt5 from '../../assets/Product/t5.jpeg';

const ProductNav = (props) => {
    return (
        <>
            <section id="timeline">
                <Container>
                    <div className="row">
                        <div className="col-md-4 d-none d-md-block " id="filter-section">
                            <div className="card mt-5 position-fixed" style={{height: '88vh',width: '17%'}}>
                                <div className="card-body bg-white ">
                                    <div className="mt-1">
                                        <div className="row">
                                            <Stack direction="horizontal" gap={2}>
                                                <div className="">
                                                    <h5 className="font-weight-bold font-weight-bold text-muted">Filters</h5>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="form-group">
                                                        <a href="#" className="text-danger text-decoration-none fw-bold">Reset All</a>
                                                    </span>
                                                </div>
                                            </Stack>
                                        </div>
                                    </div>
                                    <div>
                                        <form action="">
                                            <div className="form-group">
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3">Size</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>XS</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3">Color</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>Black</option>
                                                    <option>White</option>
                                                    <option>Green</option>
                                                    <option>Pink</option>
                                                    <option>Yellow</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3">Pattern</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Solid</option>
                                                    <option>Floral</option>
                                                    <option>Striped</option>
                                                    <option>Geometric</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3">Sleeve Length</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Sleeveless</option>
                                                    <option>Short Sleeve</option>
                                                    <option>Long Sleeve</option>
                                                    <option>3/4 Sleeve</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3">Material</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Cotton</option>
                                                    <option>Polyester</option>
                                                    <option>Lace</option>
                                                    <option>Chiffon</option>
                                                </select>
                                            </div>
                                            <div className="mt-4">
                                                <button className="btn btn-lg btn-success w-100" type="button" >Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8" id="post-section" style={{marginLeft:'26%',width: '74%'}}>
                            <div id="TopNavigation">
                                <div className="imageBack mt-5 mb-2">
                                    <div className="card">
                                        <Stack direction="horizontal" gap={2}>
                                            <div className="p-2">Category > Dress > T-Shirt </div>
                                            <div className="p-2 ms-auto"><a href="" className="">Add to wishlist 🖤</a> </div>
                                        </Stack>
                                    </div>
                                </div>
                            </div>

                            <div className="postButtonSec my-2">
                                <div className="card roundedBox">
                                    <div className="card-body text-center">
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <img src={tShirt1} className="img-fluid"/>
                                                </Row>
                                                <Row className="mt-4">
                                                    <Stack direction="horizontal" gap={4}>
                                                        <div className="">
                                                            <img src={tShirt2} className="img-fluid"/>
                                                        </div>
                                                        <div className="">
                                                            <img src={tShirt3} className="img-fluid"/>
                                                        </div>
                                                        <div className="">
                                                            <img src={tShirt3} className="img-fluid"/>
                                                        </div>
                                                        <div className="">
                                                            <img src={tShirt5} className="img-fluid"/>
                                                        </div>
                                                    </Stack>
                                                </Row>
                                                <Row className="mt-4">
                                                    <div className="card w-100 py-3" style={{backgroundColor:'#e3e3e3'}}>
                                                        Try Out Our New Option
                                                        <button className="mt-2 btn btn-lg TopButtons text-white btn-danger" data-toggle="modal" data-target="#needHelpModal">
                                                            <i className="fas fa-tools mr-2"></i> VR for Suit
                                                        </button>
                                                    </div>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <h3 style={{textAlign:'left'}}>
                                                        Royal Blue and Navy Blue Sports T Shirt for Men Women
                                                    </h3>
                                                    <ul style={{textAlign:'left', marginLeft:'5%'}}>
                                                        <li>Product : Royal Blue & Navy Blue Men’s Sports T-Shirt</li>
                                                        <li>Brand : OXYGEN SPORTS</li>
                                                        <li>Style : Crew Neck – Short Sleeve</li>
                                                        <li>Colour : Royal Blue & Navy Blue</li>
                                                        <li>Material : Dri-Fit – 95% Polyester Microfiber, 5% Spandex</li>
                                                        <li>Thickness : 150 – 160 GSM</li>
                                                        <li>Size Range : XS – XXL</li>
                                                        <li>Quality Standards : 100% QC Passed. Export Ready.</li>
                                                        <li>Specialities : Lightweight, Moisture-Wicking, Wrinkle Free, Anti-Shrink, Quick-Dry Performance. </li>
                                                        <li>Warranty : 14 Day Easy Returns & Size Exchanges.</li>
                                                        <li>Delivery : Estimated 1-3 Working Days within Colombo & Suburbs. 3-5 Working Days Outstation.</li>
                                                        <li>Payment Options : Card or Cash on Delivery at Checkout.</li>
                                                        <li>A Genuine Product. Made in Sri Lanka.</li>
                                                    </ul>
                                                    <br/><hr/>
                                                    <button style={{marginLeft:'3%'}} className="btn btn-md text-white ml-3 bg-warning w-50" data-toggle="modal" data-target="#feedbackModal" >
                                                        <i className="fas fa-grin-stars mr-2"></i> Size Chart
                                                    </button>
                                                    <small style={{textAlign:'left'}} className="fw-bold my-2">Size : Choose an option</small>
                                                    <Stack direction="horizontal" gap={2} >
                                                        <div className="p-3 btn" id="size_option">XS</div>
                                                        <div className="p-3 btn" id="size_option">S</div>
                                                        <div className="p-3 btn" id="size_option">M</div>
                                                        <div className="p-3 btn" id="size_option">L</div>
                                                        <div className="p-3 btn" id="size_option">XL</div>
                                                    </Stack>
                                                    <small style={{textAlign:'left'}} className="fw-bold mt-3 mb-2">Quantity</small>
                                                    {/*<CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} />*/}
                                                    <Stack direction="horizontal" gap={1} className="my-3">
                                                        <div className="" id="qty_option">+</div>
                                                        <div>
                                                            <input type="text" className="w-25" style={{marginLeft:'-76%'}}/>
                                                        </div>
                                                        <div className="" id="qty_option" style={{marginLeft:'-35%'}}>-</div>
                                                    </Stack>
                                                    <Stack direction="horizontal" gap={2} className="my-3">
                                                        <div>
                                                            <button className="btn btn-lg btn-warning">Buy Now</button>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-lg btn-success">Add to Cart</button>
                                                        </div>
                                                    </Stack>
                                                    <hr/>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>




                                <div className="d-md-none bg-white rounded">
                                    <div className="card">
                                        <div className="text-center">


                                            <button className="btn btn-sm" onClick="openNav()">
                                                <i className="fas fa-filter text-right"></i> Filter Post
                                            </button>

                                        </div>
                                    </div>
                                </div>




                                <div id="mySidenav" className="sidenav d-lg-none">
                                    <button type="button" className="closebtn btn mt-5" onClick="closeNav()">&times;</button>

                                    <div className="ml-4 mt-4">
                                        <form action="">


                                            <div className="form-group" style={{width: '85%;'}}>
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3"> Vehicle Type</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Car</option>
                                                    <option>Bus</option>
                                                    <option>Van</option>
                                                    <option>Bicycle</option>
                                                </select>
                                            </div>


                                            <div className="form-group" style={{width: '85%;'}}>
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3"> Province</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Western Province</option>
                                                    <option>Eastern Province</option>
                                                    <option>North Province</option>
                                                    <option>South Province</option>
                                                </select>
                                            </div>


                                            <div className="form-group" style={{width: '85%;'}}>
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3"> District</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Colombo</option>
                                                    <option>Gampaha</option>
                                                    <option>Kalutara</option>
                                                </select>
                                            </div>


                                            <div className="form-group" style={{width: '85%;'}}>
                                                <label>
                                                    <h6 className="font-weight-bold text-muted mt-3"> City</h6>
                                                </label>
                                                <select id="inputState" className="form-control">
                                                    <option selected>Choose...</option>
                                                    <option>Kaduwela</option>
                                                    <option>Hanwella</option>
                                                    <option>Malabe</option>
                                                    <option>Angoda</option>
                                                </select>
                                            </div>

                                        </form>
                                    </div>


                                    <div className="text-right mr-2">
                                        <button className="btn btn-md btn-danger mr-1" type="reset">
                                            Reset All
                                        </button>
                                        <button className="btn btn-md btn-success mr-5" type="button">
                                            Search
                                        </button>
                                    </div>
                                </div>


                                <div className="my-2">
                                    <div className="card roundedBox">
                                        <div className="container mt-2">

                                            <div className="d-flex">
                                                <div>
                                                    {/*<img className="mr-2 rounded-circle userProfImg" src="img/pro.png" alt="profile_name"/>*/}
                                                </div>

                                                <div>
                                                    <div className="userTopName">
                                                        Sachindu Malshan <i className="fas fa-circle yellowState"></i><br />
                                                        5h ago
                                                    </div>
                                                </div>


                                                <div className="ml-auto">
                                                    <div className="dropdown">

                                                        <button className="btn btn-sm dotIcon" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fas fa-ellipsis-h" style={{verticalAlign: 'top'}}></i>
                                                        </button>

                                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" >
                                                            <a className="dropdown-item" href="#" ><i className="fas fa-pen mr-2"></i> Edit Post</a>
                                                            <a className="dropdown-item" href="#" ><i className="fas fa-eye-slash mr-2"></i>Hide Post</a>
                                                            <a className="dropdown-item" href="#" ><i className="fas fa-trash mr-2"></i>Delete Post</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <h2 style={{borderLeft: '10px solid yellow'}}>
                                                    <span className="ml-2">Bad Fuel Economy</span>
                                                </h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Laborum, dolorem...see more
                                                </p>
                                            </div>


                                            <div className="mt-4">

                                                <div className="text-muted">
                                                    <span>45 views</span>
                                                    <span className="ml-2">3 comment</span>
                                                </div>

                                                <div className="dropdown-divider"></div>


                                                <div className="row text-center mb-2">
                                                    <div className="col-4">
                                                        <a href="" className="btn btn-sm"><i className="fas fa-eye"></i> view</a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="" className="btn btn-sm"><i className="far fa-comment-dots"></i> comment</a>
                                                    </div>
                                                    <div className="col-4">
                                                        <a href="" className="btn btn-sm"><i className="fa fa-share"></i> share</a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                    </div>
                </Container>
            </section>
        </>
    );
}

export default ProductNav;