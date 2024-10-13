"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
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
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { TOrder } from "@/types/producttypes";
import { useGetOrdersQuery } from "@/redux/feature/orderPostApi";

export default function RevenueChart() {
  const { data, isLoading } = useGetOrdersQuery("");
  const [hoveredBar, setHoveredBar] = useState(null);

  const chartData = Array.isArray(data)
    ? data
        .slice() // Clone the array to prevent modifying the original array with reverse
        .reverse()
        .slice(0, 5)
        .map((item, index) => ({
          order: `Order #${data.length - index}`,
          revenue: Number(
            item.cart
              .reduce(
                (acc, cartItem) => acc + cartItem.amount * cartItem.quantity,
                0
              )
              .toFixed(2)
          ),
        }))
    : [];

  const totalRevenue = chartData
    .reduce((sum: any, item: any) => sum + item.revenue, 0)
    .toFixed(2);
  const averageRevenue: string = (totalRevenue / chartData.length).toFixed(2);
  const lastOrderRevenue = chartData[chartData.length - 1]?.revenue || 0;

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl h-[500px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl md:max-w-2xl lg:max-w-xl h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-6 w-6 text-primary" />
          <CardTitle className="text-base md:text-2xl font-bold">
            Revenue Insights
          </CardTitle>
        </div>
        <Badge variant="destructive" className="text-xs md:text-sm">
          <TrendingUp className="mr-1 h-4 w-4" />
          15%
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <CardDescription className="text-xs md:text-sm font-medium">
              Total Revenue
            </CardDescription>
            <p className="text-xs md:text-xl lg:text-2xl font-bold">
              ${totalRevenue}
            </p>
          </div>
          <div>
            <CardDescription className="text-xs md:text-sm font-medium">
              Average Order Value
            </CardDescription>
            <p className="text-xs md:text-xl lg:text-2xl font-bold">
              ${averageRevenue}
            </p>
          </div>
        </div>
        <ChartContainer
          config={{
            revenue: {
              label: "Revenue",
              color: "hsl(var(--primary))",
            },
          }}
          className="h-[150px] md:h-[300px] lg:h-[300px] m"
        >
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis
                dataKey="order"
                stroke="#888888"
                fontSize={10}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar
                dataKey="revenue"
                fill="var(--color-revenue)"
                radius={[4, 4, 0, 0]}
                onMouseEnter={(data: any, index: number) =>
                  setHoveredBar(index)
                }
                onMouseLeave={() => setHoveredBar(null)}
              >
                {chartData.map((entry: any, index: number) => (
                  <rect
                    key={`bar-${index}`}
                    fill={
                      hoveredBar === index
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary) / 0.5)"
                    }
                    className="transition-all duration-300"
                  />
                ))}
              </Bar>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltipContent
                        content={
                          <div className="flex flex-col">
                            <span className="text-[0.65rem] uppercase text-muted-foreground">
                              {payload[0].payload.order}
                            </span>
                            <span className="font-bold text-primary">
                              ${payload[0].value.toFixed(2)}
                            </span>
                          </div>
                        }
                      />
                    );
                  }
                  return null;
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
