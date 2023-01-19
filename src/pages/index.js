import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import Layout from "./layout";
// import About from "./about";
import ErrorPage from "./errorpage";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Layout />} />
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
