import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {isLogin ? (
        <>
          <h3 style={{ fontWeight: 400, margin: 20, fontWeight: 200 }}>
            Login to your ArtyLand account
          </h3>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div class="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            <Stack style={{ textAlign: "center", margin: 5 }}>
              {"Or"}
              <h6
                onClick={() => setIsLogin(!isLogin)}
                style={{ cursor: "pointer" }}
              >
                Create a new Artyland account
              </h6>
            </Stack>
          </Form>
        </>
      ) : (
        <>
          <h3 style={{ fontWeight: 400, margin: 20, fontWeight: 200 }}>
            Create a new ArtyLand account
          </h3>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div class="d-grid gap-2">
              <Button variant="primary" type="submit">
                Create a new Artyland account
              </Button>
            </div>
            <Stack style={{ textAlign: "center", margin: 5 }}>
              {"Or"}
              <h6
                // cursor="pointer"
                onClick={() => setIsLogin(!isLogin)}
                style={{ cursor: "pointer" }}
              >
                Login to your account
              </h6>
            </Stack>
          </Form>
        </>
      )}
    </>
  );
}

export default LoginForm;
