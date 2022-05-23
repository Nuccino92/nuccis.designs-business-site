import "./CustomArrows.scss";
import { BsArrowLeft } from "react-icons/bs";

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div onClick={() => onClick()} className="CustomLeftArrow">
      <BsArrowLeft /> Previous
    </div>
  );
};
export default CustomLeftArrow;
