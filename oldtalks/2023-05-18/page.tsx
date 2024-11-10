import { Talk } from "../../app/components/shared/Talk";

export default function Talks() {
  const talkData = {
    schedule: [
      {
        time: "5:30pm",
        title: "What is LexTalk.Tech",
        info: "This will be a welcome and introduction to what LexTalk Tech is and what we hope to bring to the community.",
        presenter: "Joe Kratzat",
        link: "https://youtu.be/j1jdraDnBqo",
      },
      {
        time: "5:45pm",
        title: "Accessibility on the Web",
        info: "The web is for everyone. That means we must accommodate all forms of human interaction on the web. We will talk about physical and mental disabilities, adaptive technologies, and cultural differences that affect how we design and test our applications.",
        presenter: "Ember Borja",
        link: "https://youtu.be/fhwdwR3-YLQ",
      },
      {
        time: "6:00m",
        title: "How to freelance as a Developer",
        info: "Self-employed and not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work.",
        presenter: "Justin Hall",
        link: "https://youtu.be/U5Jqx_7sQsw",
      },
      {
        time: "6:15pm",
        title: "The Power of Being Social: Building Your Network for Success",
        info: "We are going explore the importance of being social and building your network in today's world. We discuss the numerous benefits of socializing, including increased confidence, expanded skills, and new opportunities. We also provide practical tips and strategies for building and maintaining a strong network. Join us as we explore the power of being social and how it can lead to success in both personal and professional aspects of life. We will look at some of the opportunities locally with Google Developer Group and Grow with Google, regionally with Code Kentucky, and nationally with Toastmaster and others to expand your network and grow your career.",
        presenter: "John Flynn",
        link: "https://youtu.be/0WQA0Gi-KZM",
      },
      {
        time: "6:30pm",
        title: "Mastering Git Merges",
        info: "Git makes teams mighty! And as long as you're not working on the same parts of the repo at the same time then merging your code together is clean and simple. But then one day you're both working on the same bits and your git merge barfs and you're stuck in limbo! WHAT NOW?!?! You’ve got to master your merges. We’ll talk about different approaches to your workflows, including cli commands and gui tools, to help you make magical merges!",
        presenter: "Ron Northrip",
        link: "https://youtu.be/tR6JL99T9Zw",
      },
      {
        time: "7:00pm",
        title: "Lessons Learned in Knowledge Engineering",
        info: "Have you ever been so disappointed with data systems and knowledge practices that you started a company with co-conspirators to build a knowledge-based system? Join me in an examination of lessons learned from addressing data and knowledge challenges as a data scientist to building a knowledge-based system as a data engineer and CDO.",
        presenter: "Joe Blankenship",
        link: "https://youtu.be/jALnoM19jnI",
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
