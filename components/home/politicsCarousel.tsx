import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchData } from "@/api/fetchTrending";
import { lineSpinner } from "ldrs";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

interface News {
  url: string;
  abstract: string;
  // multimedia: string;
  multimedia: {
    [index: string]: {
      url: string;
    };
  };
}

const politicsCarousel = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<News[]>([]);

  // fetching data when component mounts
  useEffect(() => {
    setLoading(true);
    const fetchTrending = async () => {
      const response = await fetchData("politics");
      setNews(response);
      console.log(response);
      setLoading(false);
    };
    fetchTrending();
  }, []);

  // loading animation
  lineSpinner.register();
  if (loading) {
    return (
      <div className="h-full w-full flex justify-center items-center absolute">
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      </div>
    );
  }
  return (
    <div className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
        className="rounded-lg w-full flex"
        // orientation="vertical"
      >
        <CarouselContent>
          {news &&
            news.map((news, index) => (
              <CarouselItem key={index}>
                <div
                  className="w-full aspect-square bg-no-repeat bg-cover rounded-lg bg-center"
                  style={{
                    backgroundImage: `url(${
                      news?.multimedia &&
                      news?.multimedia[2] &&
                      news?.multimedia[0]?.url
                    })`,
                  }}
                ></div>
                <Link
                  href={`${news.url}`}
                  target="_blank"
                  className="mt-3 flex font-nunito"
                >
                  {" "}
                  {news.abstract}
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default politicsCarousel;
