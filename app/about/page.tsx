import Image from "next/image";
import { FaMicrophone, FaCode, FaPeopleGroup } from "react-icons/fa6";
import { getCurrentEvent, getDateFromFilename } from "../lib/data";
import { formattedDate } from "../lib/FormattedDate";

const pillars = [
  {
    icon: FaMicrophone,
    title: "Deep Tech Talks",
    description:
      "Cutting-edge technologies and advanced innovations shared through a mix of lightning 15-minute talks and in-depth 30-minute sessions.",
  },
  {
    icon: FaCode,
    title: "Tech In Action",
    description:
      "Practical, real-world applications you can take back to your work and projects.",
  },
  {
    icon: FaPeopleGroup,
    title: "Welcoming Atmosphere",
    description:
      "Connecting tech veterans, students, and local leaders in a casual, fun environment.",
  },
];

export default function About() {
  const data = getCurrentEvent();
  const date = data ? formattedDate(getDateFromFilename(data.filename)) : "TBD";

  return (
    <div className="flex flex-col gap-20 py-16 px-4 max-w-screen-xl mx-auto text-text font-montserrat">
      <section>
        <h1 className="text-4xl mb-10 text-center">What is LexTalk Tech?</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 text-lg leading-relaxed flex flex-col gap-4">
            <p>
              LexTalk Tech is a quarterly conference in Lexington, KY that
              brings together tech professionals, innovators, students, and
              community leaders for an evening of cutting-edge discussions and
              local connections.
            </p>
            <p>
              Hosted by TAB (Technology Association of the Bluegrass), LexTalk
              Tech features a mix of lightning 15-minute talks and in-depth
              30-minute sessions designed to inspire and inform.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              className="rounded-lg object-contain"
              src="/images/panel.jpg"
              alt="A panel discussion between three tech professionals"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl mb-10 text-center">
          What Makes LexTalk Tech Unique?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-accent rounded-lg p-8 text-center flex flex-col items-center gap-4 shadow-md"
            >
              <pillar.icon className="text-secondary text-4xl" />
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              <p className="leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl mb-6 text-center">The Vibe</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore the latest in technology while strengthening the Bluegrass tech
          community. Whether you&apos;re a seasoned pro or just getting started,
          expect a lively atmosphere, plenty of laughs, and great opportunities
          to connect with fellow tech enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            className="rounded-lg object-contain"
            src="/images/panel.jpg"
            alt="A panel discussion between three panelists. One panelist gesturing."
            width={800}
            height={500}
          />
          <Image
            className="rounded-lg object-contain"
            src="/images/typewriter.jpg"
            alt="A presenter pointing at a projection of a typewriter."
            width={800}
            height={500}
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl mb-10 text-center">When & Where</h2>
        <div className="bg-accent rounded-lg p-10 max-w-lg mx-auto text-center text-lg shadow-md">
          <a href="https://maps.app.goo.gl/C4EsyQ1jtaKxAVYa7" target="_blank">
            <h3 className="text-2xl font-bold mb-4">The Cornerstone</h3>
            <p>401 South Limestone</p>
            <p>Lexington, KY 40508</p>
            <p className="mt-4">6PM - 10PM</p>
            <p className="mt-2 font-bold">{date}</p>
          </a>
        </div>
      </section>
    </div>
  );
}
