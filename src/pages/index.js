import Home from "./home";
import ErrorPage from "./errorpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export default function Index() {
  return <RouterProvider router={router} />;
}
