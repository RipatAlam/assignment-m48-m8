import Image from "next/image";
import Link from "next/link";
import React from "react";

const BooksDetailsPage = async ({ params }) => {
  //console.log(params, "params from book details page");
  const { id } = await params;
  console.log(id, "book id from params");

  const res = await fetch(
    "https://assignment-m48-m8-snwu.vercel.app/data.json",
  );
  const data = await res.json();
  console.log(data, "books data from details page");

  const book = data.find((book) => book.id === parseInt(id));
  console.log(book, "book details");

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/allbooks"
        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-10 text-lg font-medium"
      >
        ← Back to All Books
      </Link>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={book.image_url}
              alt={book.title}
                width={200}
                height={200}
              className="w-full h-auto object-cover transition duration-300 group-hover:scale-110"
            />
        </div>

        <div>
            <h1 className="text-lg font-bold mt-6">{book.title}</h1>
            <p className="text-2xl text-gray-600 mt-3">{book.author}</p>
            <p className="text-lg text-gray-700 mt-6">{book.description}</p>
            <p className="text-sm text-green-600 mt-6 mb-6">Available Quantity: {book.available_quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;
