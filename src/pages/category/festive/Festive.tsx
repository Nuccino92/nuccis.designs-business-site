import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";
import StoryButton from "../../../styledComponents/StoryButton.styled";

// photo gallery images
import p1 from "../images/festive/1.jpg";
import p2 from "../images/festive/2.jpg";
import p3 from "../images/festive/3.jpg";
import p4 from "../images/festive/4.jpg";
import p5 from "../images/festive/5.jpg";
import p6 from "../images/festive/6.jpg";
import p7 from "../images/festive/7.jpg";
import p8 from "../images/festive/8.jpg";
import p9 from "../images/festive/9.jpg";
import p10 from "../images/festive/10.jpg";
import p11 from "../images/festive/11.jpg";
import p12 from "../images/festive/12.jpg";
import p13 from "../images/festive/13.jpg";
import p14 from "../images/festive/14.jpg";
import p15 from "../images/festive/15.jpg";
import p16 from "../images/festive/16.jpg";
import p17 from "../images/festive/17.jpg";
import p18 from "../images/festive/18.jpg";
import p19 from "../images/festive/19.jpg";
import p20 from "../images/festive/20.jpg";
import p21 from "../images/festive/21.jpg";
import p22 from "../images/festive/22.jpg";
import p23 from "../images/festive/23.jpg";
import p24 from "../images/festive/24.jpg";
import p25 from "../images/festive/25.jpg";

const Festive: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Festive</h1>
          <Container>
            <a
              href="https://www.instagram.com/stories/highlights/18120839956155728/?hl=en"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0px 5px" }}
            >
              <StoryButton>Chirstmas Instagram Stories</StoryButton>
            </a>
            <a
              href="https://www.instagram.com/stories/highlights/18188296660111565/?hl=en"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0px 5px" }}
            >
              <StoryButton>Fall Instagram Stories</StoryButton>
            </a>
          </Container>
        </header>
        <Container className="Category-image-container">
          <h4>Photo Gallery</h4>
          <Row>
            <Col>
              <img src={p4} alt=""></img>
              <img src={p2} alt=""></img>
              <img src={p3} alt=""></img>
              <img src={p1} alt=""></img>
              <img src={p5} alt=""></img>
              <img src={p13} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p20} alt=""></img>
            </Col>
            <Col>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p25} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p21} alt=""></img>
              <img src={p24} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p17} alt=""></img>
              <img src={p22} alt=""></img>
              <img src={p23} alt=""></img>
            </Col>
          </Row>
        </Container>
      </Fade>
      <a
        href="https://www.facebook.com/nuccis.designs/photos/?ref=page_internal"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookReviewButton> View More </FacebookReviewButton>
      </a>
    </Container>
  );
};

export default Festive;
