import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import SocialIcons from "features/socialicons/socialicons";

function SubscribeForm() {
  return (
    <div className="mt-2 d-flex justify-content-center">
      <Stack direction="vertical">
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
      </Stack>
    </div>
  );
}
export default SubscribeForm;
