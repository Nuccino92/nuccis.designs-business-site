import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomepageClients.scss";
import ClientsPhoto from "./images/clients.jpg";

const HomepageClients = () => {
  return (
    <Container className="HomepageClients">
      {/*  @ts-expect-error: */}
      <Fade triggerOnce duration={2000}>
        <Row>
          <Col>
            <Link to="/clients">Customers / Reviews</Link>
            <p>
              I take pride in helping people and ensuring the receive my best.
              Take a look at some satisfied customers or read reviews over at
              the customer page.
            </p>
            <button>
              <Link to="/clients">Customers</Link>
            </button>
          </Col>
          <Col>
            <img
              src={ClientsPhoto}
              alt="Clients holding up products made for them"
            ></img>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default HomepageClients;
