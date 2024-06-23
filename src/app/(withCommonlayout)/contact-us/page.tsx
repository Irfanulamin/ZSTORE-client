/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import React from "react";

const ContactUsPage = () => {
  return (
    <div className=" min-h-screen h-full py-24">
      <Container>
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          We'd love to hear from you! Reach out to us with any questions,
          concerns, or feedback.
        </p>
        <div className="mt-8 text-left">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Information:
          </h2>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">Email: info@zstore.com</li>
            <li className="text-gray-600">Phone: +1234567890</li>
            <li className="text-gray-600">
              Address: 123 Main Street, City, Country
            </li>
          </ul>
        </div>
        <div className="mt-8 text-left bg-slate-900 p-20 rounded">
          <h2 className="text-xl font-semibold text-white bg-black">
            Send us a Message:
          </h2>
          <form className="mt-4">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="m-1 py-2 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="m-1 py-2 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 focus:ring-black focus:border-black block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
