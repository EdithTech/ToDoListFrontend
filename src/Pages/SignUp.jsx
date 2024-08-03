import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import todologo from "../assets/Logo.svg";

const SignUp = () => {
  return (
    <>
      <div className="min-h-[230px] bg-black flex flex-col justify-center items-center relative">
        <img src={todologo} />
        <div className="min-h-[300px] min-w-[330px] flex flex-col justify-center items-center absolute top-40">
          <div className="rounded-lg border-solid border-2 p-4 h-full w-full">
            <Formik
              initialValues={{
                email: "",
                password: "",
                phone: "",
                fName: "",
                lName: "",
                username: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
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
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="font-bold text-2xl text-center">Sign Up</div>
                  <div className="flex gap-2">
                    <Input
                      label="First Name"
                      type="text"
                      name="fName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fName}
                    />

                    <Input
                      label="Last Name"
                      type="text"
                      name="lName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lName}
                    />
                  </div>
                  <Input
                    label="Phone"
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="text-black"
                  />
                  {errors.email && touched.email && errors.email}
                  <Input
                    label="Username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password}
                  <Button color="primary" type="submit" disabled={isSubmitting}>
                    Sign Up
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
