import { routes } from "constants/routes";
import Header from "features/header/header";

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
      <Header  isAuthenticated={false} name="Pius" cartTotal={4} />
      <RouterProvider router={router} />
    </>
  );
}
