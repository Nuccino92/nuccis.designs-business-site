import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomepageClients.scss";
import ClientsPhoto from "./images/clients.jpg";

const HomepageClients = () => {
  return (
    <Container className="HomepageClients">
      <Row>
        <Col>
          <Link to="/clients">Reviews / Clients</Link>
        </Col>
        <Col>
          <img
            src={ClientsPhoto}
            alt="Clients holding up products made for them"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default HomepageClients;
