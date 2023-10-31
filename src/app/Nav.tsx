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

  // having this blank hides the link
  const ticketURL = "";

  return (
    <nav className="bg-accent z-20">
      <div className="h-24 flex flex-col lg:flex-row lg:items-center lg:justify-end text-3xl font-montserrat font-thin">
        {/* Left Side  */}
        <div className="flex h-full items-center ml-8 w-fit">
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
          <Link href="/about" className="my-4">
            About
          </Link>
          <Link href="/talks" className="my-4">
            Talks
          </Link>
          {ticketURL &&
          <a href={ticketURL} className="my-4 flex gap-2">
            <FaArrowUpRightFromSquare className="text-xl" />
            Tickets
          </a>
          }
          <Link href="/team" className="my-4">
            Team
          </Link>
          <Link href="/past" className="my-4">
            Past Talks
          </Link>
        </div>

        {/* Desktop */}
        <div className="lg:flex w-full justify-end gap-8 px-4 hidden">
          <Link
            href="/"
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            About
          </Link>
          <Link
            href="/talks"
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Talks
          </Link>
          {ticketURL &&
          <a
            href={ticketURL}
            className="flex gap-2 border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            <FaArrowUpRightFromSquare className="text-xl" />
            Tickets
          </a>
          }
          <Link
            href="/team"
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Team
          </Link>
          <Link
            href="/past"
            className="border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Past Talks
          </Link>
        </div>
      </div>
    </nav>
  );
}
