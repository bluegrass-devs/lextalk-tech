import { Talk } from "../components/shared/Talk";
import { getData } from "../lib/data";

export default async function Talks() {
  const data = await getData()

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
