import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const WithCommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <>{children}</>
      <Footer></Footer>
    </>
  );
};

export default WithCommonLayout;
