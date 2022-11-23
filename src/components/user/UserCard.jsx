import "./UserCard.css";

const UserCard = ({ avatar, name, reposNumber, url }) => {
  return (
    <div className="card">
      <img
        data-testid="usercard_avatar"
        className="usercard_avatar"
        src={avatar}
        alt=""
      />
      <a
        data-testid="usercard_name"
        className="repo_title"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        @{name}
      </a>
      <p data-testid="usercard_number" className="repo_number">
        Number of Repositories : {reposNumber}
      </p>
    </div>
  );
};

export default UserCard;
