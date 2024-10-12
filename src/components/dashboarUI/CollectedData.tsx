import React from "react";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";

// Define the types for the order and cart items
interface CartItem {
  name: string;
  amount: number;
  quantity: number;
}

interface Order {
  _id: string;
  name: string;
  email: string;
  location: string;
  cart: CartItem[];
}

const CollectedData: React.FC = () => {
  const { data } = useGetOrdersQuery<Order[]>("");

  // Calculate gross sales and profit
  const grossSales = data
    ?.reduce(
      (acc: number, item: Order) =>
        acc +
        item.cart.reduce(
          (sum: number, cartItem: CartItem) =>
            sum + cartItem.amount * cartItem.quantity,
          0
        ),
      0
    )
    .toFixed(2);

  const grossProfit = data
    ?.reduce(
      (acc: number, item: Order) =>
        acc +
        item.cart.reduce(
          (sum: number, cartItem: CartItem) =>
            sum + cartItem.amount * cartItem.quantity * 0.25,
          0
        ),
      0
    )
    .toFixed(2);

  return (
    <div className="flex flex-col items-center justify-start gap-4 m-6">
      {" "}
      {/* Reduced margin */}
      <div className="flex flex-col space-y-4 w-full max-w-md">
        {" "}
        {/* Flex container for equal height */}
        <div className="bg-black rounded-lg p-4 flex justify-between items-center">
          {" "}
          {/* Adjusted padding */}
          <h4 className="text-lg text-white">Gross Sales:</h4>
          <p className="text-xl text-white font-bold">{grossSales} $</p>
        </div>
        <div className="bg-black rounded-lg p-4 flex justify-between items-center">
          {" "}
          {/* Adjusted padding */}
          <h4 className="text-lg text-white">Total Orders:</h4>
          <p className="text-xl text-white font-bold">{data?.length}</p>
        </div>
        <div className="bg-black rounded-lg p-4 flex justify-between items-center">
          {" "}
          {/* Adjusted padding */}
          <h4 className="text-lg text-white">Gross Profit:</h4>
          <p className="text-xl text-white font-bold">{grossProfit} $</p>
        </div>
      </div>
    </div>
  );
};

export default CollectedData;
