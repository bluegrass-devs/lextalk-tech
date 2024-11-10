import Image from "next/image";
import Link from "next/link";
import conferenceTalk from "/public/images/conferenceTalk.jpg";

type LandingProps = {
  date: Date;
  formattedDate: string;
  ticketsUrl: string;
};

export const Landing: React.FC<LandingProps> = ({
  date,
  formattedDate,
  ticketsUrl,
}: LandingProps) => {
  return (
    <div className="w-screen h-screen-minus-nav ">
      <Image
        className="absolute"
        alt="Presentation at Lex Talk Tech conference"
        src={conferenceTalk}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition="right center"
      />
      <div>
        <div className="flex flex-col items-center justify-center h-screen-minus-nav">
          <div className="z-10 flex flex-col items-center px-8 py-4 mx-auto h-fit bg-black/50 w-fit">
            <h1 className="my-4 text-5xl tracking-tight text-center lg:text-8xl leading">
              Lex Talk Tech
            </h1>
            <div className="flex flex-col text-2xl text-center lg:text-3xl lg:my-8">
              <span>A quarterly tech conference in the bluegrass</span>
              <span className="my-2 font-thin lg:my-4">
                {formattedDate}
              </span>
            </div>
            {ticketsUrl && (
              <Link
                href={ticketsUrl}
                className="px-6 py-3 text-2xl duration-150 border border-b-2 rounded-full shadow-xl lg:text-3xl bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text hover:-translate-y-2"
              >
                Tickets
              </Link>
            )}
            {!ticketsUrl && (
            <Link
              href="/past"
              className="px-6 py-3 text-2xl duration-150 border border-b-2 rounded-full shadow-xl lg:text-3xl bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              Past Talks
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
