import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Index from "./pages/index";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
