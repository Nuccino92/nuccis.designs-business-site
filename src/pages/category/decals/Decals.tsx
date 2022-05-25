import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";
import StoryButton from "../../../styledComponents/StoryButton.styled";

// photo gallery images
import p1 from "../images/decals/1.jpg";
import p2 from "../images/decals/2.jpg";
import p3 from "../images/decals/3.jpg";
import p4 from "../images/decals/4.jpg";
import p5 from "../images/decals/5.jpg";
import p6 from "../images/decals/6.jpg";
import p7 from "../images/decals/7.jpg";
import p8 from "../images/decals/8.jpg";
import p9 from "../images/decals/9.jpg";
import p10 from "../images/decals/10.jpg";
import p11 from "../images/decals/11.jpg";
import p12 from "../images/decals/12.jpg";
import p13 from "../images/decals/13.jpg";
import p14 from "../images/decals/14.jpg";
import p15 from "../images/decals/15.jpg";
import p16 from "../images/decals/16.jpg";
import p17 from "../images/decals/17.jpg";
import p18 from "../images/decals/18.jpg";
import p19 from "../images/decals/19.jpg";
import p20 from "../images/decals/20.jpg";
import p21 from "../images/decals/21.jpg";

const Decals: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Decals</h1>
          <a
            href="https://www.instagram.com/stories/highlights/17851097819324004/?hl=en"
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
              <img src={p4} alt=""></img>
              <img src={p2} alt=""></img>
              <img src={p3} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p5} alt=""></img>
              <img src={p13} alt=""></img>
              <img src={p20} alt=""></img>
            </Col>
            <Col>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p21} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p1} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p17} alt=""></img>
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

export default Decals;
