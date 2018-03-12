import React from "react";
import Loader from "./loader.svg";

const Spinner = () => (
  <img className="spinner" src={Loader} alt="Loading app..." />
);

export default Spinner;
