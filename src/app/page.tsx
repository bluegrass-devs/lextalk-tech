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
        <div className="my-12 mx-auto max-w-screen-xl px-4">
          <div className="flex items-center w-1/3 justify-between my-8">
            <h2 className="text-3xl">Schedule</h2>
            <Link
              href="/talks"
              className="text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 backdrop-blur-sm border-b-2 duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              Talks
            </Link>
          </div>
          <ScheduleTable data={data.schedule} />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            className="absolute"
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <AddressMap date={data.date} />
      </div>
    </>
  );
}
