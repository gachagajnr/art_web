// import { useNavigate } from "react-router-dom";

import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";
import FlatButton from "components/common/button";

function ArtDetailsCard({ item }) {
  // const navigate = useNavigate();

  const { name, description, price, category } = item;

  const titleStyle = {
    fontWeight: 200,
    fontSize: 13,
    borderBottom: "1px solid grey",
  };
  return (
    <Container>
      <Stack direction="vertical " gap={5}>
        <Row>
          <Col sm={8}>
            <img
              alt=""
              style={{ width: "100%", display: "block" }}
              height="auto"
              src="http://3.bp.blogspot.com/_EqZzf-l7OCg/TNmdtcyGBZI/AAAAAAAAAD8/KD5Y23c24go/s1600/homer-simpson-1280x1024.jpg"
            />
          </Col>
          <Col sm={4}>
            <div
              className="border p-4 rounded"
              style={{ backgroundColor: "#eee" }}
            >
              <Stack direction="vertical">
                {/* <p style={titleStyle}>Name:</p> */}
                <h6 class="text-end"> {name}</h6>
                {/* <hr /> */}
                <p style={titleStyle}>Category:</p>
                <h6 class="font-weight-light"> {category}</h6>
                {/* <hr /> */}
                <Stack direction="horizontal">
                  <div className="ms-auto" />
                  <p style={{ fontSize: 13, fontStyle: "italic" }}>By:</p>
                  <p
                    style={{ fontSize: 13, fontStyle: "italic", marginLeft: 5 }}
                    class="text-end"
                  >
                    Michae Aj Hun
                  </p>
                </Stack>

                <p style={titleStyle}>Orientation:</p>

                <h6 class="font-italic text-start"> Portrait</h6>

                <p style={titleStyle}>Size</p>
                <p class="font-italic text-start"> 40cm 60cm</p>
                {/* <hr /> */}
                <Stack direction="horizontal" gap={2}>
                  <div className="ms-auto" />
                  <p>KES</p>
                  <h6 style={{ fontSize: 25, fontWeight: 400 }}> {price}</h6>
                </Stack>
                <div className="d-grid gap-2 p-b-4">
                  <FlatButton variant="primary" name="Add To Cart" size="lg" />
                </div>
              </Stack>
            </div>
          </Col>
        </Row>
        <div>
          <h3>Description</h3>
          {description}
        </div>
      </Stack>
    </Container>
  );
}

ArtDetailsCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};
export default ArtDetailsCard;
