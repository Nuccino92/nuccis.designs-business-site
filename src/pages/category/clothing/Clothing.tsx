import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Clothing: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Clothing</h1>
      <a
        href="https://www.instagram.com/stories/highlights/18091097011242441/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <ListGroup>
        <h3>Some Clothing products that I specialize in</h3>
        <Row>
          <Col>
            <ListGroup.Item>Sweaters</ListGroup.Item>
            <ListGroup.Item>T-Shirts</ListGroup.Item>
            <ListGroup.Item>Hoodies</ListGroup.Item>
            <ListGroup.Item>Track Pants</ListGroup.Item>
            <ListGroup.Item>Hats</ListGroup.Item>
          </Col>
          <Col>
            <ListGroup.Item>Masks</ListGroup.Item>
            <ListGroup.Item>Cotton Tote Bags</ListGroup.Item>
            <ListGroup.Item>Bandanas</ListGroup.Item>
            <ListGroup.Item>Cotton Backpacks</ListGroup.Item>
            <ListGroup.Item>Cotton Socks</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Clothing;
