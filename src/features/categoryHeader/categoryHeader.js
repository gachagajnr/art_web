import Nav from "react-bootstrap/Nav";
import { artCategories } from "constants/artCategories";
import { Link } from "react-router-dom";

function CategoryHeader() {
  return (
    <Nav className="justify-content-center" activeKey="/">
      {artCategories.map((category) => {
        return (
          <Nav.Item>
            <Nav.Link as={Link} to={category.path} >
              {category.name}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default CategoryHeader;
