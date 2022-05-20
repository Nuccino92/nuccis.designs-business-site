import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomepageContact.scss";

const HomepageContact = () => {
  return (
    <Container className="HomepageContact">
      {/*  @ts-expect-error: */}
      <Fade triggerOnce duration={2000}>
        <h2>Get in touch!</h2>
        <p>
          If your interested in my services or have any questions feel free to
          reach out.
        </p>
        <Link to="/contact">
          <button>Contact Page</button>
        </Link>
      </Fade>
      <div className="custom-shape-divider-top-1653000871">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="custom-shape-divider-bottom-1653012324">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
};

export default HomepageContact;
