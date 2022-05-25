import styled from "styled-components";

const FacebookReviewButton = styled.button`
  background-color: rgb(66, 103, 178);
  color: white;
  font-size: 22px;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-in;
  }

  @media (max-width: 500px) {
    padding: 10px;
    font-size: 17px;
  }
`;

export default FacebookReviewButton;
