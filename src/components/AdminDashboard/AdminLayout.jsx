import { useState } from "react";
import SideBar from "./SideBar";
import Header from "../Header/Header";

const AdminLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="flex bg-slate-200">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className={`${showSideBar ? "lg:ml-0" : "lg:ml-60"}`}>
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main className="min-h-screen pt-20 pb-10 ml-60 px-7 text-slate-300">
          {children}
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
