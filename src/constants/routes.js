import About from "pages/about";
import Home from "pages/home";
import All from "pages/all";
import ArtDetail from "pages/artDetail";
import Cart from "pages/cart";
import ArtEdit from "pages/artEdit";
import Contact from "pages/contact_us";
import Customs from "pages/customs";
import Drawings from "pages/drawings";
import Terms from "pages/terms";
import Sell from "pages/sell";
import Sculptures from "pages/sculptures";
import Register from "pages/register";
import Privacy from "pages/privacy";
import Prints from "pages/prints";
import Photography from "pages/photography";
import Paintings from "pages/paintings";
import NewArt from "pages/newart";
import MyWorks from "pages/myworks";
import Login from "pages/login";
import Limited from "pages/limited";
import ErrorPage from "pages/errorpage";
import { links } from "./links";

export const routes = [
  { path: links.HOME, element: <Home /> },
  { path: links.ABOUT, element: <About /> },
  { path: links.ALL, element: <All /> },
  { path: links.ARTDETAIL, element: <ArtDetail /> },
  { path: links.CONTACT, element: <Contact /> },
  { path: links.CUSTOMS, element: <Customs /> },
  { path: links.DRAWINGS, element: <Drawings /> },
  { path: links.CART, element: <Cart /> },
  { path: links.edit, element: <ArtEdit /> },
  { path: links.TERMS, element: <Terms /> },
  { path: links.SELL, element: <Sell /> },
  { path: links.SCULPTURES, element: <Sculptures /> },
  { path: links.REGISTER, element: <Register /> },
  { path: links.PRIVACY, element: <Privacy /> },
  { path: links.PRINTS, element: <Prints /> },
  { path: links.PHOTOGRAPHY, element: <Photography /> },
  { path: links.PAINTINGS, element: <Paintings /> },
  { path: links.NEWART, element: <NewArt /> },
  { path: links.MYWORKS, element: <MyWorks /> },
  { path: links.LOGIN, element: <Login /> },
  { path: links.LIMITED, element: <Limited /> },
  { path: links.ERRORPAGE, element: <ErrorPage /> },
];
