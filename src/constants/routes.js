import Home from "pages/home";
import About from "pages/about";
import ErrorPage from "pages/errorpage";
import All from "pages/all";
import ArtDetail from "pages/artDetail";
import Cart from "pages/cart";
import ArtEdit from "pages/artEdit";
import Contact from "pages/contact_us";
import Customs from "pages/customs";
import Drawings from "pages/drawings";

export const routes = [
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/all", element: <All /> },
  { path: "/art/:id", element: <ArtDetail /> },
  { path: "/contact", element: <Contact /> },
  { path: "/customs", element: <Customs /> },
  { path: "/drawings", element: <Drawings /> },
  { path: "/cart", element: <Cart /> },
  { path: "/edit", element: <ArtEdit /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
  { path: "/", element: <Home /> },
];
