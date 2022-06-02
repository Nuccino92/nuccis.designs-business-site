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
    </Container>
  );
};

export default HomepageContact;
