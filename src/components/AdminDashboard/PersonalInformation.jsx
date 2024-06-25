import { Outlet } from "react-router-dom";
import PersonalLayout from "./PersonalInfo/PersonalLayout";

const PersonalInformation = () => {
  return (
    <PersonalLayout>
      <Outlet />
    </PersonalLayout>
  );
};
export default PersonalInformation;
