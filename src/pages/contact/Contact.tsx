import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.scss";
import logo from "./logo.jpg";

const Contact: React.FC = () => {
  return (
    <Container className="Contact">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade>
        <Row>
          <Col>
            <h1>Our Process</h1>
            <p>
              Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
              at interdum magna augue eget diam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
              lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel
              mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
              facilisis laoreet. Donec lacus nunc, viverra nec.
            </p>

            <h4>Links to answer a few of your questions </h4>

            <Link to="/payments-policy">Payments</Link>
            <Link to="/payments-policy">Refuned Policy</Link>
            <Link to="/productdelivery">Product Delivery</Link>
            <Link to="/payments-policy">Returns / Changes</Link>

            <h4>
              If you have any other question you can each me via email at{" "}
              <span>{process.env.REACT_APP_EMAIL}</span> or through the phone at{" "}
              <span>{process.env.REACT_APP_PHONE}</span>
            </h4>
          </Col>
          <Col>
            <img src={logo} alt="Plaque of business information"></img>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Contact;
