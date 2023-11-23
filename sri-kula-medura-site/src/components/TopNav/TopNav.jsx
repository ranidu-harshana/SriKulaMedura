import { Button, Container, Nav, Navbar } from "react-bootstrap";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import './TopNav.css';
import logo from '../../assets/logos/srikulaLogo.png';

const TopNav = (props) => {
	return (
		<div className="gradient-custom">
          <Navbar expand="lg" className="pt-2 pb-2 shadow-none" >
            <Container fluid>
              <Navbar.Brand href="#">
                <img src={logo} alt="Logo" width={70} height={'auto'} className="logo-alignment"/>
              </Navbar.Brand>
              <div className="d-lg-none">
                <Button variant="light" size="md" className="button-decoration">Try Outfit</Button>{' '}
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav"> <MenuIcon style={{color:"white"}} /> </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav style={{fontWeight:"Bold", marginTop:"10px", color:"white"}}>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="/" className="text-white" >Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="/skm/aboutus" className="text-white">About Us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="/skm/faq" className="text-white">FAQ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2 d-none d-lg-block">
                    <Nav.Link href="#">
                      <Button variant="light" size="md" className="button-decoration">Try Outfit</Button>{' '}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="/login">
                      <span style={{color:"white"}}>
                         <PersonIcon/>
                         <span className="d-lg-none mx-2">Account</span>
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
	);
}

export default TopNav;