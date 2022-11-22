import { useNavigate } from "react-router-dom";
import "./BackButton.css";

export const BackButton = ({ previousPage }) => {
  let navigate = useNavigate();
  const redirectLink = previousPage ? previousPage : -1;
  console.log(redirectLink);
  return (
    <>
      <div className="left" onClick={() => navigate(redirectLink)}></div>
    </>
  );
};
