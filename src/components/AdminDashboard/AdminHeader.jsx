import { CgMenu } from "react-icons/cg";

const AdminHeader = ({ showSideBar, setShowSideBar }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-orange-500 shadow-md transition-all duration-300 ${
        showSideBar ? "lg:ml-60" : "lg:ml-0 left-0"
      }`}></header>
  );
};
export default AdminHeader;
