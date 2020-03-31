import React, { useEffect, useState } from "react";
import classes from "./Pagination.module.css";
import { useHistory } from "react-router-dom";

const Pagination = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const actualPath = useHistory();
  useEffect(() => {
    if (actualPath.location.pathname !== "/popular") {
      setPageNumber(Number(actualPath.location.pathname.slice(-1)));
    }
  }, [actualPath]);

  const goBack = () => {
    if (pageNumber !== 1) {
      actualPath.push(`/popular/${pageNumber - 1}`);
    }
  };
  const goForward = () => {
    if (pageNumber !== 3) {
      actualPath.push(`/popular/${pageNumber + 1}`);
    }
  };

  const pages = [1, 2, 3].map(page => {
    return (
      <a
        className={page === pageNumber ? classes.active : null}
        key={page}
        href={props.currPath + page}
      >
        {page}
      </a>
    );
  });

  return (
    <div className={classes.PaginationWrapper}>
      <div className={classes.Pagination}>
        <button onClick={goBack}>Previous</button>
        {pages}
        <button onClick={goForward}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
