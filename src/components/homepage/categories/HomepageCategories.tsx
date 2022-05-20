import { Container, Row, Col } from "react-bootstrap";
import "./HomepageCategories.scss";
import { Link } from "react-router-dom";

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
      <h2>Check out some popular product categories</h2>
      <Row>
        <Col>
          <img src={homeDecorCover} alt="Pillows with custom print"></img>
          <Container>
            <h4>Home Decor</h4>
            <button>View More</button>
          </Container>
        </Col>
        <Col>
          <img src={petCover} alt="Dog with mug of decal of it"></img>
          <Container>
            <h4>Pets</h4>
            <button>View More</button>
          </Container>
        </Col>
        <Col>
          <img src={invitationCover} alt="Custom invitations"></img>
          <Container>
            <h4>Invitations</h4>
            <button>View More</button>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={clothingCover} alt="Custom t-shirts"></img>
          <Container>
            <h4>Clothing</h4>
            <button>View More</button>
          </Container>
        </Col>
        <Col>
          <img src={bridalCover} alt="Bridal party carepackage"></img>
          <Container>
            <h4>Bridal Designs</h4>
            <button>View More</button>
          </Container>
        </Col>
        <Col>
          <img src={signCover} alt="Custom t-shirts"></img>
          <Container>
            <h4>Signs</h4>
            <button>View More</button>
          </Container>
        </Col>
      </Row>

      <Container className="view-more-categories">
        <h4>View more designs and a full breakdown of my services</h4>
        <Link to="/services">
          <button>Click Here</button>
        </Link>
        <Container>
          <img src={TeddyBear} alt=""></img>
          <img src={DogMug} alt=""></img>
          <img src={GroomsPackage} alt=""></img>
        </Container>
      </Container>
    </Container>
  );
};

export default HomepageCategories;
