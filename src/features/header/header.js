import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Cart2 } from "react-bootstrap-icons";

function Header({ isAuthenticated, name, cartTotal }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ArtyLand
        </Navbar.Brand>

        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/sell">
              Sell
            </Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  {name}
                  <Link to="/profile" />
                </Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/cart">
                  <Cart2 size={25} />
                  <Badge pill bg="primary">
                    {cartTotal}
                  </Badge>
                </Nav.Link>{" "}
              </>
            ) : (
              <>
                <Nav.Link to="/login" as={Link}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  <Cart2 size={25} />
                  <Badge pill bg="primary">
                    {cartTotal}
                  </Badge>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  name: PropTypes.string,
  cartTotal: PropTypes.number,
};

export default Header;
