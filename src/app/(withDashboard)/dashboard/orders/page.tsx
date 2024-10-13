"use client";
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/feature/orderPostApi";

import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RiTimer2Line } from "react-icons/ri";
import { Switch } from "@nextui-org/switch";
import { SubmitHandler } from "react-hook-form";
import { IoMdDoneAll } from "react-icons/io";
import { Avatar } from "@nextui-org/react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";

const OrderControlPanel = () => {
  const { data } = useGetOrdersQuery("");
  const [updateMutation] = useUpdateOrderMutation();

  const onSubmit: any = async (id: any) => {
    try {
      const { data }: any = await updateMutation({
        id,
      });
      console.log(data);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-4 my-6  p-6">
      {data &&
        data.slice().map((item: any, index: number) => (
          <div
            key={item._id}
            className="p-4 md:p-6 gap-4 rounded-lg bg-[#f5f5dc] flex flex-col md:flex-row justify-between items-center shadow-md"
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
            <div className="flex flex-col flex-grow">
              <p className="text-md font-bold text-[#b87333]">{item.name}</p>
              <p className="text-xs font-semibold hidden md:block text-[#555555]">
                {item.email}
              </p>
            </div>
            <div className="flex items-center flex-shrink-0">
              <FaLocationDot className="w-4 h-4 text-red-500" />
              <p className="text-xs font-semibold text-[#555555]">
                {item.location}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="solid"
                    className="flex items-center gap-1 bg-[#ffcc00] text-black hover:bg-[#ffb300]"
                  >
                    Ordered Items <FaShoppingCart />
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
            </div>
            <div className="text-[#228B22] bg-white p-2 rounded font-semibold text-lg flex-shrink-0">
              {item.cart
                .reduce(
                  (acc: any, cartItem: any) =>
                    acc + cartItem.amount * cartItem.quantity,
                  0
                )
                .toFixed(2)}{" "}
              $
            </div>
            <div className="flex items-center flex-shrink-0">
              {item.status === "pending" && (
                <>
                  <RiTimer2Line className="text-yellow-500 w-4 h-4" />
                  <p className="text-yellow-500 text-xs">{item.status}</p>
                </>
              )}
              {item.status === "Delivered" && (
                <>
                  <RiTimer2Line className="text-green-500 w-4 h-4" />
                  <p className="text-green-500 text-xs">{item.status}</p>
                </>
              )}
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={() => onSubmit(item._id)}
                className="font-medium text-xs active:border-b-2 text-black bg-green-600 border-2 border-green-700 border-b-4 p-2 rounded"
              >
                <IoMdDoneAll className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderControlPanel;
