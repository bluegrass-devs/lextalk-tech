"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import conferenceTalk from "./../../../public/images/conferenceTalk.jpg";

type LandingProps = {
  date: Date;
};

export default function Landing({ date }: LandingProps) {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const windowSize = useRef<number | null>(null); // Initialize to null

  useEffect(() => {
    if (typeof window !== "undefined") {
      windowSize.current = window.innerHeight;
      screenSize();
      window.addEventListener("resize", screenSize);

      setLoading(false);

      return () => {
        window.removeEventListener("resize", screenSize);
      };
    }
  }, []);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const screenSize = () => {
    if (windowSize.current && windowSize.current < 950) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return loading ? (
    <></>
  ) : (
    <ParallaxProvider isDisabled={disabled}>
      <div className="w-screen h-screen-minus-nav ">
        <Image
          className="-z-20 absolute"
          alt="Presentation at Lex Talk Tech conference"
          src={conferenceTalk}
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
        />
        <Parallax speed={-20}>
          <div className="h-screen-minus-nav flex flex-col items-center justify-center -z-10">
            <div className="flex flex-col items-center h-fit bg-black/50 w-fit px-8 py-4 mx-auto">
              <h1 className="text-5xl lg:text-8xl tracking-tight leading my-4 text-center">
                Lex Talk Tech
              </h1>
              <div className="flex flex-col text-2xl lg:text-3xl lg:my-8 text-center">
                <span>A quarterly tech conference in the bluegrass</span>
                <span className="font-thin my-2 lg:my-4">{formattedDate}</span>
              </div>
              <Link
                href="/tickets"
                className="text-2xl lg:text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 shadow-xl backdrop-blur-sm border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
              >
                Tickets
              </Link>
            </div>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}
