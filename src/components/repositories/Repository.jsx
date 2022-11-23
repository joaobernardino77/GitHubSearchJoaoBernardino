import "./Repository.css";

const Repository = ({ name, description, url }) => {
  return (
    <a
      data-testid="repository-item"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="repository-item">
        <div data-testid="repository-title" className="repository-title">
          {name}
        </div>
        <div data-testid="repository-description">{description}</div>
      </div>
    </a>
  );
};

export default Repository;
