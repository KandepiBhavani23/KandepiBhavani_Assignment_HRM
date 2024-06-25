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
  CreateEmployee,
  PersonalDetails,
  PersonalInformation,
  ContactDetails,
  JobDetails,
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
        children: [
          {
            path: "/admin",
            element: <CreateEmployee />,
          },
          {
            path: "/admin/create-employee",
            element: <CreateEmployee />,
          },
          {
            path: "/admin/personal-info",
            element: <PersonalInformation />,
            children: [
              {
                path: "",
                element: <PersonalDetails />,
              },
              {
                path: "/admin/personal-info/personal-details",
                element: <PersonalDetails />,
              },
              {
                path: "/admin/personal-info/contact-details",
                element: <ContactDetails />,
              },
              {
                path: "/admin/personal-info/job-details",
                element: <JobDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
