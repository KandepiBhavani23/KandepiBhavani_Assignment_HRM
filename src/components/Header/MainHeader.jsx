import { Link, useLocation } from "react-router-dom";
import images from "../../utils/images.js";
import { useState } from "react";

const MainHeader = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  return (
    <header className="px-2 py-2 shadow-md">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <img
          src={images?.websiteLogo}
          alt="website-logo"
          className="object-fill w-[100px] md:w-[150px] lg:w-[200px]"
        />
        <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
          <li
            className={`py-1 md:py-2 px-3 rounded-full font-semibold text-sm md:text-base xl:text-lg ${
              activeLink === "/employee-login"
                ? "bg-orange-500 text-white"
                : "bg-transparent border border-orange-500 text-orange-500"
            }`}>
            <Link
              to="/employee-login"
              onClick={() => setActiveLink("/employee-login")}>
              Employee Login
            </Link>
          </li>
          <li
            className={`py-1 md:py-2 px-3 rounded-full font-semibold text-sm md:text-base xl:text-lg ${
              activeLink === "/admin-login"
                ? "bg-orange-500 text-white"
                : "bg-transparent border border-orange-500 text-orange-500"
            }`}>
            <Link
              to="/admin-login"
              onClick={() => setActiveLink("/admin-login")}>
              Admin Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default MainHeader;
