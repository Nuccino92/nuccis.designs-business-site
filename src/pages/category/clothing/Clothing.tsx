import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";

// photo gallery images
import p1 from "../images/clothing/1.jpg";
import p2 from "../images/clothing/2.jpg";
import p3 from "../images/clothing/3.jpg";
import p4 from "../images/clothing/4.jpg";
import p5 from "../images/clothing/5.jpg";
import p6 from "../images/clothing/6.jpg";
import p7 from "../images/clothing/7.jpg";
import p8 from "../images/clothing/8.jpg";
import p9 from "../images/clothing/9.jpg";
import p10 from "../images/clothing/10.jpg";
import p11 from "../images/clothing/11.jpg";
import p12 from "../images/clothing/12.jpg";
import p13 from "../images/clothing/13.jpg";
import p14 from "../images/clothing/14.jpg";
import p15 from "../images/clothing/15.jpg";
import p16 from "../images/clothing/16.jpg";
import p17 from "../images/clothing/17.jpg";
import p18 from "../images/clothing/18.jpg";
import p19 from "../images/clothing/19.jpg";
import p20 from "../images/clothing/20.jpg";
import p21 from "../images/clothing/21.jpg";
import p22 from "../images/clothing/22.jpg";
import p23 from "../images/clothing/23.jpg";
import p24 from "../images/clothing/24.jpg";
import p25 from "../images/clothing/25.jpg";
import p26 from "../images/clothing/26.jpg";
import p27 from "../images/clothing/27.jpg";
import p28 from "../images/clothing/28.jpg";
import p29 from "../images/clothing/29.jpg";
import p30 from "../images/clothing/30.jpg";
import p31 from "../images/clothing/31.jpg";
import p32 from "../images/clothing/32.jpg";
import p33 from "../images/clothing/33.jpg";
import p34 from "../images/clothing/34.jpg";
import p35 from "../images/clothing/35.jpg";
import p36 from "../images/clothing/36.jpg";

const Clothing: React.FC = () => {
  return (
    <Container className="Category">
      <Helmet>
        <title>nuccis designs | Clothing</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Clothing</h1>
          <a
            href="https://www.instagram.com/stories/highlights/18091097011242441/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StoryButton>Instagram Stories</StoryButton>
          </a>
          <ListGroup>
            <h3>Some Clothing products that I specialize in</h3>
            <Row>
              <Col>
                <ListGroup.Item>Sweaters</ListGroup.Item>
                <ListGroup.Item>T-Shirts</ListGroup.Item>
                <ListGroup.Item>Hoodies</ListGroup.Item>
                <ListGroup.Item>Track Pants</ListGroup.Item>
                <ListGroup.Item>Hats</ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item>Masks</ListGroup.Item>
                <ListGroup.Item>Cotton Tote Bags</ListGroup.Item>
                <ListGroup.Item>Bandanas</ListGroup.Item>
                <ListGroup.Item>Cotton Backpacks</ListGroup.Item>
                <ListGroup.Item>Cotton Socks</ListGroup.Item>
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
              <img src={p32} alt=""></img>
              <img src={p19} alt=""></img>
              <img src={p36} alt=""></img>
              <img src={p20} alt=""></img>
              <img src={p21} alt=""></img>
              <img src={p22} alt=""></img>
            </Col>
            <Col>
              <img src={p7} alt=""></img>
              <img src={p8} alt=""></img>
              <img src={p6} alt=""></img>
              <img src={p10} alt=""></img>
              <img src={p11} alt=""></img>
              <img src={p18} alt=""></img>
              <img src={p33} alt=""></img>
              <img src={p23} alt=""></img>
              <img src={p24} alt=""></img>
              <img src={p25} alt=""></img>
              <img src={p26} alt=""></img>
              <img src={p27} alt=""></img>
            </Col>
            <Col>
              <img src={p9} alt=""></img>
              <img src={p14} alt=""></img>
              <img src={p35} alt=""></img>
              <img src={p15} alt=""></img>
              <img src={p16} alt=""></img>
              <img src={p12} alt=""></img>
              <img src={p17} alt=""></img>
              <img src={p34} alt=""></img>
              <img src={p28} alt=""></img>
              <img src={p29} alt=""></img>
              <img src={p30} alt=""></img>
              <img src={p31} alt=""></img>
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

export default Clothing;
