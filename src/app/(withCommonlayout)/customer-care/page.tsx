import Container from "@/components/ui/Container";
import React from "react";

const CustomerCarePage = () => {
  return (
    <div className=" min-h-screen py-24 h-full">
      <Container>
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Customer Service
        </h1>
        <p className="mt-4 text-left text-xl text-gray-600">
          At Z-Store, we prioritize customer satisfaction. Our dedicated support
          team is here to assist you with any questions or concerns you may
          have.
        </p>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Information:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">Email: support@zstore.com</li>
            <li className="text-gray-600">Phone: +1234567890</li>
          </ul>
        </div>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-gray-800">
            Common Questions:
          </h2>
          <p className="mt-4 text-gray-600">
            Here are some common questions we receive from our customers:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-blue-500 underline">
              How do I track my order?
            </li>
            <li className="text-blue-500 underline">
              What is your return policy?
            </li>
            <li className="text-blue-500 underline">
              Do you offer international shipping?
            </li>
            <li className="text-blue-500 underline">
              How can I update my account information?
            </li>
          </ul>

          <p className="mt-4 ">
            If you have a question that is not listed here, feel free to reach
            out to our{" "}
            <span className="text-blue-500 underline">support team.</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default CustomerCarePage;
