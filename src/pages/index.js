import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routes";
import Layout from "./layout";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => {
          return <Route path={route.path} element={route.element} />;
        })}
      </Route>
    </Routes>
  );
}
