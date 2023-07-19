import Nav from "./Nav"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="font-montserrat text-text">
        {/* Made the h-screen-minus-nav utility class in the tailwind config */}
        <div className="w-screen h-screen-minus-nav">
            <Image
            className="-z-20 absolute" 
            alt="a placeholder image of a cat"
            src="http://placekitten.com/600/400"
            layout="fill"
            objectFit="cover"
            />
          <div className="absolute w-full h-full bg-black/50 -z-10"></div>
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-8xl tracking-tight leading my-4 text-center">Lex Talk Tech</h1>
            <div className="flex flex-col text-3xl my-8 text-center">
              <span>A quarterly tech conference in the bluegrass</span>
              <span className="font-thin my-4">October 12th, 2023</span>
            </div>
            <Link className="text-3xl bg-primary/50 py-3 px-6 rounded-full border border-white/25 shadow-xl backdrop-blur-sm border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2" href='/tickets'>Tickets</Link>
          </div>
        </div>
        <h2>This is the next section</h2>
      </main>
    </>
  )
}
