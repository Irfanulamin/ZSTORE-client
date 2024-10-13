"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";

const COLORS = ["#1C1C1C", "#2F2F2F", "#6E6E6E", "#A8A8A8", "#000000"];

export default function LocationChart() {
  const { data, isLoading } = useGetOrdersQuery("");

  const processData = (rawData: any) => {
    if (!Array.isArray(rawData) || rawData.length === 0) {
      return [];
    }

    const locationMap = new Map();

    rawData.forEach((item) => {
      const location = item.location || "Unknown";
      const revenue = Number(
        (item.cart || [])
          .reduce((acc: any, cartItem: any) => {
            const amount = Number(cartItem.amount) || 0;
            const quantity = Number(cartItem.quantity) || 0;
            return acc + amount * quantity;
          }, 0)
          .toFixed(2)
      );

      if (locationMap.has(location)) {
        locationMap.set(location, locationMap.get(location) + revenue);
      } else {
        locationMap.set(location, revenue);
      }
    });

    return Array.from(locationMap, ([location, revenue]) => ({
      location,
      revenue,
    }));
  };

  const chartData = processData(data);

  const totalRevenue = chartData
    .reduce((sum, item) => sum + (item.revenue || 0), 0)
    .toFixed(2);

  if (isLoading) {
    return (
      <Card className="w-full max-w-md h-[400px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
      </Card>
    );
  }

  if (chartData.length === 0) {
    return (
      <Card className="w-full max-w-md h-[400px] flex flex-col items-center justify-center">
        <CardContent>
          <p className="text-center mb-4">No data available.</p>
          <button
            onClick={() => window.location.reload()} // Reloads the page
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            Reload
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-primary" />
          <CardTitle className="text-base md:text-xl lg:text-2xl font-bold">
            Revenue by Location
          </CardTitle>
        </div>
        <Badge variant="outline" className="text-sm">
          Total: ${totalRevenue}
        </Badge>
      </CardHeader>
      <CardContent>
        <ChartContainer>
          {chartData && (
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="revenue"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <ChartTooltipContent
                        content={
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {data.location}
                            </span>
                            <span className="font-bold text-primary">
                              ${data.revenue.toFixed(2)}
                            </span>
                            <span className="text-[0.70rem] text-muted-foreground">
                              {(
                                (data.revenue / parseFloat(totalRevenue)) *
                                100
                              ).toFixed(2)}
                              % of total
                            </span>
                          </div>
                        }
                      />
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          )}
        </ChartContainer>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {chartData.map((item, index) => (
            <div key={item.location} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <CardDescription className="text-sm font-medium">
                {item.location}
              </CardDescription>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
