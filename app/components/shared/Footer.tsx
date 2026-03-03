import { FaMeetup, FaCode, FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { getCurrentEvent } from "@/lib/data";

export default function Footer() {
  const data = getCurrentEvent()

  const ticketsUrl = data?.ticketLink

  return (
    <footer className="py-2 text-sm text-text bg-accent font-montserrat ">
      <div className="flex flex-col flex-shrink mx-auto md:w-1/3">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Link
            href="/"
            className="w-48 my-2 text-center transition duration-150 hover:text-white hover:scale-110"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="w-48 my-2 text-center transition duration-150 hover:text-white hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/talks"
            className="w-48 my-2 text-center transition duration-150 hover:text-white hover:scale-110"
          >
            Talks
          </Link>
          <Link
            className="w-48 my-2 text-center transition duration-150 whitespace-nowrap hover:text-white hover:scale-110"
            href="/team"
          >
            Team
          </Link>
          <Link
            href="/past"
            className="w-48 my-2 text-center transition duration-150 whitespace-nowrap hover:text-white hover:scale-110"
          >
            Past Talks
          </Link>
          {ticketsUrl && (
            <Link
              href={ticketsUrl}
              className="w-48 my-2 text-center transition duration-150 whitespace-nowrap hover:text-white hover:scale-110"
            >
              Tickets
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-center w-1/2 gap-4 my-2 text-2xl md:w-1/4">
            <a
              className="transition duration-150 hover:text-white hover:scale-110"
              href="https://www.meetup.com/The-Bluegrass-Developers-Guild/"
            >
              <span className="sr-only">Bluegrass Developer's Guild Meetups</span>
              <FaMeetup />
            </a>
            <a
              className="transition duration-150 hover:text-white hover:scale-110"
              href="https://www.bluegrassdevs.org/"
            >
              <span className="sr-only">Bluegrass Developer's Guild Website</span>
              <FaCode />
            </a>
            <a
              className="transition duration-150 hover:text-white hover:scale-110"
              href="https://github.com/bluegrass-devs/lextalk-tech"
            >
              <span className="sr-only">Source code for this website</span>
              <FaGithub />
            </a>
          </div>
        </div>
        <span className="text-center">© Copyright 2026</span>
      </div>
    </footer>
  );
}
