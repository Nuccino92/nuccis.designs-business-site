import "./HomepageAboutMe.scss";
import { Col, Container, Row } from "react-bootstrap";
import MyPicture from "./images/Me.jpg";
import { Link } from "react-router-dom";

const HomepageAboutMe = () => {
  return (
    <Container className="HomepageAboutMe">
      <Row>
        <Col>
          <img src={MyPicture} alt="Me blowing out candles"></img>
        </Col>
        <Col>
          <Link to="/aboutme">Get to know me</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default HomepageAboutMe;
