"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CheckCircle } from "lucide-react";
import { clearCart } from "@/redux/feature/cartSlice";
import Link from "next/link";

export default function SuccessPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction has been processed successfully.
        </p>
        <Link
          href="/"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
