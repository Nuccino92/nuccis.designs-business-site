import "./CustomArrows.scss";
import { BsArrowRight } from "react-icons/bs";

const CustomRightArrow = ({ onClick }: any) => {
  return (
    <div className="CustomRightArrow" onClick={() => onClick()}>
      Next
      <BsArrowRight />
    </div>
  );
};

export default CustomRightArrow;
