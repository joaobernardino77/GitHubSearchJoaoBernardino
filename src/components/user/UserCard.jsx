import "./UserCard.css";

const UserCard = ({ avatar, name, reposNumber, url }) => {
  return (
    <div className="card">
      <img className="usercard__avatar" src={avatar} alt="" />
      <p
        className="repo_title"
        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      >
        @{name}
      </p>
      <p className="repo_number" onClick={() => console.log("tesstttteeee")}>
        Number of Repositories : {reposNumber}
      </p>
    </div>
  );
};

export default UserCard;
