"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F39] text-gray-300 mt-12">
      <div>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first section */}
          <div>
            <div className="flex">
              <Image
                src={"/navbar-logo.png"}
                alt="logo"
                width={50}
                height={50}
              />

              <Link href={"/"} className="text-3xl text-gray-300 font-bold">
                BookNest
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-gray-300">Your digital library companion.</p>
              <p className="text-gray-300">Find, Borrow, Read, Repeat</p>
            </div>
            <div className="flex gap-6 mt-6">
              <Link href="https://www.facebook.com">
                <FaFacebook />
              </Link>
              <Link href="https://www.twitter.com">
                <FaTwitter />
              </Link>
              <Link href="https://www.instagram.com">
                <FaInstagram />
              </Link>
              <Link href="https://www.linkedin.com">
                <FaLinkedin className=" bg-white" />
              </Link>
            </div>
          </div>

          {/* second section */}
          <div>
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Quick Links</h1>
            <div className="flex flex-col text-gray-300 gap-2 mt-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/allbooks"}>All Books</Link>
              <Link href={"/myprofile"}>My Profile</Link>
            </div>
          </div>

          {/* third section */}
          <div>
            <h1 className="text-2xl font-bold text-gray-300 mb-6">Categories</h1>
            <div className="flex flex-col gap-2 mt-4 text-gray-300">
              <Link href={`/allbooks?category=Story`}>Story</Link>
              <Link href={`/allbooks?category=Tech`}>Tech</Link>
              <Link href={`/allbooks?category=Science`}>Science</Link>
            </div>
          </div>

          {/* fourth section */}
          <div>
            <h1 className="text-2xl text-gray-300 font-bold mb-6">Contact Us</h1>
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href={`mailto:mdalamm5090@gmail.com`}
                className="text-gray-300 hover:text-white transition relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all"
              >
                Email: mdalamm5090@gmail.com
              </Link>
              <Link href={`tel:+996543439010`} className="text-gray-300 block">
                Phone: +996543439010
              </Link>
              <Link
                href={`https://www.google.com/maps?q=Dhaka, Bangladesh`}
                target="_blank"
                className="text-gray-300 block"
              >
                Address: Dhaka, Bangladesh
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B1F39] py-4 flex items-center justify-center border-t border-gray-800">
        <p className="text-center text-gray-300">
          &copy; {currentYear} BookNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
