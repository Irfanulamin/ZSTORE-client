import React from "react";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";
import { Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  Chart,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { BiWorld } from "react-icons/bi";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement
);

const LocationChart = () => {
  const { data } = useGetOrdersQuery("");

  const labels = data ? data.map((item: any) => item.location) : "";

  const dataset = data
    ? data
        .slice()
        .reverse()
        .map((item: any) =>
          Number(
            item.cart
              .reduce(
                (acc: number, cartItem: any) =>
                  acc + cartItem.amount * cartItem.quantity,
                0
              )
              .toFixed(2)
          )
        )
    : [];
  return (
    <div>
      <div className="flex items-center gap-1 ">
        <BiWorld className="w-8 h-8" />
        <h1 className="text-xl font-medium text-center">Revenue Zone</h1>
      </div>
      {data && (
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                label: "Revenue",
                data: dataset,
                backgroundColor: [
                  "rgba( 255, 195, 0 )",
                  "rgba(88, 24, 69 )",
                  "rgba(144, 12, 63)",
                ],
                borderColor: [
                  "rgba( 255, 195, 0 )",
                  "rgba(88, 24, 69 )",
                  "rgba(144, 12, 63)",
                ],
              },
            ],
          }}
        ></Doughnut>
      )}
    </div>
  );
};

export default LocationChart;
