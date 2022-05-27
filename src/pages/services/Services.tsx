import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServicesCategories from "../../components/services/serviceCategories/ServicesCategories";
import "./Services.scss";
import { Fade } from "react-awesome-reveal";

const Services: React.FC = () => {
  return (
    <Container className="Services">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade>
        <Container>
          <h1>About My Services</h1>
          <p>
            Nuccis Designs provides customers the ability to fully customize a
            large number of products to fit their needs. I love making your
            order, and I'm extremely happy to work with or assist you in any of
            your designs. To fully accommodate our customers, we offer a rush
            service to make sure you're able to get what you need when you need
            it. If you're interested in creating a product or wish to ask
            questions please{" "}
            <span>
              <Link to="/contact">click here.</Link>
            </span>
          </p>
          <Row>
            <Col>
              <h4>Links to answer a few of your questions </h4>
            </Col>
            <Col>
              <Link to="/payments-policy">Payments</Link>
              <Link to="/payments-policy">Refund Policy</Link>
              <Link to="/productdelivery">Product Delivery</Link>
              <Link to="/payments-policy">Returns / Changes</Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                To move forward or if you have any other questions visit{" "}
                <Link to="/contact">Contact Page</Link>
              </h4>
            </Col>
          </Row>
        </Container>
      </Fade>

      <ServicesCategories />
    </Container>
  );
};

export default Services;
