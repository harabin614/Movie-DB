import React from "react";
import Filter from "../../components/Filter/Filter";
import PopFilmsTotal from "../../components/PopFilms/PopFilms";
import Pagination from "../../components/Pagination/Pagination";

const PopFilms = () => {
  const path = "/popular/";
  return (
    <div>
      <Filter />
      <PopFilmsTotal />
      <Pagination currPath={path} />
    </div>
  );
};

export default PopFilms;
