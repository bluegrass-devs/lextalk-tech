import { Talk } from "../components/shared/Talk"
import { getData, getDateFromFilename } from "../lib/data";
import { formattedDate } from "../lib/FormattedDate";

export default async function Talks() {
  const data = getData();
  const date = formattedDate(getDateFromFilename(data.filename));

  return (
    <>
      <div className="text-center my-10 bg-accent w-fit p-4 ring ring-primary rounded-lg drop-shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold font-montserrat text-center">
          Talks
        </h1>
        <span className="text-xl">
          This is the schedule for LexTalk on {date}
        </span>
      </div>
      {data.schedule.map((talk: any, index: any) => (
        <Talk key={index} talk={talk} />
      ))}
    </>
  );
}
