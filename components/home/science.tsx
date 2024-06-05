import React, { useState, useEffect } from "react";
import { fetchData } from "@/api/fetchTrending";

const entertainment = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchScience = async () => {
      const response = await fetchData("science");
      if (response) {
        setNews(response);
      }
    };
    fetchScience();
  }, []);

  console.log("jaja", news);

  return (
    <div>
      <div className="flex justify-center">
        <p className="text-center text-lg font-montserrat mt-4 py-1 px-10 bg-red-600 inline-block text-white italic font-bold mb-1">
          Science
        </p>
      </div>
    </div>
  );
};

export default entertainment;
