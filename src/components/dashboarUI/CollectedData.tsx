import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import { PiTimerDuotone } from "react-icons/pi";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";
import { Avatar } from "@nextui-org/react";

const CollectedData = () => {
  const { data } = useGetOrdersQuery("");
  return (
    <div className="grid  grid-cols-1">
      <div className="flex flex-wrap items-center justify-start gap-6 m-12">
        <div className=" col-start-2 drop-shadow-xl bg-blue-500 rounded p-4 inline-block shadow-2xl">
          <h4 className="text-lg text-white">Gross Sales :- </h4>
          <div>
            <p className="text-lg text-white font-semibold text-start">
              {data &&
                data
                  .reduce(
                    (acc: any, item: any) =>
                      acc +
                      item.cart.reduce(
                        (sum: any, cartItem: any) =>
                          sum + cartItem.amount * cartItem.quantity,
                        0
                      ),
                    0
                  )
                  .toFixed(2)}
              $
            </p>
          </div>
        </div>
        <div className=" col-start-2 bg-blue-400 rounded p-4 inline-block shadow-2xl">
          <h4 className="text-lg text-white">Total Orders :- </h4>
          <div>
            <p className="text-lg text-white font-semibold text-start">
              {data && data.length}
            </p>
          </div>
        </div>
        <div className=" col-start-2 bg-slate-800 sha rounded p-4 inline-block shadow-2xl">
          <h4 className="text-lg text-white">Gross Profit :- </h4>
          <div>
            <p className="text-lg text-white font-semibold text-start">
              {data &&
                data
                  .reduce(
                    (acc: any, item: any) =>
                      acc +
                      item.cart.reduce(
                        (sum: any, cartItem: any) =>
                          sum + cartItem.amount * cartItem.quantity * 0.25,
                        0
                      ),
                    0
                  )
                  .toFixed(2)}
              $
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 p-6 rounded shadow-2xl ">
        <div className="flex items-center gap-1 ">
          <PiTimerDuotone className="w-8 h-8" />
          <h1 className="text-lg font-medium text-center">Recent Orders</h1>
        </div>
        <div className=" w-full flex flex-col gap-y-4 my-6 col-start-1 col-end-2">
          {data &&
            data
              .slice(0, 3)
              .reverse()
              .map((item: any, index: number) => (
                <div
                  key={item._id}
                  className="p-6 gap-1 rounded bg-blue-300 flex flex-wrap justify-around items-center gap-x-1 md:gap-x-4 lg:gap-x-8 w-full"
                >
                  <div className="hidden md:block lg:block">
                    <h4 className="text-semibold  text-xl">{index + 1}</h4>
                  </div>
                  <div>
                    <Avatar
                      isBordered
                      src="https://i.ibb.co/XWqvgyv/Minimalist-Avatar-Illustration.jpg"
                    />
                  </div>
                  <div>
                    <p className="text-xs md:text-lg lg:text-lg font-bold text-start">
                      {item.name}
                    </p>
                    <p className="text-xs font-semibold hidden md:block lg:block">
                      {item.email}
                    </p>
                  </div>
                  <div>
                    <div className=" flex justify-center">
                      <FaLocationDot className="w-4 h-4  text-red-500" />
                      <div>
                        <p className="text-xs  font-semibold ">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="shadow">
                          Ordered Items <FaShoppingCart />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        {item.cart.map((item: any, index: number) => (
                          <DropdownItem key={index}>
                            <span className="text-black font-semibold">
                              {item.name}
                            </span>
                            <span className="mx-1 text-red-500 font-semibold">
                              x{item.quantity}
                            </span>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <div>
                    <p className="text-xs md:text-base lg:text-base text-green-500 font-semibold text-start"></p>
                  </div>
                  <div>
                    <p className="text-xs md:text-base lg:text-base text-green-700 font-semibold text-start">
                      {item.cart
                        .reduce(
                          (acc: any, item: any) =>
                            acc + item.amount * item.quantity,
                          0
                        )
                        .toFixed(2)}
                      $
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CollectedData;
