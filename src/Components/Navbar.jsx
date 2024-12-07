import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: state.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-content">
        <h1 className="logo">
          <span className="red">D</span>H Odonto
        </h1>
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/favs" className="nav-link">
            Favs
          </Link>
        </div>
        <button
          className={`theme-toggle ${state.theme}`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {state.theme === "light" ? "🌜" : "🌞"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
