import { Developer } from "./components/Developer";

export default function Team() {
  const devData = [
    {
      name: "Ember Borja",
      image: "/images/conferenceTalk.jpg",
      alt: "Ember presenting at LexTalk Tech",
      bio: "Hi! I'm Ember. I'm a developer in Lexington, Kentucky, a trans woman, and an organizer for several community groups in town. Please reach out and chat! :)",
    },
    {
      name: "Neal Powers",
      image: "/images/Neal.JPG",
      alt: "Neal over the Seattle skyline",
      bio: "My name is Neal Powers. I'm a freelance developer from Lexington, Kentucky looking for my first role at a company! I have a varied background in music and photography and love all things JavaScript!",
    },
    {
      name: "Mariola Hullings",
      image: "/images/Mariola.jpg",
      alt: "Professional headshot of Mariola",
      bio: "I'm Mariola Hullings, I am a dedicated iOS developer, looking for my next role. Beyond the world of web and app development, I enjoy hiking and exploring new horizons.",
    },
  ];

  return (
    <div className="font-montserrat px-4 max-w-screen-lg mx-auto">
      <h1 className="text-3xl text-center py-8">
        This website wouldn&apos;t be possible the work of the following
        developers:
      </h1>
      {
        devData.map((dev) => (
          <Developer key={dev.name} devData={dev} />
        ))
      }
    </div>
  );
}
