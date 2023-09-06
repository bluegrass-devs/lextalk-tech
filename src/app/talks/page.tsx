import { Talk } from "./components/Talk";

export default function Speakers() {
  const talkData = {
    schedule: [
      {
        time: "6:00 EST",
        title: "Fussin' with iOS",
        info: "This is a talk about how to be an iOS developer. We're gonna learn about Swift and stuff. This should be Lorem Ipsum and instead of weird rambling.",
        presenter: "Mariola Hullings",
        resources:
          "A collection of hotlinks or books or whatever the presenter thinks would be cool to have here.",
      },
      {
        time: "6:30 EST",
        title: "Toolin' Around",
        info: "This is a talk about how to be an iOS developer. We're gonna learn about Swift and stuff. This should be Lorem Ipsum and instead of weird rambling.",
        presenter: "Ember Borja",
        resources: "A collection of hotlinks, etc.",
      },
      {
        time: "6:30 EST",
        title: "A third example",
        info: "This is a talk about how to be an iOS developer. We're gonna learn about Swift and stuff. This should be Lorem Ipsum and instead of weird rambling.",
        presenter: "Ember Borja",
        resources: "A collection of hotlinks, etc.",
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
      <div className="text-center my-10 bg-primary w-fit mx-auto p-5 ring ring-secondary rounded-lg drop-shadow-2xl">
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
