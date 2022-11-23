import "./NotFound.css";
const NotFound = ({ errorMessage, redirectFunction = null }) => {
  return (
    <div className="not_found_main">
      <div className="not_found_title">Error</div>
      <div className="not_found_subtitle">{errorMessage}</div>
      {redirectFunction && (
        <button className="not-found-button" onClick={() => redirectFunction()}>
          GO Back
        </button>
      )}
    </div>
  );
};

export default NotFound;
