"use client";
import Container from "@/components/ui/Container";
import { setUser } from "@/redux/feature/authSlice";
import { useLoginUserMutation } from "@/redux/feature/loginApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [login] = useLoginUserMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: process.env.NEXT_PUBLIC_DEFAULT_EMAIL,
      password: process.env.NEXT_PUBLIC_DEFAULT_PASS,
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: FieldValues) => {
    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      const response: any = await login(loginData);

      if (response.data && response.data.success) {
        dispatch(setUser(formData.email));
        toast({
          variant: "success",
          title: "Yippie! Successfully Logged In 😎✅",
        });
        router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: response.data.message,
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  };
  return (
    <div className="min-h-[90vh] h-[100%] pt-6 md:pt-24 lg:pt-36 bg-gradient-to-b from-gray-100 to-gray-200">
      <Container>
        <div className="flex flex-col  lg:flex-row justify-center items-center gap-8">
          <div className="flex justify-center">
            <Image
              src="/login.png"
              alt="login-image"
              width={400}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full  lg:w-1/2 rounded-md p-8 bg-white shadow-lg">
            <div>
              <h2 className="text-left text-4xl py-4 lg:text-5xl font-bold text-slate-800">
                Welcome Back!
              </h2>
              <p className="text-slate-600 text-sm py-2 lg:py-4 text-left">
                Log in with your credentials to access your admin dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col">
                <label className="text-left text-black font-medium text-lg">
                  Email
                </label>
                <input
                  className="focus:outline-slate-600 text-slate-600 font-medium rounded-lg p-3 border-2 border-slate-300 focus:border-slate-600 focus:ring-2 focus:ring-slate-600 transition-shadow duration-200"
                  placeholder="Enter your email"
                  type="email"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-left text-black font-medium text-lg">
                  Password
                </label>
                <input
                  className="focus:outline-slate-600 text-slate-600 font-medium rounded-lg p-3 border-2 border-slate-300 focus:border-slate-600 focus:ring-2 focus:ring-slate-600 transition-shadow duration-200"
                  placeholder="Enter your password"
                  type="password"
                  {...register("password")}
                  id="password"
                />
              </div>

              <div className="text-left py-2">
                <Link
                  href="/register"
                  className="text-slate-600 hover:underline"
                >
                  New here?{" "}
                  <span className="text-blue-600 font-medium">
                    Register Now
                  </span>
                </Link>
              </div>

              <div className="py-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-slate-600 text-base font-bold text-white rounded-lg border-b-4 border-slate-700 hover:bg-slate-700 active:scale-95 transition-transform duration-200"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
