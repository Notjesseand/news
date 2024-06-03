"use client";
import React, { useState, useEffect } from "react";
import { lineSpinner } from "ldrs";
import Link from "next/link";
import Nav from "@/components/nav";

// Default values shown

interface News {
  url: string;
  abstract: string;
  media: {
    [index: number]: {
      ["media-metadata"]: {
        [index: number]: {
          url: string;
        };
      };
    };
  };
}

const Page = () => {
  const key = `wJN42eNUnoO8qshic71phajCgmk1eAsQ`;

  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`,
        { cache: "force-cache", next: { revalidate: 10000 } }
      );
      const data = await response.json();
      setNews(data.results);
      console.log(data.results[0].media[0]["media-metadata"][0].url);
      setLoading(false);
    } catch (error) {
      console.log("error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // loading animation
  lineSpinner.register();
  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
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
    <div className="font-nunito ">
      <Nav />
      <div className="grid grid-cols-4 px-10 gap-5">
        {news.map((news, index) => (
          <div key={index}>
            <div
              className=" aspect-square w-full bg-no-repeat bg-cover rounded-lg"
              style={{
                backgroundImage: `url(${
                  news.media[0] &&
                  news.media[0]["media-metadata"][0] &&
                  news.media[0]["media-metadata"][2].url
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
