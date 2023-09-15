"use client";

import Link from "next/link";
import Image from "next/image";
import logoTransparent from "./../../public/images/logoTransparent.png";
import { FaBars, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-accent z-20">
      <div className="h-24 flex flex-col lg:flex-row lg:items-center lg:justify-end text-3xl font-montserrat font-thin">
        {/* Left Side  */}
        <div className="flex h-full items-center ml-8 w-3/4">
          <FaBars className="lg:hidden" onClick={toggleMenu} />
          <Link href="/">
            <Image
              className="relative w-44 mx-8"
              src={logoTransparent}
              alt="LexTalk Logo"
              width={1009}
              height={568}
            />
          </Link>
        </div>
        {/* Mobile */}
        <div
          className={`${
            menu ? "" : "hidden"
          } lg:hidden z-20 bg-accent/75 flex flex-col w-full items-center`}
        >
          <Link href="/" className="my-4">
            Home
          </Link>
          {/* <Link href="/about" className="my-4">
            About
          </Link> */}
          <Link href="/talks" className="my-4">
            Talks
          </Link>
          <a href="https://www.google.com/" className="my-4 flex gap-2">
            <FaArrowUpRightFromSquare className="text-xl" />
            Tickets
          </a>
          <Link href="/team" className="my-4">
            Team
          </Link>
          {/* <Link href="/past" className="my-4">
            Past LexTalk
          </Link> */}
        </div>

        {/* Desktop */}
        <div className="lg:flex w-1/2 justify-evenly hidden">
          <Link
            href="/"
            className="mx-4 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Home
          </Link>
          {/* <Link
            href="/about"
            className="mx-4 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            About
          </Link> */}
          <Link
            href="/talks"
            className="mx-4 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Talks
          </Link>
          <a
            href="https://www.eventbrite.com/e/lextalktech-oct-12-2023-tickets-716404403857"
            className="mx-4 flex gap-2 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            <FaArrowUpRightFromSquare className="text-xl" />
            Tickets
          </a>
          <Link
            href="/team"
            className="mx-4 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Team
          </Link>
          {/* <Link
            href="/past"
            className="mx-4 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Past LexTalk
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
