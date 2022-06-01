import { Helmet } from "react-helmet-async";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";
import StoryButton from "../../../styledComponents/StoryButton.styled";
import { Fade } from "react-awesome-reveal";

// photo gallery images
import p1 from "../images/pets/1.jpg";
import p2 from "../images/pets/2.jpg";
import p3 from "../images/pets/3.jpg";
import p4 from "../images/pets/4.jpg";
import p5 from "../images/pets/5.jpg";
import p6 from "../images/pets/6.jpg";
import p7 from "../images/pets/7.jpg";
import p8 from "../images/pets/8.jpg";
import p9 from "../images/pets/9.jpg";
import p10 from "../images/pets/10.jpg";
import p11 from "../images/pets/11.jpg";
import p12 from "../images/pets/12.jpg";
import p13 from "../images/pets/13.jpg";
import p14 from "../images/pets/14.jpg";
import p15 from "../images/pets/15.jpg";
import p16 from "../images/pets/16.jpg";
import p17 from "../images/pets/17.jpg";
import p18 from "../images/pets/18.jpg";
import p19 from "../images/pets/19.jpg";
import p20 from "../images/pets/20.jpg";
import p21 from "../images/pets/21.jpg";
import p22 from "../images/pets/22.jpg";

const Pets: React.FC = () => {
  return (
    <Container className="Category">
      <Helmet>
        <title>nuccis designs | Pets</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Pets</h1>
          <a
            href="https://www.instagram.com/stories/highlights/18071761879208801/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StoryButton>Instagram Stories</StoryButton>
          </a>
          <ListGroup>
            <h3>Some Pet products that I specialize in</h3>
            <Row>
              <Col>
                <ListGroup.Item>Dog Shirts</ListGroup.Item>
                <ListGroup.Item>Dog Sweaters</ListGroup.Item>
                <ListGroup.Item>Pet Mugs</ListGroup.Item>
                <ListGroup.Item>Pet Tote Bags</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item>Customized Pet Bowls</ListGroup.Item>
                <ListGroup.Item>Bandanas</ListGroup.Item>
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
              <img src={p17} alt=""></img>
              <img src={p18} alt=""></img>
            </Col>
            <Col>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p20} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p21} alt=""></img>
              <img src={p22} alt=""></img>
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

export default Pets;
