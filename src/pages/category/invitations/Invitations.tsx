import { Container } from "react-bootstrap";
import StoryButton from "../../../styledComponents/StoryButton.styled";

const Invitations: React.FC = () => {
  return (
    <Container className="Category">
      <h1>Invitations</h1>
      <a
        href="https://www.instagram.com/stories/highlights/17945693479938281/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <StoryButton>Instagram Stories</StoryButton>
      </a>
      <Container className="Category-image-container">s</Container>
    </Container>
  );
};

export default Invitations;
