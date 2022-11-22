import { useState } from "react";
import useFetchData from "../generics/FetchData";
import Pagination from "./Pagination";
import { numberOfReposPerPage } from "../../constants/constants";
import Repository from "./Repository";

import "./Repositories.css";
import NotFound from "../generics/NotFound";
import { Loading } from "../generics/Loading";

const Repositories = ({ reposUrl, reposNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const repoData = useFetchData(
    reposUrl + `?page=${currentPage}&per_page=${numberOfReposPerPage}`,
    [reposUrl + `?page=${currentPage}&per_page=${numberOfReposPerPage}`]
  );

  if (repoData.loading) {
    return <Loading />;
  }

  if (reposNumber === 0) {
    return;
  }

  if (repoData.error)
    return (
      <NotFound
        errorMessage="GitHub user was not found"
        goBackPath={reposUrl}
      />
    );

  return (
    <>
      <div className="main-repository">
        <div className="gradient-list">
          {repoData.data.map(({ id, name, description, svn_url }) => (
            <Repository
              key={id}
              name={name}
              description={description}
              url={svn_url}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          postsPerPage={numberOfReposPerPage}
          totalPosts={reposNumber}
          paginate={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </>
  );
};
export default Repositories;
