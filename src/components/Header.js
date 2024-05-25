import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../hooks/useInternetStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);
  console.log("userContext:", data);
  const status = useInternetStatus();
  // console.log("Status:", status);
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div className="flex justify-between items-center px-4 border-b-2 border-solid ">
      <div className="">
        <Link to="/">
          <img
            src={LOGO_URL}
            className="w-20"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>
      </div>

      <div className="">
        <ul className="flex items-center gap-x-3 text-xs sm:text-sm md:text-base">
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
            className="border-2 border-solid border-orange-500 rounded py-1 px-2 bg-orange-200 hover:bg-gray-300 cursor-pointer"
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
          <li className="font-bold">{data.loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
