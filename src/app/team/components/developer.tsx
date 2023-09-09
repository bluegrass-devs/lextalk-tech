import Image from "next/image";

interface DevProps {
  devData: {
    name: string;
    image: string;
    bio: string;
  };
}

export const Developer: React.FC<DevProps> = ({ devData }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-8">
        <div className="mx-auto">
          <Image
            src={devData.image}
            width="500"
            height="500"
            alt="dev"
            className="rounded-full"
          />
        </div>
        <h2 className="text-3xl font-bold mx-auto my-4">{devData.name}</h2>
        <p className="w-3/4 text-center">{devData.bio}</p>
      </div>
    </>
  );
};
