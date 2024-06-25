import { BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate();
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-orange-500 shadow-md transition-all duration-300 ${
        showSideBar ? "lg:ml-60" : "lg:ml-0 left-0"
      }`}>
      <button onClick={() => setShowSideBar(!showSideBar)}>
        <BiMenu className="text-white h-7 w-7" />
      </button>

      <button
        onClick={() => navigate("/")}
        className="px-3 py-1 text-base font-bold bg-white rounded-2xl text-end">
        Logout
      </button>
    </header>
  );
};
export default AdminHeader;
