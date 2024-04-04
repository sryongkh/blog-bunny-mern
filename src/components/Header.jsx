import React from "react";
import { Link } from "react-router-dom";
// Image
import Logo from "../image/logo.svg";
// Icon
import { X } from "lucide-react";
const Header = () => {
  return (
    <nav>
      <header className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile">Blog Bunny</Link>
          </li>
          <li>
            <Link to="/create">Create Post</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <X />
        </button>
      </header>
    </nav>
  );
};

export default Header;
