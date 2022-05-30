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
      <div className="custom-shape-divider-bottom-1653777637">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default HomepageHeader;
