import React from "react";

export const HeadingText = ({
  head,
  title,
}: {
  head: string;
  title: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl space-x-6 md:text-5xl lg:text-5xl font-bold text-black text-center ">
        {head}
      </h1>
      <p className="text-center py-2 md:py-4 lg:py-4 text-xs md:text-sm lg:text-lg text-black/70 px-2 md:px-12 lg:px-44">
        {title}
      </p>
    </div>
  );
};
