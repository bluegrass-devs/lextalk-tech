import Link from "next/link";
import { FaMicrophone, FaCode, FaPeopleGroup } from "react-icons/fa6";

const features = [
  {
    icon: FaMicrophone,
    title: "Deep Tech Talks",
    description: "Cutting-edge technologies and advanced innovations",
  },
  {
    icon: FaCode,
    title: "Tech In Action",
    description: "Practical, real-world applications",
  },
  {
    icon: FaPeopleGroup,
    title: "Welcoming Atmosphere",
    description: "Tech veterans, students, & local leaders",
  },
];

export default function AboutSummary() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl mb-6 text-center">What is LexTalk Tech?</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        LexTalk Tech brings together tech professionals, innovators, students,
        and community leaders for an evening of cutting-edge discussions and
        local connections.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-accent rounded-lg p-8 text-center flex flex-col items-center gap-4 shadow-md"
          >
            <feature.icon className="text-secondary text-4xl" />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/about"
          className="px-6 py-3 text-xl duration-150 border border-b-2 rounded-full bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text hover:-translate-y-2 inline-block"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
