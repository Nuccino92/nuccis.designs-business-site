import { Container } from "react-bootstrap";
import "./ServicesCategories.scss";

import bridalCover from "../../images/coverImages/bridal.jpg";
import childrenCover from "../../images/coverImages/children.jpg";
import clothingCover from "../../images/coverImages/clothing.jpg";
import decalsCover from "../../images/coverImages/decals.jpg";
import homeDecorCover from "../../images/coverImages/homeDecor.jpg";
import invitationCover from "../../images/coverImages/invitation.jpg";
import petCover from "../../images/coverImages/pet.jpg";
import seasonalCover from "../../images/coverImages/seasonal.jpg";
import teacherCover from "../../images/coverImages/teacher.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CustomRightArrow from "../serviceCategories/customArrows/CustomRightArrow";
import CustomLeftArrow from "../serviceCategories/customArrows/CustomLeftArrow";
import { Link } from "react-router-dom";

const ServicesCategories = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2150 },
      items: 4,
      partialVisibilityGutter: 25,
    },
    desktop: {
      breakpoint: { max: 2150, min: 1350 },
      items: 3,
      partialVisibilityGutter: 25,
    },
    tablet: {
      breakpoint: { max: 1350, min: 750 },
      items: 2,
      partialVisibilityGutter: 25,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      partialVisibilityGutter: 25,
    },
  };

  return (
    <Container className="ServicesCategories" fluid>
      <h2>Click to view a product list and images of past work</h2>
      {/* @ts-ignore: Unreachable code error  */}
      <Carousel
        itemClass={"carousel-item"}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
      >
        {/* @ts-ignore: Unreachable code error  */}
        <div>
          <Link to="/services/homedecor">
            <img src={homeDecorCover} alt="Pillows with custom print" />
            <h3>Home Decor</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/pets">
            <img src={petCover} alt="Dog with mug of decal of it" />
            <h3>Pets</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/clothing">
            <img src={clothingCover} alt="Custom t-shirts" />
            <h3>Clothing</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/invitations">
            <img src={invitationCover} alt="Custom invitations" />
            <h3>Invitations</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/bridal">
            <img src={bridalCover} alt="Bridal party carepackage" />
            <h3>Bridal</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/children">
            <img src={childrenCover} alt="Happy child with custom shirt" />
            <h3>Children</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/festive">
            <img
              src={seasonalCover}
              alt="Christmass ornament with custom writing"
            />
            <h3>Festive</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/teacher">
            <img
              src={teacherCover}
              alt="Custom t-shirt with text for teachers"
            />
            <h3>Teacher</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>

        <div>
          <Link to="/services/decals">
            <img src={decalsCover} alt="Custom decal on cup" />
            <h3>Decals</h3>
            <p>Click to view pictures &#x2192;</p>
          </Link>
        </div>
      </Carousel>
    </Container>
  );
};

export default ServicesCategories;
