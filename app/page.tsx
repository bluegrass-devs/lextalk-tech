import Image from "next/image";
import Link from "next/link";
import joeTalk from "/public/images/joeTalk.jpg";
import AddressMap from "./components/AddressMap";
import { Landing } from "./components/Landing";
import { ScheduleTable } from "./components/ScheduleTable";
import path from 'path'
import { readdirSync, readFileSync } from "fs";
import { getData, getDateFromFilename } from "./lib/data";
import { formattedDate } from "./lib/FormattedDate";

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'public/data/current');
  const file = readdirSync(dataDir)[0];
  return [{ id: file.replace('.json', '') }];
}

export default function Home() {
  const data = getData();
  const date = formattedDate(getDateFromFilename(data.filename));

  return (
    <>
      <div className="text-text font-montserrat flex flex-col mx-auto gap-4 max-w-screen-xl">
        <Landing
          date={date}
          ticketsUrl={data.ticketLink}
        />
        <div className="relative max-w-screen-xl">
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
        <div className="w-screen self-center">
          <Image
            className=""
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            placeholder="blur"
          />
        </div>
        <AddressMap date={date} />
      </div>
    </>
  );
}
