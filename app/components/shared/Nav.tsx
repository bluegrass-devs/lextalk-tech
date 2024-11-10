"use client";

import Link from "next/link";
import Image from "next/image";
import logoTransparent from "/public/images/logoTransparent.png";
import {
  FaBars,
  FaArrowUpRightFromSquare,
  FaAngleRight,
} from "react-icons/fa6";
import { useState } from "react";

export default function Nav({ ticketsUrl='' }) {
  const [menu, setMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const flipMenu = () => {
    setAboutMenu(!aboutMenu);
  };

  return (
    <nav className="z-20 bg-accent">
      <div className="flex flex-col h-24 text-3xl font-thin lg:flex-row lg:items-center lg:justify-end font-montserrat">
        {/* Left Side  */}
        <div className="flex items-center h-full ml-8 w-fit">
          <FaBars className="lg:hidden" onClick={toggleMenu} />
          <Link href="/">
            <Image
              className="relative mx-8 w-44"
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
          } lg:hidden z-20 bg-accent/90 flex flex-col w-full items-center`}
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
          <Link href="/team" className="my-4">
            Team
          </Link>
          <Link href="/past" className="my-4">
            Past Talks
          </Link>
          {ticketsUrl && (
            <a href={ticketsUrl} className="flex gap-2 my-4">
              <FaArrowUpRightFromSquare className="text-xl" />
              Tickets
            </a>
          )}
        </div>

        {/* Desktop */}
        <div className={`${ticketsUrl ? 'justify-end ': ''}hidden w-full gap-8 px-8 lg:flex`}>
          <Link
            href="/"
            className="duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
          >
            Home
          </Link>
          <div
            onClick={flipMenu}
            className="duration-150 border-b-2 border-transparent hover:scale-110 "
          >
            <div className="relative flex items-center">
              About
              <FaAngleRight
                className={`h-6 ${
                  aboutMenu && `rotate-90 transition duration-110`
                }`}
              />
            </div>
            <ul
              className={`absolute bg-primary ring ring-secondary rounded-xl p-4 ${
                aboutMenu ? "flex flex-col" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/about"
                  className="duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
                >
                  Conference
                </Link>
              </li>
              <li>
                <Link
                  href="/talks"
                  className="duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
                >
                  Talks
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/past"
                  className="duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
                >
                  Past Talks
                </Link>
              </li>
            </ul>
          </div>
          {ticketsUrl && (
            <a
              href={ticketsUrl}
              className="flex gap-2 duration-150 border-b-2 border-transparent hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              <FaArrowUpRightFromSquare className="text-xl" />
              Tickets
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}
