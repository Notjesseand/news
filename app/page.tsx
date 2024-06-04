"use client";
import React, { useState, useEffect } from "react";
import { lineSpinner } from "ldrs";
import Link from "next/link";
import Nav from "@/components/nav";
import { fetchData } from "@/api/fetchTrending";
import TrendingCarousel from "@/components/home/trendingCarousel";
import PoliticsCarousel from "@/components/home/politicsCarousel";
import SportsCarousel from "@/components/home/sportsCarousel";
import Categories from "@/components/home/categories";
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
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div className="font-nunito bg-slate-100 pb-20 overflow-x-hidden">
      <Nav />

      <div className="grid grid-cols-4 px-10">
        {/* trending news */}
        <div className="flex flex-col items-center overflow-x-hidden">
          <p className="text-center text-lg font-nunito mt-4 pb-2 font-bold">
            Trending News
          </p>
          <TrendingCarousel />
        </div>
        {/* politics */}
        <div className="px-10 flex flex-col col-span-2 overflow-x-hidden">
          <p className="text-center text-lg font-nunito mt-4 font-bold pb-2">
            Politics
          </p>
          <PoliticsCarousel />
        </div>{" "}
        <div className="pr-10 overflow-x-hidden">
          <p className="text-center text-lg font-nunito mt-4 pb-2 font-bold">
            Sports
          </p>
          <SportsCarousel />
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Page;
