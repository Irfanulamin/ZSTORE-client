"use client";
import React from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { useRegisterUserMutation } from "@/redux/feature/registerApi";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const RegisterPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [registration] = useRegisterUserMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    try {
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      const response: any = await registration(registerData);

      if (response.data && response.data.success) {
        toast({
          variant: "success",
          title: "Yippie! Account has been registered.",
          description: "Use Your Credentials To Login.",
        });
        router.push("/login");
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
    <div className="min-h-[90vh] h-[100%] pt-6 md:pt-24 lg:pt-36">
      <Container>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-1 ">
          <div>
            <Image
              src="/register.png"
              alt="login-image"
              width={400}
              height={400}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2  rounded-md p-8">
            <div>
              <h2 className="text-left text-3xl py-4 lg:text-5xl font-semibold  text-slate-600">
                Register!
              </h2>
              <p className="text-black text-sm  py-2 lg:py-4 text-left ">
                Enter your email and password to access power of a admin.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col w-full">
                  <label className="text-left text-black font-semibold text-lg">
                    Name
                  </label>
                  <input
                    className="focus:outline-slate-600 text-slate-600 font-semibold rounded-md p-2 border-2 border-black"
                    placeholder="username"
                    {...register("name")}
                    id="name"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-left text-black font-semibold text-lg">
                    Email
                  </label>
                  <input
                    className="focus:outline-slate-600 text-slate-600 font-semibold rounded-md p-2 border-2 border-black"
                    placeholder="email"
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
                    id="password"
                  />
                </div>
              </div>
              <div className="text-left py-2">
                <Link
                  href="/login"
                  className="
              text-black hover:underline"
                >
                  If you already signed up,{" "}
                  <span className="text-slate-600">Login Now</span>
                </Link>
              </div>

              <div className=" py-2">
                <button
                  type="submit"
                  className="rounded w-full py-4 bg-slate-600 text-base font-bold text-white border-slate-900 border-2 border-b-4 active:border-b-2 hover:border-slate-800"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
