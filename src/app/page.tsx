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
        topic: "Building Community",
        time: "6:00 EST",
        presenter: "Ember Borja",
      },
      {
        topic: "Freelancing 101",
        time: "6:30 EST",
        presenter: "Neal Grindstaff",
      },
      {
        topic: "Fun with Figma",
        time: "7:00 EST",
        presenter: "Mariola Hullings",
      },
      {
        topic: "Another example",
        time: "8:00 EST",
        presenter: "Some person",
      },
    ],
    // Dates are 0 indexed in JavaScript, so October = 9
    date: new Date(2023, 9, 12, 18),
  };

  return (
    <>
      <main className="font-montserrat text-text">
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
        {/* <div className="my-12 mx-auto max-w-screen-xl px-8">
          <h1 className="text-3xl">Event Organizers:</h1>
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
            <div className="flex flex-col items-center w-fit my-8">
              <div className="w-96 h-96 relative flex flex-col items-center">
                <Image
                  className="absolute rounded-full"
                  alt="Joe Krazat"
                  src="http://placekitten.com/600/400"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right center"
                />
              </div>
              <div className="text-2xl">Joe Krazat</div>
            </div>
            <div className="flex flex-col items-center w-fit my-8">
              <div className="w-96 h-96 relative flex flex-col items-center">
                <Image
                  className="absolute rounded-full"
                  alt="This other person"
                  src="http://placekitten.com/600/400"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right center"
                />
              </div>
              <div className="text-2xl">This other person</div>
            </div>
          </div>
        </div> */}
        <AddressMap date={data.date} />
      </main>
    </>
  );
}
