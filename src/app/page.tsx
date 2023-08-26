import Image from "next/image";
import Link from "next/link";
import Landing from "./components/Landing";
import joeTalk from "../../public/images/joeTalk.jpg";

export default function Home() {
  const data = {
    schedule: [
      {
        topic: "Building Community",
        time: "6:00 EST",
        presenter: "Ember Borja",
      },
      {
        topic: "Freelancing 101",
        time: "6:30 EST",
        presenter: "Neal Grindstaff",
      },
      {
        topic: "Fun with Figma",
        time: "7:00 EST",
        presenter: "Mariola Hullings",
      },
      {
        topic: "Another example",
        time: "8:00 EST",
        presenter: "Some person",
      },
    ],
    // Dates are 0 indexed in JavaScript, so October = 9
    date: new Date(2023, 9, 12),
  };

  return (
    <>
      <main className="font-montserrat text-text">
        <Landing date={data.date} />
        <div className="my-12 mx-auto max-w-screen-xl px-4">
          <div className="flex items-center w-1/3 justify-between my-8">
            <h2 className="text-3xl">Schedule</h2>
            <Link
              href="/speakers"
              className="text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 backdrop-blur-sm border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2"
            >
              Speakers
            </Link>
          </div>
          <table className="w-full text-xl md:text-3xl">
            <thead className="">
              <tr className="text-2xl text-left">
                <th className="mx-3">Time</th>
                <th className="mx-3">Topic</th>
                <th className="mx-3">Presenter</th>
              </tr>
            </thead>
            <tbody>
              {data.schedule.map((line, index) => (
                <tr key={index} className="">
                  <td
                    className={`${
                      index % 2 == 0 ? "bg-accent" : "bg-background"
                    } 'm-3 font-bold'`}
                  >
                    <time>{line.time}</time>
                  </td>
                  <td
                    className={`${
                      index % 2 == 0 ? "bg-accent" : "bg-background"
                    } 'm-3 font-bold'`}
                  >
                    {line.topic}
                  </td>
                  <td
                    className={`${
                      index % 2 == 0 ? "bg-accent" : "bg-background"
                    } 'm-3 font-bold'`}
                  >
                    {line.presenter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-screen h-screen relative">
          <Image
            className="-z-20 absolute"
            alt="Presentation at Lex Talk Tech conference"
            src={joeTalk}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <div className="my-12 mx-auto max-w-screen-xl px-8">
          <h1 className="text-3xl">Event Organizers:</h1>
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
            <div className="flex flex-col items-center w-fit my-8">
              <div className="w-96 h-96 relative flex flex-col items-center">
                <Image
                  className="absolute rounded-full"
                  alt="Joe Krazat"
                  src="http://placekitten.com/600/400"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right center"
                />
              </div>
              <div className="text-2xl">Joe Krazat</div>
            </div>
            <div className="flex flex-col items-center w-fit my-8">
              <div className="w-96 h-96 relative flex flex-col items-center">
                <Image
                  className="absolute rounded-full"
                  alt="This other person"
                  src="http://placekitten.com/600/400"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right center"
                />
              </div>
              <div className="text-2xl">This other person</div>
            </div>
          </div>
        </div> */}
        <div className="my-12 mx-auto max-w-screen-xl px-4">
          <h2 className="text-3xl">Location:</h2>
          <div className="flex-row justify-center items-center max-w-screen-xl mx-auto my-12  md:flex">
            <div className="w-full md:w-1/2 h-96">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.236842997967!2d-84.50669982410395!3d38.041567371919385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424522fafce13d%3A0xfec16cb4172a8bfd!2sThe%20Cornerstone!5e0!3m2!1sen!2sus!4v1691424457551!5m2!1sen!2sus"
                width=""
                height=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-2xl my-8 md:mx-8">
              <h3 className="text-3xl font-bold py-2">The Cornerstone</h3>
              <div>401 South Limestone</div>
              <div>Lexington, KY 40508</div>
              <div>6PM - 9PM EST</div>
              <div>October 12, 2023</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
