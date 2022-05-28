import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductDelivery.scss";

const ProductDelivery: React.FC = () => {
  return (
    <Container className="ProductDelivery">
      <Helmet>
        <title>nuccis designs | Product Delivery</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <h1>Product Delivery</h1>
        <Row>
          <Col>
            <h4>Delivery & Shipping</h4>
            <p>
              We deliver to Toronto, Peel, Simcoe & York Region. Shipping or
              delivering the product is an additional fee.
            </p>
          </Col>
          <Col>
            <h4>Product Pickup</h4>
            <p>
              Pickup locations are in Aurora, ON Sunday through Saturday all
              hours & Vaughan, ON Monday through Friday 9 a.m. - 4 p.m.
            </p>
          </Col>
          <Col>
            <h4>Halfway Service</h4>
            <p>We offer a meet half way delivery service.</p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default ProductDelivery;
