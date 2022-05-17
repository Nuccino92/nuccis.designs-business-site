import { Nav, Navbar as BoostrapNavbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <BoostrapNavbar className="Navbar">
      <Container>
        <Link to="/" className="Navbar-Logo">
          Nuccis Designs
        </Link>
        <Nav>
          <Link to="/services">SERVICES</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/aboutme">ABOUT ME</Link>
          <Link to="/clients">CLIENTS</Link>
        </Nav>
      </Container>
    </BoostrapNavbar>
  );
};

export default Navbar;
