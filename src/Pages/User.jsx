import { useParams } from "react-router-dom";
import useFetchData from "../components/generics/FetchData";
import { BackButton } from "../components/generics/BackButton";
import UserCard from "../components/user/UserCard";
import { GITHUB_URI } from "../constants/constants";
import Repositories from "../components/repositories/Repositories";
import { Loading } from "../components/generics/Loading";
import NotFound from "../components/generics/NotFound";

const User = () => {
  const { user } = useParams();
  const apiData = useFetchData(`${GITHUB_URI}/users/${user}`);
  //Extract only what is required from the api
  const { avatar_url, login, html_url, repos_url, public_repos } = apiData.data;

  if (apiData.error)
    return <NotFound errorMessage="GitHub user was not found" goBackPath="/" />;

  return (
    <>
      {apiData.loading ? (
        <Loading />
      ) : (
        <>
          <BackButton previousPage={"/"} />
          <UserCard
            avatar={avatar_url}
            name={login}
            reposNumber={public_repos}
            url={html_url}
          />
          {public_repos > 0 && (
            <Repositories reposUrl={repos_url} reposNumber={public_repos} />
          )}
        </>
      )}
    </>
  );
};
export default User;
