import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const status = useInternetStatus();

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src={LOGO_URL} className="logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul className="nav-items-ul">
          <li className="nav-items-ul-items">
            Online status: {status === true ? "🟢" : "🔴"}
          </li>
          <Link to="/grocery" style={linkStyle}>
            <li className="nav-items-ul-items">Grocery</li>
          </Link>
          <Link to="/" style={linkStyle}>
            <li className="nav-items-ul-items">Home</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li className="nav-items-ul-items">About</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li className="nav-items-ul-items">Contact</li>
          </Link>
          <Link to="/cart" style={linkStyle}>
            <li className="nav-items-ul-items">Cart</li>
          </Link>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Logout" ? "Login" : "Logout");
            }}
          >
            {btnName}
            <div
              className="internet-status"
              style={{
                backgroundColor: `${status === true ? "green" : "red"}`,
              }}
            ></div>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
