import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <React.Fragment>
      <Link to="/waste">Simply waste</Link>
      <br />
      <Link to="/login">Login</Link>
    </React.Fragment>
  );
};
