import Image from "next/image";
import Link from "next/link";

import { categories } from "@/util/categories";
import Container from "@/components/ui/Container";
import { HeadingText } from "@/components/ui/HeadingText";

const Categories = () => {
  return (
    <div className="min-h-screen pt-24">
      <Container>
        <div className="py-12 text-center">
          <HeadingText
            head="Top Categories"
            title="Discover your next favorite book from our collection of thrilling
            adventures and heartwarming tales."
          />
          <div className="mt-10 flex flex-wrap items-center justify-start gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/men-clothing?category=${category.name}`}
                className="group"
              >
                <div className="relative w-96 h-96 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-75" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-3xl font-semibold transition-all duration-300 group-hover:scale-110 group-hover:text-shadow uppercase">
                      {category.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
