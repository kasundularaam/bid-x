import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/StyledNavbar";
const AuthSharedLayout = ({ setUser }) => {
  return (
    <>
      <StyledNavbar setUser={setUser} />
      <Outlet />
    </>
  );
};
const NoAuthSharedLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export { AuthSharedLayout, NoAuthSharedLayout };
