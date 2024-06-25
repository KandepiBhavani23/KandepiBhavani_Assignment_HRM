import { Link, useLocation } from "react-router-dom";

const PersonalSideBar = () => {
  const links = [
    {
      id: 101,
      name: "Personal Details",
      href: "/admin/personal-info/personal-details",
    },
    {
      id: 102,
      name: "Contact Details",
      href: "/admin/personal-info/contact-details",
    },
    { id: 103, name: "Job", href: "/admin/personal-info/job-details" },
    { id: 104, name: "Emergency Contacts", href: "#emergency-contacts" },
    { id: 105, name: "Dependents", href: "#dependents" },
    { id: 106, name: "Immigration", href: "#immigration" },
    { id: 107, name: "Salary", href: "#salary" },
    { id: 108, name: "Report-to", href: "#report-to" },
    { id: 109, name: "Qualifications", href: "#qualifications" },
    { id: 110, name: "Membership", href: "#membership" },
  ];

  const location = useLocation();

  return (
    <div className="w-64 min-h-screen p-6 bg-white border-r-2 shadow-md">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4 bg-gray-200 rounded-full"></div>
        <h2 className="mb-6 text-xl font-bold">Kandepi Bhavani</h2>
        <nav className="flex flex-col w-full py-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-gray-600 hover:text-gray-900 p-2 rounded-md ${
                link.href === location.pathname ? "bg-gray-100" : ""
              }`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default PersonalSideBar;
