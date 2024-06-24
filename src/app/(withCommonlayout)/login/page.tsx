import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
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
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col w-full">
                  <label className="text-left text-black font-semibold text-lg">
                    Email
                  </label>
                  <input
                    className="focus:outline-slate-600 text-slate-600 font-semibold rounded-md p-2 border-2 border-black"
                    placeholder="email"
                    // {...register("email")}
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
                    // {...register("password")}
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
