import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Childern: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Children</h1>
      <a
        href="https://www.instagram.com/stories/highlights/18140370085142113/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <ListGroup>
        <h3>Some Child products that I specialize in</h3>
        <Row>
          <Col>
            <ListGroup.Item>Kids Shirts</ListGroup.Item>
            <ListGroup.Item>Kids Sweaters</ListGroup.Item>
            <ListGroup.Item>Kids Masks</ListGroup.Item>
            <ListGroup.Item>
              Customized Keepsakes (Teddy Bears / Unicorns)
            </ListGroup.Item>
          </Col>
          <Col>
            <ListGroup.Item>Growth Charts</ListGroup.Item>
            <ListGroup.Item>Customized Lunch Bags / Boxes</ListGroup.Item>
            <ListGroup.Item>Blankets</ListGroup.Item>
            <ListGroup.Item>Pillows</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Childern;
