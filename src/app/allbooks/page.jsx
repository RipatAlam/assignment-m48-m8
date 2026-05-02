"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    fetch("https://assignment-m48-m8-snwu.vercel.app/data.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searching.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const categories = ["All Categories", "Story", "Tech", "Science"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Books</h1>

      <input
        type="text"
        placeholder="Search books by title..."
        value={searching}
        onChange={(e) => setSearching(e.target.value)}
        className="input input-bordered w-full max-w-md mx-auto block mb-8"
      />

      <div className="flex gap-6">
        {/* Sidebar - Categories */}
        <div className="w-1/4 min-h-screen border-2 border-gray-800 bg-gray-100 p-5 rounded-2xl h-fit sticky top-6">
          <h2
            className="font-semibold mb-4 cursor-pointer flex items-center justify-between"
            onClick={() => setOpen(!open)}
          >
            Categories
            <span>{open ? "▲" : "▼"}</span>
          </h2>

          {open && (
            <ul className="space-y-5 text-gray-700">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer hover:text-purple-600 transition ${selectedCategory === category ? "text-purple-600 font-medium" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Books Grid */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-lg group">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover object-fit transition duration-300 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                    {book.title}
                  </div>
                </div>

                <h2 className="font-semibold mt-6 text-2xl">{book.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{book.author}</p>

                <p className="text-green-600 text-sm mt-3 font-medium mb-6">
                  {book.available_quantity} copies left
                </p>

                <Link href={`/books/${book.id}`} className="block mt-4">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {filteredBooks.length === 0 && (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-semibold text-gray-600">
                No books found matching `
                <span className="text-purple-600">{searching}</span>`
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
