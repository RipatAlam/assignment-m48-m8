"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarLogo from '../../public/images/navbar-logo.jpg';

const Navbar = () => {
  const links = (
    <>
      <li className="font-bold">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="font-bold">
        <Link href={"/allbooks"}>All Books</Link>
      </li>
      <li className="font-bold">
        <Link href={"/myprofile"}>My Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            {links}
          </ul>
        </div>

        <Image src={"/navbar-logo.png"} alt="logo" width={50} height={50} />

        <Link href={"/"}  className="text-3xl font-bold">BookNest</Link>
      </div>

      {/* CENTER (NOW PERFECT CENTER) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto rounded-2xl pl-10 transition hover:shadow-md"
          />

        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={"/navbar-logo.png"}
                alt="avatar"
                width={50}
                height={50}
              />
            </div>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
