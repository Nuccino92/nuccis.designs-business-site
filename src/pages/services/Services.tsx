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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla.
          </p>
          <Row>
            <Col>
              <h4>Links to answer a few of your questions </h4>
            </Col>
            <Col>
              <Link to="/payments-policy">Payments</Link>
              <Link to="/payments-policy">Refuned Policy</Link>
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
            <Col></Col>
          </Row>
        </Container>
      </Fade>

      <ServicesCategories />
    </Container>
  );
};

export default Services;
