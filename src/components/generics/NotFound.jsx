import { useNavigate } from "react-router-dom";

import "./NotFound.css";
const NotFound = ({ errorMessage, goBackPath = null }) => {
  const navigate = useNavigate();
  return (
    <div className="not_found_main">
      <div className="not_found_title">Error</div>
      <div className="not_found_subtitle">{errorMessage}</div>
      {goBackPath && (
        <button className="back-button" onClick={(e) => navigate(goBackPath)}>
          GO Back
        </button>
      )}
    </div>
  );
};

export default NotFound;
