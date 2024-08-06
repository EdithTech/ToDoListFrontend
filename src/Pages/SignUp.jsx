import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import todologo from "../assets/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const backendUrl = "https://to-do-list-backend-five.vercel.app";
  const navigate = useNavigate();

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
                name:"",
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
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
                const response = await axios.post(
                  `${backendUrl}/user/signup`,
                  values
                );

                console.log("User Created", response.data);
                navigate('/login');
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

                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />

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
