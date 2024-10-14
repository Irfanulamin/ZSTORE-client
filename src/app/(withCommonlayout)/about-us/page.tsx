/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Package,
  Truck,
  Headphones,
  CreditCard,
} from "lucide-react";

export default function AboutPage() {
  const facilities = [
    { icon: Package, text: "Wide range of high-quality products" },
    { icon: CreditCard, text: "Affordable prices" },
    { icon: CheckCircle, text: "Seamless shopping experience" },
    { icon: Headphones, text: "Top-notch customer service" },
  ];

  const reasons = [
    "Exceptional quality products",
    "Competitive prices",
    "User-friendly shopping platform",
    "Dedicated customer support",
    "Fast and reliable shipping",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About <span className="text-primary">Z-Store</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to Z-Store, your one-stop destination for all your shopping
            needs. We pride ourselves on offering a wide range of high-quality
            products at affordable prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Our Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <facility.icon className="h-6 w-6 text-primary" />
                      <span>{facility.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {reasons.map((reason, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {reason}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Z-Store, our mission is to provide our customers with a seamless
            shopping experience and top-notch customer service. We strive to be
            your go-to destination for electronics, fashion, home goods, and
            gifts.
          </p>
          <p className="mt-4 text-xl text-primary font-semibold">
            Thank you for choosing Z-Store. Happy shopping!
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
