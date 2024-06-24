import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import AdminLogin from "./components/Login/AdminLogin";
import EmployeeLogin from "./components/Login/EmployeeLogin";
import EmployeeDetails from "./components/Login/EmployeeDetails";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/employee-login",
        element: <EmployeeLogin />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/employee-details",
        element: <EmployeeDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
