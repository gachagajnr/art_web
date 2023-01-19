import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";
import { Cart2 } from "react-bootstrap-icons";

function Header({ isAuthenticated, name, cartTotal }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">
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
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/sell">Sell</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link href="/profile">{name}</Nav.Link>
                <Cart2 className="text-center" size={25} />
              </>
            ) : (
              <>
                <Nav.Link eventKey={2} href="/login">
                  Login
                </Nav.Link>{" "}
                <Nav.Link eventKey={2} href="/cart">
                  <Cart2 size={25} />
                  <Badge pill bg="primary">{cartTotal}</Badge>
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
