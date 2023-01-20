import { Outlet } from "react-router-dom";
import Header from "features/header/header";
import CategotyHeader from "features/categoryHeader/categoryHeader";
import Footer from 'features/footer/footer'

export default function Layout() {
  return (
    <>
      <Header name="Pius" cartTotal={3} isAuthenticated={false} />
      <CategotyHeader />
      <Outlet />
      <Footer/>
    </>
  );
}
