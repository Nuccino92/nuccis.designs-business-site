import { Fade } from "react-awesome-reveal";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";

// photo gallery images
import p1 from "../images/children/1.jpg";
import p2 from "../images/children/2.jpg";
import p3 from "../images/children/3.jpg";
import p4 from "../images/children/4.jpg";
import p5 from "../images/children/5.jpg";
import p6 from "../images/children/6.jpg";
import p7 from "../images/children/7.jpg";
import p8 from "../images/children/8.jpg";
import p9 from "../images/children/9.jpg";
import p10 from "../images/children/10.jpg";
import p11 from "../images/children/11.jpg";
import p12 from "../images/children/12.jpg";
import p13 from "../images/children/13.jpg";
import p14 from "../images/children/14.jpg";
import p15 from "../images/children/15.jpg";
import p16 from "../images/children/16.jpg";
import p17 from "../images/children/17.jpg";
import p18 from "../images/children/18.jpg";
import p19 from "../images/children/19.jpg";
import p20 from "../images/children/20.jpg";
import p21 from "../images/children/21.jpg";

const Childern: React.FC = () => {
  return (
    <Container className="Category">
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Children</h1>
          <a
            href="https://www.instagram.com/stories/highlights/18140370085142113/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StoryButton>Instagram Stories</StoryButton>
          </a>
          <ListGroup>
            <h3>Some Child products that I specialize in</h3>
            <Row>
              <Col>
                <ListGroup.Item>Kids Shirts</ListGroup.Item>
                <ListGroup.Item>Kids Sweaters</ListGroup.Item>
                <ListGroup.Item>Kids Masks</ListGroup.Item>
                <ListGroup.Item>
                  Customized Keepsakes (Teddy Bears / Unicorns)
                </ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item>Growth Charts</ListGroup.Item>
                <ListGroup.Item>Customized Lunch Bags / Boxes</ListGroup.Item>
                <ListGroup.Item>Blankets</ListGroup.Item>
                <ListGroup.Item>Pillows</ListGroup.Item>
              </Col>
            </Row>
          </ListGroup>
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
            </Col>
            <Col>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p20} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p17} alt=""></img>
              <img src={p21} alt=""></img>
            </Col>
          </Row>
        </Container>
        <a
          href="https://www.facebook.com/nuccis.designs/photos/?ref=page_internal"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookReviewButton> View More </FacebookReviewButton>
        </a>
      </Fade>
    </Container>
  );
};

export default Childern;
