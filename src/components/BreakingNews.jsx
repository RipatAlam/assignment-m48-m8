"use client";

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNewsPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://assignment-m48-m8-snwu.vercel.app/data.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className='container mx-auto py-4 px-6 flex items-center'>
      <button className="btn btn-ghost text-red-500 border-red-500 animate-pulse mr-6 text-xl">
        New Arrivals:
      </button>

      <Marquee pauseOnHover={true} speed={50}>
        {
          data.map((book) => (
            <h1 key={book.id} className="mr-4 text-gray-200">
              {book.title}
            </h1>
          ))
        }
      </Marquee>
    </div>
  );
};

export default BreakingNewsPage;