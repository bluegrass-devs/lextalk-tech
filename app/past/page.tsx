import Link from "next/link";
import { getFilenames } from "../lib/data";

export default function Past() {
  const pastTalks = getFilenames("public/data/past").reverse();

  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto my-12">
        <h1 className="text-5xl font-bold font-cabin">Past LexTalks</h1>
		<ul className="text-xl md:text-3xl">
			{pastTalks.map((date) => (
				<li key={date} className="py-2 transition duration-150 hover:scale-1109 w-fit">
					<Link href={`/past/${date}`}>{date}</Link>
				</li>
			))}
		</ul>
      </div>
    </>
  );
}
