import { Link, useLocation } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";
import images from "../../utils/images";

const sideBarLinks = [
  {
    id: 100,
    title: "Admin",
    href: "/admin/create-employee",
    icon: <FaUserGroup />,
  },
  {
    id: 102,
    title: "PIM",
    href: "/admin/personal-info",
    icon: <FaUserGroup />,
  },
  {
    id: 103,
    title: "Leave",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 104,
    title: "Time",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 105,
    title: "MyInfo",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 106,
    title: "MyDashboard",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 107,
    title: "Directory",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 108,
    title: "Maintenance",
    href: "#",
    icon: <FaUserGroup />,
  },
  {
    id: 109,
    title: "Buzz",
    href: "#",
    icon: <FaUserGroup />,
  },
];

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const location = useLocation();
  return (
    <aside
      className={`fixed top-0 left-0 min-h-screen w-60 bg-slate-50 shadow-2xl shadow-orange-200 transition-transform duration-300 z-50 ${
        showSideBar ? "transform-none" : "-translate-x-full"
      } lg:translate-x-0 lg:mt-0 rounded-tr-2xl rounded-br-2xl`}>
      <Link to="/admin" className="mb-6 ">
        <img src={images?.websiteLogo} alt="logo" className="p-3" />
      </Link>
      <ul className="flex flex-col pr-4 space-y-1">
        {sideBarLinks?.map((item) => (
          <li key={item.id} className="relative ">
            <Link
              onClick={() => {
                if (window.innerWidth <= 1024) {
                  setShowSideBar(false);
                }
              }}
              to={item.href}
              style={{ width: "100%" }}
              className={`inline-flex items-center transition-colors duration-300 w-full px-6 py-2 text-base font-bold ${
                location.pathname === item.href
                  ? "pl-5 bg-orange-400 rounded-r-full rounded-l-none text-white"
                  : ""
              }`}>
              <span>{item.icon}</span>
              <span className="ml-4 ">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default SideBar;
