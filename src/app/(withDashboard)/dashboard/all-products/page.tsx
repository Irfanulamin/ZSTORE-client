import ProductTable from "@/components/ui/ProductTable";
import { TProduct } from "@/types/producttypes";
import Image from "next/image";
import React from "react";

const AllProductsDashboard = async () => {
  const res = await fetch("http://localhost:5000/men-clothing");
  const products = await res.json();

  return (
    <div>
      <div className=" overflow-scroll">
        <table className="table  w-full ">
          <thead>
            <tr>
              <th>SL no.</th>
              <th>Item</th>
              <th>Name</th>
              <th>Category</th>
              <th>Tag</th>
              <th>Price</th>
            </tr>
          </thead>
          {products &&
            products.map((product: TProduct, index: number) => (
              <ProductTable product={product} index={index} key={product._id} />
            ))}
        </table>
      </div>
    </div>
  );
};

export default AllProductsDashboard;
