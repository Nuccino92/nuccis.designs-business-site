import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";
import facebookLogo from "./images/facebook-logo.png";
import instagramLogo from "./images/instagram-logo.png";

const Footer: React.FC = () => {
  return (
    <Navbar className="Footer">
      <Nav>
        <h4>CONNECT</h4>
        <Nav.Link href={process.env.REACT_APP_INSTAGRAM} target="_blank">
          Instagram
        </Nav.Link>
        <Nav.Link href={process.env.REACT_APP_FACEBOOK} target="_blank">
          Facebook
        </Nav.Link>
        <address>
          <Nav.Link href={`mailto:${process.env.REACT_APP_EMAIL}`}>
            {process.env.REACT_APP_EMAIL}
          </Nav.Link>
        </address>
        <p> {process.env.REACT_APP_PHONE}</p>
      </Nav>
      <Nav>
        <h4>STORE POLICIES</h4>
        <Link to="productdelivery">Delivery</Link>
        <Link to="payments-policy">Payment</Link>
        <Link to="payments-policy">Refunds</Link>
      </Nav>
      <Nav>
        <h4>QUICK LINKS</h4>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/aboutme">About Me</Link>
        <Link to="/clients">Clients</Link>
      </Nav>
      <Nav className="Footer-socials">
        <h4>SOCIALS</h4>
        <Container>
          <Nav.Link
            href={process.env.REACT_APP_INSTAGRAM}
            target="_blank"
            style={{ marginRight: "6px" }}
          >
            <img src={instagramLogo} alt="Instagram Logo" />
          </Nav.Link>
          <Nav.Link href={process.env.REACT_APP_FACEBOOK} target="_blank">
            <img src={facebookLogo} alt="Facebook Logo" />
          </Nav.Link>{" "}
        </Container>
      </Nav>
      <span> © Copyright 2022 - nuccis designs</span>
    </Navbar>
  );
};

export default Footer;
