import { Button, Container, Nav, Navbar } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav style={{fontWeight:"Bold", marginTop:"10px", color:"white"}}>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="#" className="text-white" >Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="#" className="text-white">About Us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="#" className="text-white">FAQ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mx-2">
                    <Nav.Link href="#">
                      <Button variant="light" size="md" className="rounded-pill button-decoration">Try Outfit</Button>{' '}
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <span style={{color:"white"}}>
                  <PersonIcon className="mx-2" />
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
	);
}

export default TopNav;