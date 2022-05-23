import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutMe.scss";
import familyPhoto from "./images/family.jpg";

const AboutMe: React.FC = () => {
  return (
    <Container className="AboutMe">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <Row>
          <Col>
            <div className="frame">
              <img src={familyPhoto} alt="Me and my fiance by our new home" />
            </div>
          </Col>
          <Col>
            <h1>My Story</h1>
            <p>
              Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in
              justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus
              luctus magna. Quisque cursus, metus vitae pharetra auctor, sem
              massa mattis sem, at interdum magna augue eget diam. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.
              Sed non quam. In vel mi sit amet augue congue elementum. Morbi in
              ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra
              nec.
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default AboutMe;
