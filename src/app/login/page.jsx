"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Loginpage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    //console.log(data);

    //Authentication
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Login Successfull");
    }
  };

  {
    /* const handleLoginFunc = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };*/
  }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(
            handleLoginFunc,
          )} /*onSubmit={handleLoginFunc}*/
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input"
              /*name="email"*/
              {...register("email", { required: "Email field is required" })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              /*name="password"*/
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Enter Your Password"
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>
        <p className="mt-4">
          Do not have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
