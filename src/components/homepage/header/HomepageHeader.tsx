import "./HomepageHeader.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import slippers from "./images/slippers.jpg";
import teddyBear from "./images/teddy-bear.jpg";

const HomepageHeader = () => {
  return (
    <Container className="HomepageHeader">
      <Container>
        {/*  @ts-expect-error: */}
        <Fade duration={2000} triggerOnce>
          <h1>For all your customized needs! </h1>
          <Link to="/services">Services</Link>
        </Fade>
      </Container>
      <Container className="HomepageHeader-image-container">
        <img
          src={teddyBear}
          alt="Customized teddy bear for a newborn child"
        ></img>
        <img src={slippers} alt="Customized slippers"></img>
      </Container>
      <div className="HomepageHeader-background"></div>
    </Container>
  );
};

export default HomepageHeader;
