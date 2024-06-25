import { useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import MainHeader from "./MainHeader";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/admin") {
    return <AdminHeader />;
  }
  return <MainHeader />;
};
export default Header;
