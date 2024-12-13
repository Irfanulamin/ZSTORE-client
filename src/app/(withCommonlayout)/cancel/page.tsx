"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { XCircle } from "lucide-react";
import { clearCart } from "@/redux/feature/cartSlice";
import Link from "next/link";

export default function CancelPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <div className="mb-6">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but your transaction could not be processed.
        </p>

        <Link
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go to Homepage
        </Link>
        <p className="mt-4 text-sm text-gray-500">
          If you continue to experience issues, please contact our support team.
        </p>
      </div>
    </div>
  );
}
