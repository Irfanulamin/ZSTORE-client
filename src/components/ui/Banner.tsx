import Carousel from "./Carousel";
import Container from "./Container";

const Banner = async () => {
  const res = await fetch("http://localhost:5000/men-clothing");
  const products = await res.json();

  return (
    <div className="bg-black pt-32 pb-16">
      <Container>
        <div>
          <div className="flex justify-center items-center w-full">
            <div>
              <h1 className=" space-x-6 text-2xl lg:text-5xl font-semibold text-white text-center ">
                ZStore Where Style Meets Substance, <br /> Your Ultimate Fashion
                Destination
              </h1>
              <p className="py-2 md:py-4 lg:py-8 text-xs md:text-sm lg:text-lg text-white/70 px-2 md:px-12 lg:px-44">
                Welcome to ZStore, your ultimate fashion destination where style
                meets substance. Dive into our diverse collection of
                meticulously curated clothing and accessories, crafted to
                elevate your look effortlessly.
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 lg:p-20">
            <Carousel products={products}></Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
