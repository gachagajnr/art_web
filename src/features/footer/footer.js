import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center">
      {"Copyright © "}
      <Link to="/" style={{ textDecoration: "none" }}>
        ArtyLand
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

export default Footer;
