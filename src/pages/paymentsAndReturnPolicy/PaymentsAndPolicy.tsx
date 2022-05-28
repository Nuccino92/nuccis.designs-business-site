import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import "./PaymentsAndPolicy.scss";

const PaymentsAndPolicy: React.FC = () => {
  return (
    <Container className="PaymentsAndPolicy">
      <Helmet>
        <title>nuccis designs | Payments & Policy</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <h1>Payments and Policy</h1>
        <Row>
          <Col>
            <h4>How do I pay for your services?</h4>
            <p>
              Payments are to be made via e-Transfer. Once full payment has been
              made, your order will then be processed.
            </p>
          </Col>
          <Col>
            <h4>Can I get a refund once payment has been made?</h4>
            <p>
              Once we receive payment your order is then processed and will be
              non-refundable.
            </p>
          </Col>
          <Col>
            <h4>
              Am I able to change the product after the product is customized?
            </h4>
            <p>
              Once the product is customized you won't be able to make any
              anymore changes. If absolutely necessary changing the product will
              require an additional charge pending on if your request is able to
              be done.
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default PaymentsAndPolicy;
