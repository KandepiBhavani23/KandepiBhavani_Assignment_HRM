// import { useLocation } from "react-router-dom";
// import AdminHeader from "../AdminDashboard/AdminHeader";
// import MainHeader from "./MainHeader";

// const Header = () => {
//   const location = useLocation();
//   if (location.pathname === "/admin") {
//     return <AdminHeader />;
//   }
//   return <MainHeader />;
// };
// export default Header;

import { useLocation } from "react-router-dom";
import AdminHeader from "../AdminDashboard/AdminHeader";
import MainHeader from "./MainHeader";

const Header = ({ showSideBar, setShowSideBar }) => {
  const location = useLocation();
  const isAdminPath = /^\/admin/.test(location.pathname);

  return isAdminPath ? (
    <AdminHeader showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
  ) : (
    <MainHeader />
  );
};

export default Header;
