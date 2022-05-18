import "./HomepageHeader.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import cover from "./coverImage.jpg";

const HomepageHeader = () => {
  return (
    <Container className="HomepageHeader">
      <Container>
        <h1>Nuccis Designs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Link to="/services">Services</Link>
      </Container>
      <div className="HomepageHeader-background"></div>
    </Container>
  );
};

export default HomepageHeader;
