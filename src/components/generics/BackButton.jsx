import "./BackButton.css";

export const BackButton = ({ redirectFunction }) => {
  return (
    <>
      <div
        role="button"
        className="back-button"
        onClick={() => redirectFunction()}
      ></div>
    </>
  );
};
