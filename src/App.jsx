import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Header,
  AdminLogin,
  EmployeeLogin,
  EmployeeDetails,
  NoRouteFound,
  ProtectedRoute,
  AdminDashboard,
} from "./index";

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
    errorElement: <NoRouteFound />,
    children: [
      {
        path: "/",
        element: <EmployeeLogin />,
      },
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
      {
        path: "/admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
