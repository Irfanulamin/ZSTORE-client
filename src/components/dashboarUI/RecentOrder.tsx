import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MapPin, ShoppingCart } from "lucide-react";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";
import { PiTimerDuotone } from "react-icons/pi";

const RecentOrder = () => {
  const { data } = useGetOrdersQuery("");
  return (
    <div className="p-8 rounded-lg bg-[#b87333]">
      <div className="flex items-center gap-2 mb-4">
        <PiTimerDuotone className="w-8 h-8 text-white" />
        <h1 className="text-xl font-semibold text-center text-white">
          Recent Orders
        </h1>
      </div>
      <div className="w-full flex flex-col gap-y-4 my-6">
        {data &&
          data
            .slice(0, 3)
            .reverse()
            .map((item: any, index: number) => (
              <div
                key={item._id}
                className="p-6 gap-2 rounded-lg bg-[#f5f5dc] flex flex-wrap justify-between items-center shadow-md"
              >
                <div className="hidden md:block">
                  <h4 className="text-lg font-semibold text-[#b87333]">
                    {index + 1}
                  </h4>
                </div>
                <div>
                  <Avatar
                    isBordered
                    src="https://i.ibb.co/XWqvgyv/Minimalist-Avatar-Illustration.jpg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-md font-bold text-[#b87333]">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold hidden md:block text-[#555555]">
                    {item.email}
                  </p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <p className="text-xs font-semibold text-[#555555]">
                    {item.location}
                  </p>
                </div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="solid"
                      className="flex items-center gap-1 bg-[#ffcc00] text-black hover:bg-[#ffb300]"
                    >
                      Ordered Items <ShoppingCart />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Ordered Items"
                    className="bg-[#f5f5dc]"
                  >
                    {item.cart.map((cartItem: any, index: number) => (
                      <DropdownItem key={index}>
                        <span className="text-[#b87333] font-semibold">
                          {cartItem.name}
                        </span>
                        <span className="mx-1 text-red-500 font-semibold">
                          x{cartItem.quantity}
                        </span>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                <div className="text-[#228B22] bg-white p-2 rounded font-semibold text-lg">
                  {item.cart
                    .reduce(
                      (acc: any, cartItem: any) =>
                        acc + cartItem.amount * cartItem.quantity,
                      0
                    )
                    .toFixed(2)}{" "}
                  $
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default RecentOrder;
