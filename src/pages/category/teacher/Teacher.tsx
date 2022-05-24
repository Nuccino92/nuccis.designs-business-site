import { Container } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Teacher: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Teacher</h1>
      <a
        href="https://www.instagram.com/stories/highlights/17940300094556524/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Teacher;
