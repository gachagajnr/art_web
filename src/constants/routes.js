import About from "pages/about";
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

export const routes = [
  { path: "/about", element: <About /> },
  { path: "/all", element: <All /> },
  { path: "/art/:id", element: <ArtDetail /> },
  { path: "/contact", element: <Contact /> },
  { path: "/customs", element: <Customs /> },
  { path: "/drawings", element: <Drawings /> },
  { path: "/cart", element: <Cart /> },
  { path: "/edit", element: <ArtEdit /> },
  { path: "/terms", element: <Terms /> },
  { path: "/sell", element: <Sell /> },
  { path: "/sculptures", element: <Sculptures /> },
  { path: "/register", element: <Register /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/prints", element: <Prints /> },
  { path: "/photography", element: <Photography /> },
  { path: "/paintings", element: <Paintings /> },
  { path: "/new", element: <NewArt /> },
  { path: "/myworks", element: <MyWorks /> },
  { path: "/login", element: <Login /> },
  { path: "/limited", element: <Limited /> },
];
