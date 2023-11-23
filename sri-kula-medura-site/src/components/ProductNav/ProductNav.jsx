import React from'react';
import './ProductNav.css';
import {Button, Container, Nav, Navbar, Form} from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";

const ProductNav = (props) => {
    return(
      <>
          <div className="gradient-custom">
              <Navbar expand="lg" className="pt-2 pb-2 shadow-none" >
                  <Container fluid>
                      <Navbar.Toggle aria-controls="basic-navbar-nav"> <MenuIcon style={{color:"white"}} /> </Navbar.Toggle>
                      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start">
                          <Nav style={{fontWeight:"Bold", marginTop:"10px", color:"white"}}>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white" >T-shirt</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Blouse</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Sweater</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Polo shirt</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Hoodie</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Tank top</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Sarong</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Jacket</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="mx-3">
                                  <Nav.Link href="#" className="text-white">Blazer</Nav.Link>
                              </Nav.Item>
                          </Nav>
                          </Navbar.Collapse>
                          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                              <Nav style={{fontWeight:"Bold", marginTop:"2px", color:"white"}}>
                                  <Nav.Item>
                                      <Form className="d-flex">
                                          <Form.Control
                                              type="search"
                                              placeholder="Search"
                                              className="me-2"
                                              aria-label="Search"
                                          />
                                          <Button className="" variant="outline-white">
                                              Search
                                          </Button>
                                      </Form>
                                  </Nav.Item>
                            </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </div>
      </>
    );
}

export default ProductNav;