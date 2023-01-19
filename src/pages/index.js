import { routes } from "constants/routes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  routes.map((route) => {
    return {
      path: route.path,
      element: route.element,
      errorElement: route.errorElement,
    };
  })
);

export default function Index() {
  return (
    <>
      <header>Arty Land</header>
      <RouterProvider router={router} />
    </>
  );
}
