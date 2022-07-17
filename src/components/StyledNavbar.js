import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="stocks"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Stocks
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Sign out
      </NavLink>
    </nav>
  );
};
export default Navbar;
