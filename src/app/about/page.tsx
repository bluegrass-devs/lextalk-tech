"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Past() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center py-10 text-center w-full gap-20">
        <div
          className="w-full py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            LexTalk Tech is a quarterly conference in Lexington KY
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            Get ready for a tech-tastic good time at our quarterly conference!
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10">
            <img
              className="object-contain rounded-lg"
              src="/images/Conference.JPG"
              alt="Image description"
            />
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
           We've packed the agenda with a mix of lightning fast 15 minute talks and in-depth 30 minute sessions that will leave you feeling like a tech pro
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            But don't worry, we're all about keeping it casual and fun
          </div>
        </div>
        <div
          className="w-full py-10"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10">
            <img
              className="object-contain rounded-lg"
              src="/images/Conference2.JPG"
              alt="Image description"
            />
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
  Expect a lively atmosphere, lots of laughs, and plenty of opportunities to connect with fellow tech enthusiasts
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10">
            <img
              className="object-contain rounded-lg"
              src="/images/Conference3.JPG"
              alt="Image description"
            />
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            Whether you're a tech novice or a seasoned pro, you'll find something to love at our conference
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
           Don't miss out on this wild ride of technology and good vibes!
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            January 25, 2024
          </div>
        </div>

        <div
          className="w-full py-10"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="mx-auto w-3/4 md:w-1/2 bg-primary ring-secondary shadow-lg shadow-secondary rounded-lg ring p-10 leading-8">
            @The Cornerstone, 401 S Limestone, Lexington, KY
          </div>
        </div>
      </div>
    </>
  );
}
