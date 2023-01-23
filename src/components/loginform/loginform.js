import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Stack from "react-bootstrap/Stack";
// import { useLoginMutation } from "features/user/userApi";

function LoginForm() {
  // const [login, { data: user, isLoading, isSuccess, isError, error }] =
  //   useLoginMutation();

  // console.log(user);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be longer than 2 characters")
      .max(15, "Nice try, nobody has a first name that long")
      .required("Required"),
  });

  return (
    <>
      <h3 style={{ margin: 20, fontWeight: 200 }}>
        Login to your ArtyLand account
      </h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // login(values);
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
              <Button variant="primary" type="submit" >
                Login to Artyland account
              </Button>
            </div>
            <Stack style={{ textAlign: "center", margin: 5 }}>
              <hr />
              <Link
                to="/register"
                style={{ cursor: "pointer", textDecoration: "none" }}
              >
                Create a new ArtyLand account
              </Link>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default LoginForm;
