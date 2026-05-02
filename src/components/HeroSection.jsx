import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/Hero.jpg";
import { FaArrowRight } from "react-icons/fa";

const HeroSectionPage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden container mx-auto p-10">
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt="Hero Background"
        fill
        className="object-cover"
        quality={90}
        placeholder="blur"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center text-start px-6 text-white">
        <h1 className="text-7xl md:text-7xl font-bold mb-6">
          Find Your <br /> Next Read
        </h1>
        <p className="text-xl text-gray-400 md:text-2xl mb-8 max-w-2xl">
          Explore a vast collection of books across every genre and discover
          your next favorite read—borrow instantly and enjoy reading anytime,
          anywhere.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-medium transition flex items-center gap-3">
          Browse Now<FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HeroSectionPage;
