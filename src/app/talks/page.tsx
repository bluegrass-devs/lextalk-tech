import { Talk } from "./components/Talk";
import { formattedDateConferenceDate, conferenceDate } from "../layout";

export default function Talks() {
  const talkData = {
    date: conferenceDate,
    schedule: [
      {
        time: "5:30pm",
        title: "Check-in",
      },
      {
        time: "6:00pm",
        title: "Tech Association of the Bluegrass",
        presenter: "Mackenzie Hanes",
        info: "",
        resources: "",
      },
      {
        time: "6:15pm",
        title: "The Next Generation of Keyboards",
        presenter: "Troy Fletcher",
        info: "",
        resources: "",
      },
      {
        time: "6:30pm",
        title: "Free cores by using eBPF and AF_XDP Accepted",
        presenter: "Brian Smith",
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
        info: "Within Cornerstone there is Ethereal Brewing and Rolling Oven Pizza.",
        resources: "",
      },
    ],
  };

  return (
    <>
      <div className="text-center my-10 bg-accent w-fit p-4 ring ring-primary rounded-lg drop-shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold font-montserrat text-center">
          Talks
        </h1>
        <span className="text-xl">
          This is the schedule for LexTalk on {formattedDateConferenceDate}
        </span>
      </div>

      {talkData.schedule.map((talk, index) => (
        <Talk key={index} talk={talk} />
      ))}
    </>
  );
}
