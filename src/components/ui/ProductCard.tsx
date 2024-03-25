import { TProduct } from "@/types/producttypes";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="  w-full">
      <div className=" relative">
        <Image
          alt={product?.product_name}
          className="rounded h-80 w-full object-cover "
          src={product?.product_image}
          width={500}
          height={500}
        />
        <p className="absolute top-1 left-2 bg-black/90 rounded-full px-2 py-1 text-white text-xs">
          -12%
        </p>
      </div>
      <div className="p-2">
        <div>
          <h6 className="text-black text-xl font-semibold">
            {product?.product_name}
          </h6>
        </div>
        <div className=" flex justify-between gap-2 items-center py-2">
          <div className="flex justify-center items-center gap-1">
            <p className="text-lg line-through text-black/80">
              {(product?.amount * 1.12).toFixed(2)}$
            </p>
            <p className="text-xl text-black">{product?.amount}$</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
