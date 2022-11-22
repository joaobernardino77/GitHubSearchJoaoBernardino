import "./Repository.css";

const Repository = ({ name, description, url }) => {
  return (
    <div
      className="repository-item"
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
    >
      <div className="repository-title">{name}</div>
      <div>{description}</div>
    </div>
  );
};

export default Repository;
