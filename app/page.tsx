import fs from 'fs';
import path from 'path';

import Image from "next/image";
import Link from "next/link";
import joeTalk from "/public/images/joeTalk.jpg";
import AddressMap from "./components/AddressMap";
import { Landing } from "./components/Landing";
import { ScheduleTable } from "./components/ScheduleTable";
import { ticketsUrl } from "./layout";

async function getCurrentTalk() {
  // Generate dynamically by looking at the json file in public/data/current
  const dataDir = path.join(process.cwd(), 'public/data/current');
  const files = fs.readdirSync(dataDir);
  const file = files[0];

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/current/${file}`);
  const data = await response.json();

  return data
}


export default async function Home() {
  const data = await getCurrentTalk();
  const formattedDate = new Date(data.date + 'T00:00:00Z').toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });


  return (
    <>
      <div className="font-montserrat text-text">
        <Landing
          date={data.date}
          ticketsUrl={ticketsUrl}
          formattedDate={data.date}
        />
        <div className="relative max-w-screen-xl px-4 mx-auto my-12">
          <div className="flex items-center justify-between w-2/3 my-8">
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
        <div className="">
          <Image
            className=""
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            placeholder="blur"
          />
        </div>
        <AddressMap date={formattedDate} />
      </div>
    </>
  );
}
