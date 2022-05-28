import { Helmet } from "react-helmet-async";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row } from "react-bootstrap";
import FacebookReviewButton from "../../../styledComponents/FacebookReviewButton.styled";

// photo gallery images
import p1 from "../images/signs/1.jpg";
import p2 from "../images/signs/2.jpg";
import p3 from "../images/signs/3.jpg";
import p4 from "../images/signs/4.jpg";
import p5 from "../images/signs/5.jpg";
import p6 from "../images/signs/6.jpg";
import p7 from "../images/signs/7.jpg";
import p8 from "../images/signs/8.jpg";
import p9 from "../images/signs/9.jpg";
import p10 from "../images/signs/10.jpg";
import p11 from "../images/signs/11.jpg";
import p12 from "../images/signs/12.jpg";
import p13 from "../images/signs/13.jpg";
import p14 from "../images/signs/14.jpg";
import p15 from "../images/signs/15.jpg";
import p16 from "../images/signs/16.jpg";
import p17 from "../images/signs/17.jpg";
import p18 from "../images/signs/18.jpg";
import p19 from "../images/signs/19.jpg";
import p20 from "../images/signs/20.jpg";
import p21 from "../images/signs/21.jpg";
import p22 from "../images/signs/22.jpg";
import p23 from "../images/signs/23.jpg";
import p24 from "../images/signs/24.jpg";
import p25 from "../images/signs/25.jpg";
import p26 from "../images/signs/26.jpg";
import p27 from "../images/signs/27.jpg";
import p28 from "../images/signs/28.jpg";
import p29 from "../images/signs/29.jpg";
import p30 from "../images/signs/30.jpg";
import p31 from "../images/signs/31.jpg";
import p32 from "../images/signs/32.jpg";
import p33 from "../images/signs/33.jpg";
import p34 from "../images/signs/34.jpg";
import p35 from "../images/signs/35.jpg";
import p36 from "../images/signs/36.jpg";

const Signs: React.FC = () => {
  return (
    <Container className="Category">
      <Helmet>
        <title>nuccis designs | Signs</title>
        <meta
          name="description"
          content="For all you customized product needs! - Anything you want, we have!"
        ></meta>
      </Helmet>
      {/* @ts-ignore: Unreachable code error  */}
      <Fade triggerOnce>
        <header>
          <h1>Signs</h1>
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

export default Signs;
