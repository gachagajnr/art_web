import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import LoginForm from "components/loginform/loginform";

export default function Login() {
  return (
    <div>
      <Container style={{ flex: 1, justifyContent: "space-between" }}>
        <Row class="d-flex flex-wrap align-items-center">
          <Col sm>
            <Stack direction="vertical">
              <h3 style={{ fontWeight: 200, fontSize: 45 }}>
                Explore | Sell | Buy Art
              </h3>
              Your Art Market.
            </Stack>
          </Col>
          <Col sm>
            <h3 style={{ fontWeight: 400, margin: 20 }}>Login To ArtyLand</h3>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
