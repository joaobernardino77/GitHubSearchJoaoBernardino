import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (user !== "") {
      e.preventDefault();
      navigate(`/${user}`);
    } else {
      setError("please enter the user you want to check");
    }
  };

  const searchUser = (newUser) => {
    if (error) {
      setError(null);
    }
    setUser(newUser);
  };

  return (
    <div className="home_main">
      <div className="home_title">GITHUB FINDER</div>
      <div className="home_subtitle">
        Check your favorite github user bellow
      </div>
      <div className="home_search">
        <input
          data-testid="home_search_input"
          className="home_search_input"
          value={user}
          type="text"
          onChange={(e) => searchUser(e.target.value)}
          placeholder="Search User"
          autoFocus={true}
        />
        <button className="home_search_button" onClick={(e) => handleSubmit(e)}>
          GO
        </button>
      </div>
      {error && <div className="home_error_message">{error}</div>}
    </div>
  );
};

export default Home;
