import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.scss";
import logo from "./logo.jpg";

const Contact: React.FC = () => {
  return (
    <Container className="Contact">
      <Helmet>
        <title>nuccis designs | Contact</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade>
        <Row>
          <Col>
            <h1>Our Process</h1>
            <p>
              If you would like to place an order or get in touch for assistance
              on what you would like done you may send me an email. I will
              respond as soon as possible and then after we can get your order
              ready. Once payment has been made, your order will be processed
              and worked on until completion. Get started by sending an email to{" "}
              <span>{process.env.REACT_APP_EMAIL}</span>.
            </p>

            <ul>
              <h3>Steps</h3>
              <li>1. Contact to create an order</li>
              <li>2. Make payment</li>
              <li>3. The order is processed</li>
              <li>4. Product is delivered</li>
            </ul>

            <h4>Links to answer a few of your questions </h4>

            <Link to="/payments-policy">Payments</Link>
            <Link to="/payments-policy">Refund Policy</Link>
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
