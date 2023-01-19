import Home from "./home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function Index() {
  return <RouterProvider router={router} />;
}

export default Index;
