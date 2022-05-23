import "./CustomArrows.scss";
import { BsArrowRight } from "react-icons/bs";

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div className="CustomRightArrow" onClick={() => onClick()}>
      Next
      <BsArrowRight />
    </div>
  );
};

export default CustomRightArrow;
