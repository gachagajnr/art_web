import Nav from "react-bootstrap/Nav";
import { artCategories } from "constants/artCategories";
import { Link } from "react-router-dom";

function CategoryHeader() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      {artCategories.map((category) => {
        return (
          <Nav.Item>
            <Nav.Link  >
              <Link to={category.path}>{category.name}</Link>
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
}

export default CategoryHeader;
