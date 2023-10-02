import { Talk } from "./components/Talk";

export default function Talks() {
  const talkData = {
    schedule: [
      {
        time: "5:30pm",
        title: "Check-in",
        info: "",
        presenter: "",
        resources: "",
      },
      {
        time: "6:00pm",
        title: "LexTalk - Tech Intro",
        info: "This will be a welcome and introduction to what LexTalk Tech is and what we hope to bring to the community.",
        presenter: "Joe Kratzat",
      },
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
      {
        time: "8:00pm",
        title: "Wrap up",
        info: "",
        presenter: "",
        resources: "",
      },
      {
        time: "8:00pm - 10:00pm",
        title: "Pizza and beer afterward",
        info: "Within Cornerstone there is Ethereal brewing and Rolling oven Pizza.",
        presenter: "",
        resources: "",
      },
    ],
    date: new Date(2023, 9, 12),
  };

  const formattedDate = talkData.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
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

      {talkData.schedule.map((talk, index) => (
        <Talk key={index} talk={talk} />
      ))}
    </>
  );
}
