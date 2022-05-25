import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

// photo gallery images
import p1 from "../images/invitations/1.jpg";
import p2 from "../images/invitations/2.jpg";
import p3 from "../images/invitations/3.jpg";
import p4 from "../images/invitations/4.jpg";
import p5 from "../images/invitations/5.jpg";
import p6 from "../images/invitations/6.jpg";

const Invitations: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Invitations</h1>
          <a
            href="https://www.instagram.com/stories/highlights/17945693479938281/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StoryButton>Instagram Stories</StoryButton>
          </a>
        </header>
        <Container className="Category-image-container">
          <h4>Photo Gallery</h4>
          <Row>
            <Col>
              <img src={p6} alt=""></img>
              <img src={p3} alt=""></img>
            </Col>
            <Col>
              <img src={p2} alt=""></img>
              <img src={p4} alt=""></img>
            </Col>
            <Col>
              <img src={p1} alt=""></img>
              <img src={p5} alt=""></img>
            </Col>
          </Row>
        </Container>
      </Fade>
    </Container>
  );
};

export default Invitations;
