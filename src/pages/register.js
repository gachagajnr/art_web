import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import SignupForm from "components/signupform/signupform";

export default function Register() {
  return (
    <Container>
      <Row
        style={{ display: "flex", alignItems: "center" }}
        // class="d-flex flex-wrap align-items-center"
      >
        <Col sm>
          <Stack direction="vertical">
            <h3 style={{ fontWeight: 200, fontSize: 45 }}>
              Explore | Sell | Buy Art
            </h3>
            Your Art Market.
          </Stack>
        </Col>
        <Col sm>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}
