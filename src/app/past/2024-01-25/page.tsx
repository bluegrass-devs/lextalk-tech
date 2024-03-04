import { Talk } from "./components/Talk";

export default function Talks() {
  const talkData = {
    schedule: [
      {
        time: "6:00pm",
        title: "How Libraries Work: A Technology Perspective",
        presenter: "John Blyberg",
        link: "https://youtu.be/WbaOqzj0tu0?si=Tw-Yb1e-2O24StoI",
      },
      {
        time: "6:15pm",
        title: "the T-SQL TRANSLATE() function",
        presenter: "Jeff Foushee",
        link: "https://youtu.be/WHs7VvR6s1c?si=5w59ROAUdQl4OTqe",
      },
      {
        time: "6:45pm",
        title: "Cybersecurity – Building a proactive security strategy for 2024",
        presenter: "Justin Perron",
        resources: "https://youtu.be/ILRE_CNqP9A?si=4hYDAqT7X79GWsuZ",
      },
      {
        time: "7:00pm",
        title: "Govtech: Thinking about government as a customer",
        presenter: "Nick Lyell, Angela Langston",
        resources: "https://youtu.be/yrq64WkfiV4?si=hdVj_xqqZT5yihSI",
      },
      {
        time: "7:30pm",
        title: "LLMs throughout the lifecycle of Generative AI Projects (part 2)",
        presenter: "Lee Park",
        resources: "https://youtu.be/TnjOhlpUsjE?si=BlnXazumoxppBl2A",
      },
    ],
    date: new Date(2023, 4, 18),
  };

  const formattedDate = talkData.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="text-center my-10 bg-accent w-fit mx-auto p-5 ring ring-primary rounded-lg drop-shadow-2xl">
        <h1 className="text-5xl font-bold font-montserrat text-center">
          Talks
        </h1>
        <span className="text-xl">
          This LexTalk was on {formattedDate}
        </span>
      </div>

      {talkData.schedule.map((talk, index) => (
        <Talk key={index} talk={talk} />
      ))}
    </>
  );
}
