"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LogOutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);

  // Google Login Handlers
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    console.log(data, "google login data");

    //setLoading(true);
  };


  // GitHub Login Handlers
  const handleGithubLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data, "github login data");
  };


  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log({ name, image, email, password });
    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
    });
    console.log(data, error, "signup data", "signup error");

    if (data) {
      alert("You have successfully signed up! Please log in to continue.");
      router.push("/login");
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Log Out</h1>

      {/* Google Login Button */}
      <div>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center justify-center gap-3 w-full py-3 rounded-xl 
      bg-white text-black font-medium shadow-md hover:shadow-lg transition 
      disabled:opacity-70"
        >
          {loading ? (
            <span className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></span>
          ) : (
            <>
              <div className="flex items-center border-2 border-gray-200 rounded-full gap-3">
                <FcGoogle size={22} />
              <span>Continue with Google</span>
              </div>
            </>
          )}
        </button>
      </div>

      {/* 🐙 GitHub Button */}
      <div className="px-6 mb-6">
        <button
          onClick={handleGithubLogin}
          disabled={loadingGithub}
          className="flex items-center justify-center gap-3 w-full py-3 rounded-xl 
          bg-[#111] text-white font-medium shadow-md hover:shadow-lg transition 
          disabled:opacity-70"
        >
          {loadingGithub ? (
            <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <>
              <div className="flex items-center border-2 border-gray-200 rounded-full gap-3">
                <FaGithub size={22} />
              <span>Continue with GitHub</span>
              </div>
            </>
          )}
        </button>
      </div>

      <Form className="flex w-96 mx-auto flex-col gap-6" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </Card>
  );
}
