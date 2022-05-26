import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import FacebookReviewButton from "../../styledComponents/FacebookReviewButton.styled";
import StoryButton from "../../styledComponents/StoryButton.styled";
import "./Clients.scss";

import p1 from "./images/1.jpg";
import p2 from "./images/2.jpg";
import p3 from "./images/3.jpg";
import p4 from "./images/4.jpg";
import p5 from "./images/5.jpg";
import p6 from "./images/6.jpg";
import p7 from "./images/7.jpg";
import p8 from "./images/8.jpg";
import p9 from "./images/9.jpg";
import p10 from "./images/10.jpg";
import p11 from "./images/11.jpg";
import p12 from "./images/12.jpg";
import p13 from "./images/13.jpg";
import p14 from "./images/14.jpg";
import p15 from "./images/15.jpg";
import p16 from "./images/16.jpg";
import p17 from "./images/17.jpg";
import p18 from "./images/18.jpg";
import p19 from "./images/19.jpg";
import p20 from "./images/20.jpg";

const Clients: React.FC = () => {
  return (
    <Container className="Clients">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Customers</h1>
          <p>
            Take a look at some of my customers or read customer reviews on
            Facebook!
          </p>
          <Container>
            <a
              href="https://www.instagram.com/stories/highlights/17845835246210017/?hl=en"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0px 5px" }}
            >
              <StoryButton>View Instagram Stories</StoryButton>
            </a>
            <a
              href="https://www.facebook.com/nuccis.designs/reviews/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookReviewButton>Read Facebook Reviews</FacebookReviewButton>
            </a>
          </Container>
        </header>
        <Container className="Client-image-container">
          <h4>Photo Gallery</h4>
          <Row>
            <Col>
              <img src={p1} alt=""></img>
              <img src={p2} alt=""></img>
              <img src={p3} alt=""></img>
              <img src={p4} alt=""></img>
              <img src={p5} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p7} alt=""></img>
            </Col>
            <Col>
              <img src={p8} alt=""></img>
              <img src={p9} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p13} alt=""></img>
            </Col>
            <Col>
              <img src={p16} alt=""></img>
              <img src={p17} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p20} alt=""></img>
              <img src={p14} alt=""></img>
            </Col>
          </Row>
        </Container>
      </Fade>
    </Container>
  );
};

export default Clients;
