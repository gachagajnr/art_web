 import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'react-router-dom'
import { Formik,  } from "formik";

import * as Yup from "yup";
import Stack from "react-bootstrap/Stack";

function SignupForm() {
 
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Must be longer than 2 characters")
      .max(10, "Nice try, nobody has a first name that long")
      .required("Required"),
  });

  return (
    <>
      <h3 style={{ margin: 20, fontWeight: 200 }}>
        Create a new ArtyLand account
      </h3>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formFirstname">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                    type="firstname"
                    placeholder="Firstname"
                    name="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    className={
                      touched.firstname && errors.firstname ? "has-error" : null
                    }
                  />
                  {touched.firstname && errors.firstname ? (
                    <div className="error-message">{errors.firstname}</div>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                    type="lastname"
                    placeholder="Lastname"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    className={
                      touched.lastname && errors.lastname ? "has-error" : null
                    }
                  />
                  {touched.lastname && errors.lastname ? (
                    <div className="error-message">{errors.lastname}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "has-error" : null}
              />
              {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={
                  touched.password && errors.password ? "has-error" : null
                }
              />
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : null}
            </Form.Group>

            <div class="d-grid gap-2">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                create my Artyland account
              </Button>
            </div>
            <Stack style={{ textAlign: "center", margin: 5 }}>
              <hr />

              <Link
                to="/login"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Login to your ArtyLand account
              </Link>
            </Stack>
            {/* </FormikForm> */}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignupForm;
