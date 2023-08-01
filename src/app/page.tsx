import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const dummyData = [
    {
      topic: 'Building Community',
      time: '6:00 EST',
      presenter: 'Ember Borja',
    },
    {
      topic: 'Freelancing 101',
      time: '6:30 EST',
      presenter: 'Neal Grindstaff',
    },
    {
      topic: 'Fun with Figma',
      time: '7:00 EST',
      presenter: 'Mariola Hullings'
    },
  ]

  return (
    <>
      <main className="font-montserrat text-text">
        <div className="w-screen h-screen-minus-nav">
            <Image
            className="-z-20 absolute" 
            alt="Presentation at Lex Talk Tech conference"
            src="/images/conferenceTalk.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="right center"
            />
          <div className="h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center h-fit bg-black/50 w-fit p-8 mx-auto">
              <h1 className="text-8xl tracking-tight leading my-4 text-center">Lex Talk Tech</h1>
              <div className="flex flex-col text-3xl my-8 text-center">
                <span>A quarterly tech conference in the bluegrass</span>
                <span className="font-thin my-4">October 12th, 2023</span>
              </div>
              <Link href='/tickets' className="text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 shadow-xl backdrop-blur-sm border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2">Tickets</Link>
            </div>
            </div>
        </div>
        <div className="my-12 w-full">
          <div className="px-4 flex items-center w-1/3 justify-between my-8">
            <h2 className="text-3xl px-4">Schedule</h2>
            <Link href='/speakers' className="text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 backdrop-blur-sm border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2">Speakers</Link>
          </div>
          <table className="w-full text-xl md:text-3xl">
            <thead className="">
              <tr className="text-2xl text-left">
                <th className="px-3">Time</th>
                <th className="px-3">Topic</th>
                <th className="px-3">Presenter</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((line, index) =>
                <tr key={index} className="">
                  <td className="bg-accent p-3 font-bold"><time>{line.time}</time></td>
                  <td className="bg-accent p-3">{line.topic}</td>
                  <td className="bg-accent p-3">{line.presenter}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <h1 className="text-3xl px-4">Event Organizers:</h1>
        <div className="flex flex-col md:flex-row justify-evenly w-screen">
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
          <h2 className="text-3xl px-4">Location:</h2>
          <div className="flex justify-center items-center max-w-screen-xl mx-auto my-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.236661703714!2d-84.50669982195315!3d38.041571596742926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424522fafce13d%3A0xfec16cb4172a8bfd!2sThe%20Cornerstone!5e0!3m2!1sen!2sus!4v1690843095138!5m2!1sen!2sus" width="600" height="600" loading="lazy"></iframe>
            <div className="text-2xl mx-8">
              <h3 className="text-3xl font-bold py-2">The Cornerstone</h3>
              <div>401 South Limestone</div>
              <div>Lexington, KY 40508</div>
              <div>6PM - 9PM EST</div>
              <div>October 12, 2023</div>
            </div>
          </div>
      </main>
    </>
  )
}