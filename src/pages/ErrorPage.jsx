import React from "react";
// Image
import Logo from "../image/logo.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main id="error__page">
      <figure>
        <img src={Logo} alt="Logo Blog Bunny" className="logo__errorpage" />
      </figure>
      <p>page not found</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </main>
  );
};

export default ErrorPage;
