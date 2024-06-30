"use client";
import Container from "@/components/ui/Container";
import { setUser } from "@/redux/feature/authSlice";
import { useLoginUserMutation } from "@/redux/feature/loginApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const LoginPage = () => {
  const [login] = useLoginUserMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: FieldValues) => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      const response: any = await login(loginData);

      if (response.data && response.data.success) {
        console.log(formData.email);
        dispatch(setUser(formData.email));
        console.log("User Login successfully");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };
  return (
    <div className="min-h-[90vh] h-[100%] pt-6 md:pt-24 lg:pt-36">
      <Container>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-1 ">
          <div>
            <Image
              src="/login.png"
              alt="login-image"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2  rounded-md p-8">
            <div>
              <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-slate-600">
                Login!
              </h2>
              <p className="text-black text-sm  py-2 lg:py-4 text-left ">
                Enter your email and password to access power of a admin.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col w-full">
                  <label className="text-left text-black font-semibold text-lg">
                    Email
                  </label>
                  <input
                    className="focus:outline-slate-600 text-slate-600 font-semibold rounded-md p-2 border-2 border-black"
                    placeholder="email"
                    type="email"
                    {...register("email")}
                    id="email"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-black text-left font-semibold text-lg`">
                    Password
                  </label>
                  <input
                    className="focus:outline-slate-600 text-slate-600 font-semibold rounded-md p-2 border-2 border-black"
                    placeholder="password"
                    {...register("password")}
                    type="password"
                    id="password"
                  />
                </div>
              </div>
              <div className="text-left py-2">
                <Link
                  href="/register"
                  className="
                  text-black hover:underline"
                >
                  If you are new,{" "}
                  <span className="text-slate-600">Register Now</span>
                </Link>
              </div>

              <div className=" py-2">
                <button
                  type="submit"
                  className="rounded w-full py-4 bg-slate-600 text-base font-bold text-white border-slate-900 border-2 border-b-4 active:border-b-2 hover:border-slate-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      ;
    </div>
  );
};

export default LoginPage;
