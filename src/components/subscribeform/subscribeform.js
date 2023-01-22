import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import SocialIcons from "components/socialicons/socialicons";
import QuickLinks from "components/quicklinks/quicklinks";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SubscribeForm() {
  return (
    <Container>
      <h4 className="text-center pt-5">Follow Us More On;</h4>
      <Row>
        <Col sm={8}>
          <div className="mt-1 p-5 d-flex justify-content-center">
            <QuickLinks />
          </div>
        </Col>
        <Col sm={4}>
          <div className="mt-2 p-5 d-flex justify-content-center">
            <SocialIcons />
          </div>
          <h5 className="text-center">Subscribe To Mailing List</h5>
          <div className="mt-1 p-3 d-flex justify-content-center">
            <Stack direction="horizontal" gap={2}>
              <Form.Control
                className="me-auto"
                placeholder="Enter your email address"
              />
              <Button variant="primary">Subscribe</Button>
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default SubscribeForm;
