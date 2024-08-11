import { Talk } from "./components/Talk";

export default function Talks() {
  const talkData = {
    date: new Date(2023, 0, 25),
    schedule: [
      {
        time: "5:30pm",
        title: "Check-in",
      },
      {
        time: "6:00pm",
        title: "First Presentaion (TBD)",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "6:15pm",
        title: "Second Presentaion (TBD)",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "6:30pm",
        title: "Third Presentaion (TBD)",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "6:45pm",
        title: "Fourth Presentaion (TBD)",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "6:00pm",
        title: "First Presentaion (TBD)",
        presenter: "",
        info: "",
        resources: "",
      },
      {
        time: "7:00pm",
        title: "Round Table Discussion and Q&A",
        presenter: "",
        info: "This will be a panel discussion with an open Q&A focus. We will discuss the state of tech, where we are going and how AI might change the landscape.",
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
