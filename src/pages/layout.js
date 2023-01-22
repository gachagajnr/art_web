import { Outlet } from "react-router-dom";
// import Container from "react-bootstrap/Container";

import Header from "features/header/header";
import CategotyHeader from "features/categoryHeader/categoryHeader";
import SubscribeForm from "components/subscribeform/subscribeform";
import Footer from "components/footer/footer";

export default function Layout() {
  return (
    <>
      <Header name="Pius" cartTotal={3} isAuthenticated={false} />
      <CategotyHeader />
      {/* <Container> */}
        <Outlet />
        <SubscribeForm />
      {/* </Container> */}

      <Footer />
    </>
  );
}
