import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import LoginForm from "components/loginform/loginform";

export default function Login() {
  return (
    <div>
      <Container>
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
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
