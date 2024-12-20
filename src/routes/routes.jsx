import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
  {
    basename: "/Portfolio",
  }
);

export const MyRoutes = () => {
  return <RouterProvider router={router} />;
};
