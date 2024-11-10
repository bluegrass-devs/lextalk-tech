import fs from 'fs';
import path from 'path';

import { Talk } from "../components/shared/Talk";

export async function getCurrentTalk(){
  // Generate dynamically by looking at the file in /public/data/current
  const dataDir = path.join(process.cwd(), 'public/data/current');
  const files = fs.readdirSync(dataDir);
  const file = files[0]
  return file
}

export default async function Talks() {
  const file = await getCurrentTalk()
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/current/${file}`);
  const data = await response.json();

  const formattedDate = new Date(data.date + 'T00:00:00Z').toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  });


  return (
    <>
      <div className="text-center my-10 bg-accent w-fit p-4 ring ring-primary rounded-lg drop-shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold font-montserrat text-center">
          Talks
        </h1>
        <span className="text-xl">
          This is the schedule for LexTalk on {formattedDate}
        </span>
      </div>

      {data.schedule.map((talk: any, index: any) => (
        <Talk key={index} talk={talk} />
      ))}
    </>
  );
}
