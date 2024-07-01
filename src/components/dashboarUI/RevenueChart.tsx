import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";
import { Bar } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  Chart,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const RevenueChart = () => {
  const { data } = useGetOrdersQuery("");

  const labels = data
    ? data.map((item: any, index: number) => `Order #${index + 1}`)
    : "";

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
        <MdAttachMoney className="w-8 h-8" />
        <h1 className="text-xl font-medium text-center">Total Revenues</h1>
      </div>
      {data && (
        <Bar
          data={{
            labels,
            datasets: [
              {
                label: "Revenue",
                data: dataset,
                backgroundColor: ["rgba(199, 0, 57 )", "rgba(255, 87, 51)"],
                borderRadius: 12,
              },
            ],
          }}
        ></Bar>
      )}
    </div>
  );
};

export default RevenueChart;
