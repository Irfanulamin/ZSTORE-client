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
    <div className="p-6 md:p-8 rounded-lg  bg-[#b87333]  ">
      <div className="flex items-center justify-center gap-2 mb-6">
        <PiTimerDuotone className="w-8 h-8 text-white" />
        <h1 className="text-2xl font-semibold text-center text-white">
          Recent Orders
        </h1>
      </div>
      <div className="grid gap-y-6">
        {data &&
          data
            .slice()
            .reverse()
            .slice(0, 3)
            .map((item: any, index: number) => (
              <div
                key={item._id}
                className="p-4 md:p-6 rounded-lg bg-white grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 items-center shadow-lg"
              >
                {/* Index + Avatar */}
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold text-[#b87333]">
                    {index + 1}
                  </h4>
                  <Avatar
                    isBordered
                    src="https://i.ibb.co/XWqvgyv/Minimalist-Avatar-Illustration.jpg"
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex flex-col md:justify-between md:flex-row">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold text-[#b87333]">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-[#555555]">
                      {item.email}
                    </p>
                  </div>
                </div>

                <div className="flex  items-center gap-3">
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                    <p className="text-base font-semibold text-[#555555]">
                      {item.location}
                    </p>
                  </div>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="solid"
                        className="bg-[#ffcc00] text-black hover:bg-[#ffb300] px-3 py-1 text-xs md:text-sm"
                      >
                        Ordered Items <ShoppingCart className="w-4 h-4" />
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
                  <div className="text-[#228B22] bg-[#f0f0f0] p-2 rounded font-semibold text-sm md:text-lg">
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
              </div>
            ))}
      </div>
    </div>
  );
};

export default RecentOrder;
