"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogOutpage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    //console.log(data);
    const { name, email, password, photo } = data;
    //console.log(name, email, password, photo);

    //Authentication
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration Successfull");
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
        <h1 className="text-3xl font-bold text-center mb-6">
          Login Your Account
        </h1>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(
            handleRegisterFunc,
          )} /*onSubmit={handleLoginFunc}*/
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              /*name="email"*/
              {...register("name", { required: "Name field is required" })}
              placeholder="Enter Your Name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              /*name="email"*/
              {...register("photo", { required: "Photo field is required" })}
              placeholder="Enter Your Photo URL"
            />
            {errors.photo && (
              <span className="text-red-500">{errors.photo.message}</span>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
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
              className="absolute right-8 top-4 cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">
            Log Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogOutpage;
