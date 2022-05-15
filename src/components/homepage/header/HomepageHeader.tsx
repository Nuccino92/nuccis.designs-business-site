import "./HomepageHeader.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomepageHeader = () => {
  return (
    <Container className="HomepageHeader">
      <h1>Nuccis Designs</h1>
    </Container>
  );
};

export default HomepageHeader;
