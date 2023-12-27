"use client";

import Image from "next/image";
import Link from "next/link";
import conferenceTalk from "../../../public/images/conferenceTalk.jpg";

type LandingProps = {
  date: Date;
};

export const Landing: React.FC<LandingProps> = ({ date }: LandingProps) => {
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-screen h-screen-minus-nav ">
      <Image
        className="absolute"
        alt="Presentation at Lex Talk Tech conference"
        src={conferenceTalk}
        layout="fill"
        objectFit="cover"
        objectPosition="right center"
      />
      <div>
        <div className="h-screen-minus-nav flex flex-col items-center justify-center">
          <div className="flex flex-col items-center h-fit bg-black/50 w-fit px-8 py-4 mx-auto z-10">
            <h1 className="text-5xl lg:text-8xl tracking-tight leading my-4 text-center">
              Lex Talk Tech
            </h1>
            <div className="flex flex-col text-2xl lg:text-3xl lg:my-8 text-center">
              <span>A quarterly tech conference in the bluegrass</span>
              <span className="font-thin my-2 lg:my-4">{formattedDate}</span>
            </div>
            <Link
              href="https://www.affinna.com/event/f8142beea26e11ee8fae7facffad2127"
              className="text-2xl lg:text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 shadow-xl backdrop-blur-sm border-b-2 duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
