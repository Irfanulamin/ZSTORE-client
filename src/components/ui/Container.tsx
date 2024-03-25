import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[1920px] mx-auto px-2 md:px-12  lg:px-24 text-center">
      {children}
    </div>
  );
};

export default Container;
