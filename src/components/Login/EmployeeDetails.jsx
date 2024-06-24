import { useLocation } from "react-router-dom";
import images from "../../utils/images.js";

const EmployeeDetails = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  if (!userData) {
    return <p>Error: User data not available. Please login again.</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen translate-y-1/4 space-y-2">
      <div className="border-2 flex flex-col justify-center items-center p-10">
        <h1 className="font-semibold text-xl text-orange-500 uppercase">
          User Details
        </h1>
        <img
          src={images?.employeeProfile}
          alt="employeeProfile"
          className="w-40 h-28 rounded-full object-cover"
        />
        <div className="font-semibold text-center py-5">
          <p className="text-slate-800">
            <span className="text-orange-500">EmpId: </span> {userData.id}
          </p>
          <p className="text-slate-800">
            <span className="text-orange-500">Name: </span> {userData.name}
          </p>
          <p className="text-slate-800">
            <span className="text-orange-500">Email: </span> {userData.email}
          </p>
          <p className="text-slate-800">
            <span>Gender: </span> {userData.gender}
          </p>
          <p className="text-slate-800">
            <span className="text-orange-500">Status: </span> {userData.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
