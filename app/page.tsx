import Image from "next/image";
import Link from "next/link";
import joeTalk from "/public/images/joeTalk.jpg";
import AboutSummary from "./components/AboutSummary";
import AddressMap from "./components/AddressMap";
import { Landing } from "./components/Landing";
import { ScheduleTable } from "./components/ScheduleTable";
import { getCurrentEvent, getDateFromFilename } from "./lib/data";
import { formattedDate } from "./lib/FormattedDate";

export default function Home() {
  const data = getCurrentEvent();
  const date = data ? formattedDate(getDateFromFilename(data.filename)) : "TBD";

  return (
    <>
      <div className="text-text font-montserrat flex flex-col mx-auto gap-4 max-w-screen-xl">
        <Landing
          date={date}
          time={data?.time}
          ticketsUrl={data?.ticketLink ?? ""}
          speakersUrl={data?.speakerLink ?? ""}
        />
        {data?.scheduleOverview && data.scheduleOverview.length > 0 && (
          <section aria-labelledby="schedule-overview" className="px-4 pt-12 md:pt-16">
            <div className="mx-auto max-w-5xl border-b border-text/15 pb-12 md:pb-16">
              <h2 id="schedule-overview" className="text-3xl text-center mb-10 md:mb-12">
                Schedule at a glance
              </h2>
              <ol className="grid md:auto-cols-fr md:grid-flow-col">
                {data.scheduleOverview.map((item) => (
                  <li
                    key={item.title}
                    className="relative ml-2 border-l border-secondary/40 pb-8 pl-8 last:pb-0 md:ml-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-8 md:pt-8"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-secondary ring-4 ring-background md:-top-1.5 md:left-0"
                    />
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-base leading-relaxed text-text/80">{item.time}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
        <AboutSummary />
        {data && data.schedule.length > 0 && (
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
        )}
        <div className="w-screen self-center">
          <Image
            className=""
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            placeholder="blur"
          />
        </div>
        <AddressMap date={date} time={data?.time} />
      </div>
    </>
  );
}
