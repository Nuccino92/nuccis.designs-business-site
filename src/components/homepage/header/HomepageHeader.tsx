import "./HomepageHeader.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomepageHeader = () => {
  return (
    <Container className="HomepageHeader">
      <Container>
        <h1>nuccis designs</h1>
        <p>Custom designed products that are made for you. </p>
        <Link to="/services">Services</Link>
      </Container>
      <div className="HomepageHeader-background"></div>
    </Container>
  );
};

export default HomepageHeader;
