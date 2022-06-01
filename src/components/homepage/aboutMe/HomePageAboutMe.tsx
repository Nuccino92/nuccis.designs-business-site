import "./HomepageAboutMe.scss";
import { Col, Container, Row } from "react-bootstrap";
import MyPicture from "./images/Me.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const HomepageAboutMe = () => {
  return (
    <Container className="HomepageAboutMe">
      {/*  @ts-expect-error: */}
      <Fade triggerOnce duration={2000}>
        <Row>
          <Col>
            <img src={MyPicture} alt="Me"></img>
          </Col>
          <Col>
            <Link to="/aboutme">Get to know me</Link>
            <p>
              I'm passionate about what I do. If you wish to know a little bit
              about me or my story, head over to my about me page!
            </p>
            <button>
              <Link to="/aboutme">About Me</Link>
            </button>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default HomepageAboutMe;
