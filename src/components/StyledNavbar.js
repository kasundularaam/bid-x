import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div className="textLinks">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Sign out
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
