import { Developer } from "./components/developer";

export default function Team() {
  const devData = {
    dev: [
      {
        name: "Ember Borja",
        image: "/images/conferenceTalk.jpg",
        bio: "My name is Ember Borja. I'm a developer from Lexington, Kentucky with varied background in music and photography. I love building things that get used and ",
      },
      {
        name: "Neal Powers",
        image: "/images/joeTalk.jpg",
        bio: "My name is Neal Powers. I'm a freelance developer from Lexington, Kentucky looking for my first role at a company! I have a varied background in music and photography and love all things JavaScript!",
      },
    ],
  };

  const developers = devData.dev.map((dev) => (
    <Developer key={dev.name} devData={dev} />
  ));

  return (
    <div className="font-montserrat mx-4">
      <h1 className="text-3xl text-center my-8">
        This website wouldn&apos;t be possible the work of the following
        developers:
      </h1>
      {developers}
    </div>
  );
}
