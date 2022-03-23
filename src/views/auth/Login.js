import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/Input";
import axios from "axios";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, "contraseña muy corta!")
      .max(50, "contraseña muy larga!")
      .required(),
  })
  .required();

export default function Login() {
  const { addToast } = useToasts();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/users/login",
        data
      );
      localStorage.setItem("isLogged", true);
      addToast(result.data.message, { appearance: "success" });
      setTimeout(() => {
        history.push("/admin");
      }, 500);
    } catch (error) {
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-slate-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <hr className="mt-4 border-b-1 border-slate-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    label="email"
                    register={register}
                    required
                    name="email"
                    error={errors.email?.message}
                  />

                  <Input
                    label="password"
                    type="password"
                    name="password"
                    register={register}
                    required
                    error={errors.password?.message}
                  />

                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-slate-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-slate-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
