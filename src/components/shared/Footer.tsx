import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black py-12 px-2 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start pb-10 gap-2 md:gap-4 lg:gap-10">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl lg:text-4xl font-extrabold text-black bg-white">
            ZStore
          </h1>
        </div>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/flash-sale"
            className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white"
          >
            Trending Products
          </Link>
          <Link
            href="/categories"
            className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white"
          >
            Categories
          </Link>
          <Link
            href="/about-us"
            className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white"
          >
            About us
          </Link>
          <Link
            href="/contact-us"
            className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/customer-care"
            className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white"
          >
            Customer Care
          </Link>
        </div>
      </div>
      <hr className="" />
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center pt-10">
        <div>
          <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
            @ 2028. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 md:gap-x-10 lg:gap-x-12">
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
              Terms of Service
            </p>
          </div>
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
              Privacy Policy
            </p>
          </div>
          <div>
            <p className="text-xs md:text-base lg:text-lg  py-2  lg:py-4 text-white">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
