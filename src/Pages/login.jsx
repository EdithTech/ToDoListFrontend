import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import todologo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import store from "../utils/index.js";
import {apiClient} from "../services"

// const backendUrl = "https://to-do-list-backend-five.vercel.app";
// const backendUrl = "http://localhost:3000";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      // const response = await axios.post(
      //   `${backendUrl}/user/login`,
      //   values
      // );

      // console.log("be url", process.env.REACT_APP_BACKEND_URL);
      

      const response = await apiClient.post(
        `/user/login`,
        values
      );

      const { token, userId } = response?.data || {};

      if (!token) {
        setErrors({ password: "Invalid username or password" });
        setSubmitting(false);
        return;
      }

      store.set("token", token);
      store.set("userId", userId);

      navigate('/');
    } catch (error) {
      setErrors({ password: "Invalid username or password" });
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="min-h-[230px] bg-black flex flex-col justify-center items-center relative">
        <img src={todologo} />
        <div className="min-h-[300px] min-w-[330px] flex flex-col justify-center items-center absolute top-40">
          <div className="rounded-lg border-solid border-2 p-4 h-full w-full">
            <Formik
              initialValues={{
                password: "",
                username: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              onSubmit={handleLogin}
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="font-bold text-2xl text-center">Log In</div>
                  <Input
                    label="Username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-500">{errors.username}</div>
                  )}
                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="text-red-500">{errors.password}</div>
                  )}
                  <Button color="primary" type="submit" disabled={isSubmitting}>
                    Log In
                  </Button>
                  <div className="flex justify-center text-blue-400">
                    <Link to='/signup'>Signup</Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
