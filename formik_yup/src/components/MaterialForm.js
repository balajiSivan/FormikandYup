import { Button, Box } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import TextField from "@material-ui/core/TextField";
const initialValues = {
  email: "",
  name: "",
  password: "",
};

const MaterialForm = () => {
  return (
    <div className="materialForm">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
        validationSchema={object({
          email: string()
            .required("Please Enter Your Email ID")
            .email("Invalid Email"),
          name: string()
            .required("Please Enter Your Name")
            .min(2, "Name Too Short"),
          password: string()
            .required("Please Enter Your Password")
            .min(7, "Password should be mininum 7 characters"),
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name="email"
              y
              type="email"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Email"
              fullWidth
              errors={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
            />
            <Box height={14} />
            <Field
              name="name"
              type="name"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Name"
              fullWidth
              errors={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />
            <Box height={14} />
            <Field
              name="password"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Password"
              fullWidth
              errors={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
            />
            <Box height={14} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!dirty || !isValid}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
