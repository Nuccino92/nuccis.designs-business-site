import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const HomeDecor: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Home Decor</h1>{" "}
      <a
        href="https://www.instagram.com/stories/highlights/17891978953807831/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <ListGroup>
        <h3>Some Home Decor products that I specialize in</h3>
        <Row>
          <Col>
            <ListGroup.Item>Welcome Signs</ListGroup.Item>
            <ListGroup.Item>Personal Signs</ListGroup.Item>
            <ListGroup.Item>Memorial Signs</ListGroup.Item>
            <ListGroup.Item>Pillows/Pillow Cases</ListGroup.Item>
            <ListGroup.Item>Picture Frames</ListGroup.Item>
          </Col>
          <Col>
            <ListGroup.Item>Seasonal Signs</ListGroup.Item>
            <ListGroup.Item>Calendars</ListGroup.Item>
            <ListGroup.Item>Growth Charts</ListGroup.Item>
            <ListGroup.Item>Customized Door Mats</ListGroup.Item>
            <ListGroup.Item>Customized Towels</ListGroup.Item>
          </Col>
        </Row>
      </ListGroup>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default HomeDecor;
