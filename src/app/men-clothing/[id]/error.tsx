"use client";

import Container from "@/components/ui/Container";
import Link from "next/link";
import React from "react";

export default function ErrorPageForSingleProduct({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[90vh] h-full pt-24">
      <Container>
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold py-2">
            There was a problem.{" "}
            <span className="text-red-700">{error.message}</span>
          </h1>
          <p className="py-1 font-medium text-xl">
            We could not found the page you were looking for
          </p>
          <p className="py-1 font-medium text-lg">
            Go back to the{" "}
            <Link href="/" className=" underline text-blue-600">
              Home
            </Link>
          </p>
        </div>
        <button
          className="bg-black text-white p-2 rounded"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </Container>
    </div>
  );
}
