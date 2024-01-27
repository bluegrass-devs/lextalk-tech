import Image from "next/image";
import Link from "next/link";
import joeTalk from "../../public/images/joeTalk.jpg";
import { AddressMap } from "./components/AddressMap";
import { Landing } from "./components/Landing";
import { ScheduleTable } from "./components/ScheduleTable";

export default function Home() {
  const data = {
    schedule: [
      {
        time: "5:30pm",
        topic: "Check-in",
      },
      {
        time: "6:00pm",
        topic: "Library tech",
        presenter: "John Blyberg",
      },
      {
        time: "6:15pm",
        topic: "T-SQL",
        presenter: "Jeff Foushee",
      },
      {
        time: "6:30pm",
        topic: "IoT",
        presenter: "Will Bates",
      },
      {
        time: "6:45pm",
        topic: "Cybersecurity",
        presenter: "Justin Perron",
      },
      {
        time: "7:00pm",
        topic: "Govtech",
        presenter: "Nick Lyell, Angela Langston",
      },
      {
        time: "7:30pm",
        topic: "LLMs",
        presenter: "Lee Park",
      },
      {
        time: "8:00pm",
        topic: "Wrap up",
        presenter: "",
      },
      {
        time: "8:00pm - 10:00pm",
        topic: "Food and drinks afterward",
        presenter: "",
      },
    ],
    // Dates are 0 indexed in JavaScript, so October = 9
    date: new Date(2024, 0, 25, 18),
  };

  return (
    <>
      <div className="font-montserrat text-text">
        <Landing date={data.date} />
        <div className="max-w-screen-xl px-4 mx-auto my-12">
          <div className="flex items-center justify-between w-1/3 my-8">
            <h2 className="text-3xl">Schedule</h2>
            <Link
              href="/talks"
              className="px-6 py-3 text-3xl duration-150 border border-b-2 rounded-full bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              Talks
            </Link>
          </div>
          <ScheduleTable data={data.schedule} />
        </div>
        <div className="relative w-screen h-screen">
          <Image
            className="absolute"
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <AddressMap date={data.date} />
      </div>
    </>
  );
}
