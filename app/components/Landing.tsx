import Image from "next/image";
import Link from "next/link";
import conferenceTalk from "/public/images/conferenceTalk.jpg";

type LandingProps = {
  date?: string;
  ticketsUrl?: string;
  speakersUrl?: string;
};

const buttonStyles =
  "px-6 py-3 text-2xl duration-150 border border-b-2 rounded-full shadow-xl lg:text-3xl bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text hover:-translate-y-2";

export const Landing: React.FC<LandingProps> = ({
  date,
  ticketsUrl,
  speakersUrl,
}: LandingProps) => {

  return (
    <div className="h-screen-minus-nav">
      <Image
        className="absolute"
        alt="Presenter at the LexTalk Tech conference. Crowd visible."
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
              <span>A tech conference in the bluegrass</span>
              <span className="my-2 font-thin lg:my-4">
                {date ? date : "TBD"}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {ticketsUrl && (
                <Link href={ticketsUrl} className={buttonStyles}>
                  Tickets
                </Link>
              )}
              {speakersUrl && (
                <Link href={speakersUrl} className={buttonStyles}>
                  Call for Speakers
                </Link>
              )}
              {!ticketsUrl && !speakersUrl && (
                <Link href="/past" className={buttonStyles}>
                  Past Talks
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
