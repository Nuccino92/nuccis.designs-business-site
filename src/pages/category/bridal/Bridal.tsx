import { Fade } from "react-awesome-reveal";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";

import p1 from "../images/bridal/1.jpg";
import p2 from "../images/bridal/2.jpg";
import p3 from "../images/bridal/3.jpg";
import p4 from "../images/bridal/4.jpg";
import p5 from "../images/bridal/5.jpg";
import p6 from "../images/bridal/6.jpg";
import p7 from "../images/bridal/7.jpg";
import p8 from "../images/bridal/8.jpg";
import p9 from "../images/bridal/9.jpg";
import p10 from "../images/bridal/10.jpg";
import p11 from "../images/bridal/11.jpg";
import p12 from "../images/bridal/12.jpg";
import p13 from "../images/bridal/13.jpg";
import p14 from "../images/bridal/14.jpg";
import p15 from "../images/bridal/15.jpg";
import p16 from "../images/bridal/16.jpg";
import p17 from "../images/bridal/17.jpg";
import p18 from "../images/bridal/18.jpg";
import p19 from "../images/bridal/19.jpg";
import p20 from "../images/bridal/20.jpg";
import p21 from "../images/bridal/21.jpg";
import p22 from "../images/bridal/22.jpg";
import p23 from "../images/bridal/23.jpg";
import p24 from "../images/bridal/24.jpg";
import p25 from "../images/bridal/25.jpg";
import p26 from "../images/bridal/26.jpg";
import p27 from "../images/bridal/27.jpg";
import p28 from "../images/bridal/8.jpg";

const Bridal: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggeronce>
        <header>
          <h1>Bridal</h1>
          <a
            href="https://www.instagram.com/stories/highlights/17889655075582300/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StoryButton>Instagram Stories</StoryButton>
          </a>
          <ListGroup>
            <h3>Some Bridal products that I specialize in</h3>
            <Row>
              <Col>
                <ListGroup.Item>Acrylic Welcome Signs</ListGroup.Item>
                <ListGroup.Item>Acrylic Table Numbers</ListGroup.Item>
                <ListGroup.Item>Acrylic Cake Toppers</ListGroup.Item>
                <ListGroup.Item>Bridal Gift Boxes</ListGroup.Item>
                <ListGroup.Item>Bridal Robes</ListGroup.Item>
                <ListGroup.Item>Bridal Clothing</ListGroup.Item>
              </Col>

              <Col>
                <ListGroup.Item>Bridal Glassware</ListGroup.Item>
                <ListGroup.Item>Bridal Slippers</ListGroup.Item>
                <ListGroup.Item>Bridal Passports</ListGroup.Item>
                <ListGroup.Item>Custom Made Centerpieces</ListGroup.Item>
                <ListGroup.Item>Wedding Countdowns</ListGroup.Item>
              </Col>
            </Row>
          </ListGroup>
        </header>
        <Container className="Category-image-container">
          <h4>Photo Gallery</h4>
          <Row>
            <Col>
              <img src={p23} alt=""></img>
              <img src={p2} alt=""></img>
              <img src={p3} alt=""></img>
              <img src={p1} alt=""></img>
              <img src={p5} alt=""></img>
              <img src={p13} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p20} alt=""></img>
            </Col>
            <Col>
              <img src={p11} alt=""></img>
              <img src={p4} alt=""></img>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p22} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p28} alt=""></img>
              <img src={p21} alt=""></img>
              <img src={p24} alt=""></img>
            </Col>
            <Col>
              <img src={p26} alt=""></img>
              <img src={p25} alt=""></img>
              <img src={p9} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p17} alt=""></img>
              <img src={p27} alt=""></img>
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

export default Bridal;
