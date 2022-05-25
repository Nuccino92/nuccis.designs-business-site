import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";

// photo gallery images
import p1 from "../images/teacher/1.jpg";
import p2 from "../images/teacher/2.jpg";
import p3 from "../images/teacher/3.jpg";
import p4 from "../images/teacher/4.jpg";
import p5 from "../images/teacher/5.jpg";
import p6 from "../images/teacher/6.jpg";
import p7 from "../images/teacher/7.jpg";
import p8 from "../images/teacher/8.jpg";
import p9 from "../images/teacher/9.jpg";
import p10 from "../images/teacher/10.jpg";
import p11 from "../images/teacher/11.jpg";
import p12 from "../images/teacher/12.jpg";
import p13 from "../images/teacher/13.jpg";
import p14 from "../images/teacher/13.jpg";

const Teacher: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Teacher</h1>
          <a
            href="https://www.instagram.com/stories/highlights/17940300094556524/?hl=en"
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
              <img src={p5} alt=""></img>
              <img src={p4} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p3} alt=""></img>
              <img src={p1} alt=""></img>
            </Col>
            <Col>
              <img src={p2} alt=""></img>
              <img src={p13} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p12} alt=""></img>
            </Col>
          </Row>
        </Container>
        <a
          href="https://www.facebook.com/nuccis.designs/photos/?ref=page_internal"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookReviewButton> View More</FacebookReviewButton>
        </a>
      </Fade>
    </Container>
  );
};

export default Teacher;
