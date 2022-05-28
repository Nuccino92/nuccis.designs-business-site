import "./CustomArrows.scss";
import { BsArrowLeft } from "react-icons/bs";

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <div onClick={() => onClick()} className="CustomLeftArrow">
      <BsArrowLeft /> Previous
    </div>
  );
};
export default CustomLeftArrow;
