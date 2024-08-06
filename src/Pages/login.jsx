import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import todologo from "../assets/Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import store from "../utils/index.js";

const backendUrl = "https://to-do-list-backend-five.vercel.app";
// const backendUrl = "http://localhost:3000";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
      console.log(values);
      const response = await axios.post(
        `${backendUrl}/user/login`,
        values
      );

      console.log("token", response?.data?.token);

      store.set("token", response?.data?.toekn);

      if(!response?.data?.token){
        navigate('/signup');
        return;
      }

      if(response?.data?.token){
        console.log("logged in success");
        
        navigate('/');
        return;
        // return (<App />);
        
      }
      setSubmitting(false);
    }
  

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
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="font-bold text-2xl text-center">Log In </div>
                  <Input
                    label="Username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    />
                    {errors.password && touched.password && errors.password}
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
                    LogIn
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login