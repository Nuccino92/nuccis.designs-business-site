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
            <h1>A Little About Me</h1>
            <p>
              Hello, my name is Emily Nucci. I'm currently an Early Childhood
              Educator and Site Director at Montessori. I'm also a huge animal
              lover who has two adorable dogs Casey and Max. Back in 2020 I
              decided to start nuccis designs when the pandemic hit, and it has
              allowed me to connect and work with numerous people in order to
              design a wide variety of fantastic and beautiful things. A year
              later I started a family with my fiance and the two adorable dogs
              when we moved in to our very first home. As time rolls on I hope
              to be able to keep connecting and making products for you!
            </p>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default AboutMe;
