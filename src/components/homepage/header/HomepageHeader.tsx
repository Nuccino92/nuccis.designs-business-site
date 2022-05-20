import "./HomepageHeader.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const HomepageHeader = () => {
  return (
    <Container className="HomepageHeader">
      <Container>
        {/*  @ts-expect-error: */}
        <Fade duration={2000} triggerOnce>
          <h1>nuccis designs</h1>
          <p>Custom designed products that are made for you. </p>
          <Link to="/services">Services</Link>
        </Fade>
      </Container>
      <div className="HomepageHeader-background"></div>
    </Container>
  );
};

export default HomepageHeader;
