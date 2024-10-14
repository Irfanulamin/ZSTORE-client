import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <div className="bg-gray-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/newsletter.jpg"
                  alt="Newsletter Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Stay in Style
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Subscribe to our newsletter for the latest updates on new
                  arrivals, exclusive offers, and trending styles in men's
                  fashion.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
