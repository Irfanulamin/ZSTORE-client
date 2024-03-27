import Container from "@/components/ui/Container";
import { Progress } from "@nextui-org/react";
import React from "react";

const SingleProductLoadingPage = () => {
  return (
    <div className="min-h-[90vh] h-full flex justify-center items-center  pt-24">
      <Container>
        <div className="flex justify-center items-center">
          <Progress
            aria-label="Loading..."
            value={60}
            className="max-w-md"
            color="default"
          />
        </div>
      </Container>
    </div>
  );
};

export default SingleProductLoadingPage;
