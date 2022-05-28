import { Container, Row, Col } from "react-bootstrap";
import "./HomepageCategories.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// category images
import bridalCover from "../../images/coverImages/bridal.jpg";
import clothingCover from "../../images/coverImages/clothing.jpg";
import homeDecorCover from "../../images/coverImages/homeDecor.jpg";
import invitationCover from "../../images/coverImages/invitation.jpg";
import petCover from "../../images/coverImages/pet.jpg";
import signCover from "../../images/coverImages/sign.jpg";

// view more images
import TeddyBear from "../../images/viewMoreImages/TeddyBear.jpg";
import DogMug from "../../images/viewMoreImages/DogMug.jpg";
import GroomsPackage from "../../images/viewMoreImages/GroomsPackage.jpg";

const HomepageCategories = () => {
  return (
    <Container className="HomepageCategories">
      {/*  @ts-expect-error: */}
      <Fade triggerOnce duration={2000}>
        <h2>Check out some popular product categories</h2>
        <Row>
          <Col>
            <Link to="/services/homedecor">
              <img src={homeDecorCover} alt="Pillows with custom print"></img>
              <Container>
                <h4 aria-label="Home Decor">Home Decor</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>

          <Col>
            <Link to="/services/pets">
              <img src={petCover} alt="Dog with mug of decal of it"></img>
              <Container>
                <h4 aria-label="Pets">Pets</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>

          <Col>
            <Link to="/services/invitations">
              <img src={invitationCover} alt="Custom invitations"></img>
              <Container>
                <h4 aria-label="Invitations">Invitations</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/services/clothing">
              <img src={clothingCover} alt="Custom t-shirts"></img>
              <Container>
                <h4 aria-label="Clothing">Clothing</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>

          <Col>
            <Link to="/services/bridal">
              <img src={bridalCover} alt="Bridal party carepackage"></img>
              <Container>
                <h4 aria-label="Bridal Designs">Bridal Designs</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>

          <Col>
            <Link to="/services/signs">
              <img src={signCover} alt="Custom t-shirts"></img>
              <Container>
                <h4 aria-label="Signs">Signs</h4>
                <button>View More</button>
              </Container>
            </Link>
          </Col>
        </Row>

        <Container className="view-more-categories">
          <h4 aria-label="View more caregories">
            View more designs and a full breakdown of my services
          </h4>

          <button>
            <Link to="/services">Service Page</Link>
          </button>

          <Container>
            <img src={TeddyBear} alt="teddy bear"></img>
            <img src={DogMug} alt="dog with decal of itself on a much"></img>
            <img src={GroomsPackage} alt="box with custom decal on it"></img>
          </Container>
        </Container>
      </Fade>
    </Container>
  );
};

export default HomepageCategories;
