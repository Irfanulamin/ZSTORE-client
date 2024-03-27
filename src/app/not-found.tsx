import Link from "next/link";
import Container from "../components/ui/Container";
import React from "react";
import notFound from "../../public/not-found.jpg";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="min-h-[90vh] h-full pt-24">
      <Container>
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold py-2">
            There was a problem.
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
        <div className="flex justify-center items-center w-full">
          <Image src={notFound} width={500} height={500} alt="not-found.jpg" />
        </div>
      </Container>
    </div>
  );
}
