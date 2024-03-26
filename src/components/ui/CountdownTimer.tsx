"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  durationInSeconds,
}: {
  durationInSeconds: number;
}) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const remainingHours = time % (60 * 60 * 24);
    const hours = Math.floor(remainingHours / (60 * 60));
    const remainingMinutes = remainingHours % (60 * 60);
    const minutes = Math.floor(remainingMinutes / 60);
    const seconds = remainingMinutes % 60;

    return `${days} days ${hours < 10 ? "0" : ""}${hours} hours ${
      minutes < 10 ? "0" : ""
    }${minutes} minute ${seconds < 10 ? "0" : ""}${seconds} seconds`;
  };

  return (
    <div>
      <h1 className="text-bold text-sm md:text-xl lg:text-xl font-bold">
        {formatTime(timeLeft)}
      </h1>
    </div>
  );
};

export default CountdownTimer;
