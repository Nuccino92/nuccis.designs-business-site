import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Pets: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Pets</h1>
      <a
        href="https://www.instagram.com/stories/highlights/18071761879208801/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <ListGroup>
        <h3>Some Pet products that I specialize in</h3>
        <Row>
          <Col>
            <ListGroup.Item>Dog Shirts</ListGroup.Item>
            <ListGroup.Item>Dog Sweaters</ListGroup.Item>
            <ListGroup.Item>Pet Mugs</ListGroup.Item>
            <ListGroup.Item>Pet Tote Bags</ListGroup.Item>
          </Col>
          <Col>
            <ListGroup.Item>Customized Pet Bowls</ListGroup.Item>
            <ListGroup.Item>Bandanas</ListGroup.Item>
            <ListGroup.Item>Blankets</ListGroup.Item>
            <ListGroup.Item>Pillows</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Pets;
