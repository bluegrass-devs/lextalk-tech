import { Talk } from "./components/Talk";

export default function Talks() {
  const talkData = {
    schedule: [
      {
        time: "6:15pm",
        title: "Ham Radio: Where Even Experts are Amateurs",
        info: "A brief introduction into the Amateur Radio Service and how hams operate.",
        presenter: "Todd Willey",
      },
      {
        time: "6:30pm",
        title: "Things I hate about developers ",
        info: "",
        presenter: "Davis St. Aubin",
        resources: "",
      },
      {
        time: "6:45pm",
        title: "Introduction to Vue.js",
        info: "",
        presenter: "Craig Geil",
        resources: "",
      },
      {
        time: "7:00pm",
        title: "ASM R you serious",
        info: "",
        presenter: "John Martinez",
        resources: "",
      },
      {
        time: "7:30pm",
        title: "LLMs throughout the lifecycle of Generative AI Projects",
        info: "Focused more on demystifying some keywords people vaguely understand about customizing language models for specific use cases.",
        presenter: "Lee Park",
        resources: "",
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
