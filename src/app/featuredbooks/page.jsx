import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBooks = async () => {
  const res = await fetch("https://assignment-m48-m8-snwu.vercel.app/data.json");
  const data = await res.json();
  console.log(data, "featured books data");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Featured Books</h1>
        <Link
          href={"/allbooks"}
          className="px-6 py-4 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 shadow-sm hover:shadow-md"
        >
          <button className="font-semibold text-lg">View All</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {data.slice(0, 4).map((book) => (
          <div key={book.id}>
            <div className="relative overflow-hidden rounded-lg group">
              <Image
                src={book.image_url}
                alt={book.title}
                width={200}
                height={200}
                className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                {book.title}
              </div>
            </div>
            <h1 className="text-3xl font-semibold mt-3">{book.title}</h1>
            <p className="text-2xl text-gray-600 mt-3">{book.author}</p>
            <p className="text-sm text-green-600 mt-6 mb-6">
              {book.available_quantity} Copies Available
            </p>
            <Link
              href={`/books/${book.id}`}
              className="px-6 py-4 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 shadow-sm hover:shadow-md"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
