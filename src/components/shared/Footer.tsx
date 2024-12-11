import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-white bg-gradient-to-b from-white to-gray-400 inline-block text-transparent bg-clip-text">
              ZStore
            </h2>
            <p className="text-sm">
              Your one-stop shop for trendy fashion and accessories.
            </p>
            <div className="flex space-x-4">
              <button aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </button>
              <button aria-label="Twitter">
                <TwitterLogoIcon className="h-5 w-5" />
              </button>
              <button aria-label="Instagram">
                <InstagramLogoIcon className="h-5 w-5" />
              </button>
              <button aria-label="LinkedIn">
                <LinkedInLogoIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/flash-sale"
                  className="hover:text-white transition-colors"
                >
                  Trending Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/customer-care"
                  className="hover:text-white transition-colors"
                >
                  Customer Care
                </Link>
              </li>
              <li>
                <Link
                  href="/review"
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Get Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-white transition-colors"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">
            &copy; {currentYear} ZStore. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4">
            <Link
              href="/terms"
              className="text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-sm hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
