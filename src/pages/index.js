import Home from "./home";
import About from "./about";
import ErrorPage from "./errorpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function Index() {
  return (
    <>
      <header>Arty Land</header>
      <RouterProvider router={router} />
    </>
  );
}
