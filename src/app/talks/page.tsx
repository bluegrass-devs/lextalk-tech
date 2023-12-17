import { Talk } from "./components/Talk";

export default function Talks() {
  const talkData = {
    schedule: [
      {
        time: "5:30pm",
        title: "Check-in",
      },
      {
        time: "6:00pm",
        title: "How Libraries Work: A Technology Perspective",
        presenter: "John Blyberg",
        info: "",
        resources: "",
      },
      {
        time: "6:15pm",
        title: "the T-SQL TRANSLATE() function",
        presenter: "Jeff Foushee",
        info: "",
        resources: "",
      },
      {
        time: "6:30pm",
        title: "Sensors and tiny boards and Adafruit (oh my!)",
        presenter: "Will Bates",
        info: "",
        resources: "",
      },
      {
        time: "6:45pm",
        title: "cyber security",
        presenter: "Justin Perron",
        info: "",
        resources: "",
      },
      {
        time: "7:00pm",
        title: "Govtech: Thinking about government as a customer",
        presenter: "Nick Lyell, Angela Langston",
        info: "",
        resources: "",
      },
      {
        time: "7:30pm",
        title: "LLMs throughout the lifecycle of Generative AI Projects (part 2)",
        presenter: "Lee Park",
        info: "",
        resources: "",
      },
      {
        time: "8:00pm",
        title: "Wrap up",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "8:00pm - 10:00pm",
        title: "Food and drinks afterward",
        presenter: "",
        info: "Within Cornerstone there is Ethereal brewing and Rolling oven Pizza.",
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
