import { Button, Container, Nav, Navbar } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';
import logo from '../../assets/logos/srikulaLogo.png';
import couple from '../../assets/header/couple.png';
import flower from '../../assets/header/flower.png';
import srikulalog2 from '../../assets/header/srikulalogo2.png';

const Header = (props) => {
    return(
        <div className="gradient-custom">
            <Navbar expand="lg" className="pt-2 pb-2" >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="Logo" width={70} height={'auto'} className="logo-alignment"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav style={{fontWeight:"Bold", marginTop:"10px", color:"white"}}>
                            <Nav.Link href="#" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#" className="text-white">About Us</Nav.Link>
                            <Nav.Link href="#" className="text-white">FAQ</Nav.Link>
                            <Nav.Link href="#">
                                <Button variant="light" size="md" className="rounded-pill button-decoration">Try Outfit</Button>{' '}
                            </Nav.Link>
                        </Nav>
                        <span style={{color:"white"}}>
              <PersonIcon className="mx-2" /> |
              <FacebookIcon className="mx-2" />
              <InstagramIcon/>
            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <containor fluid>
                <div className="headerBox" style={{overflow:"hidden"}}>
                    <div className="row" >
                        <div className="col-md-2 d-none d-md-block"></div>
                        <div className="col-md-4 text-center" >
                            <img src={couple} alt="Couple Logo" className="coupleImg img-fluid" />
                        </div>
                        <div className="col-md-4 text-center" >
                            <img src={srikulalog2} alt="Sri Kula Logo 02" className="srikula-logo2 img-fluid d-none d-md-block"/>
                            <p className="text-white fst-italic fs-5 fs-md-6 headtext">
                                "Discover your dream wedding gown without the commitment at our premier wedding dress rental company."
                            </p>
                        </div>
                        <div className="col-md-2 d-none d-md-block"></div>
                    </div>
                    <div className="row">
                        <img src={flower} alt="Flower Pattern" className="flowerimg" width={1920} />
                    </div>
                </div>
            </containor>
        </div>
    )
}

export default Header;