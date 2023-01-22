import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { artCategories } from "constants/artCategories";
import { Link } from "react-router-dom";
import { Filter } from "react-bootstrap-icons";

function CategoryHeader() {
  return (
    <Navbar sticky="top" bg="light" variant="light" className="border-top">
      <div
        style={{
          flex: 1,
          display: " flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            display: " flex",
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
            flexWrap: "wrap",
          }}
        >
          {artCategories.map((category) => {
            return (
              <div style={{ padding: 8 }}>
                <Link
                  as={Link}
                  to={category.path}
                  style={{
                    textDecoration: "none",
                    fontWeight: 400,
                    fontColor: "grey",
                  }}
                >
                  {category.name}
                </Link>
              </div>
            );
          })}
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width:"auto" }}
          />
          <Filter size={35} color="#c1c1c1"/>
        </Form>
      </div>
    </Navbar>
  );
}

export default CategoryHeader;
