import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Bridal: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Bridal</h1>
      <a
        href="https://www.instagram.com/stories/highlights/17889655075582300/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <ListGroup>
        <h3>Some Bridal products that I specialize in</h3>
        <Row>
          <Col>
            <ListGroup.Item>Acrylic Welcome Signs</ListGroup.Item>
            <ListGroup.Item>Acrylic Table Numbers</ListGroup.Item>
            <ListGroup.Item>Acrylic Cake Toppers</ListGroup.Item>
            <ListGroup.Item>Bridal Gift Boxes</ListGroup.Item>
            <ListGroup.Item>Bridal Robes</ListGroup.Item>
            <ListGroup.Item>Bridal Clothing</ListGroup.Item>
          </Col>

          <Col>
            <ListGroup.Item>Bridal Glassware</ListGroup.Item>
            <ListGroup.Item>Bridal Slippers</ListGroup.Item>
            <ListGroup.Item>Bridal Passports</ListGroup.Item>
            <ListGroup.Item>Custom Made Centerpieces</ListGroup.Item>
            <ListGroup.Item>Wedding Countdowns</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Bridal;
