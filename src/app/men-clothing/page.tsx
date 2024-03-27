import FetchedProducts from "@/components/FetchingAllProducts";
import SortingSection from "@/components/SortingSection";
import Container from "@/components/ui/Container";

export interface TSearchParam {
  category?: string;
  rating?: string;
  minAmount?: string;
  maxAmount?: string;
}

const ProductsPage = ({ searchParams }: { searchParams: TSearchParam }) => {
  console.log(searchParams);
  return (
    <div className=" min-h-[90vh] h-[100%] pt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className=" col-auto lg:col-start-1 lg:col-end-2 p-1">
            <SortingSection />
          </div>
          <div className="col-auto  lg:col-start-2  lg:col-end-8 ">
            <div>
              <h4 className="text-lg md:text-xl lg:text-2xl font-bold space-x-6 text-left">
                Our Collections
              </h4>
              <p className="text-left text-xs md:text-sm lg:text-sm text-black/80 py-2">
                Explore our latest arrivals and elevate your style with trendy
                picks
                <br /> – shop now before they are gone!
              </p>
            </div>
            <FetchedProducts searchParams={searchParams}></FetchedProducts>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
