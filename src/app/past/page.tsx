import Link from "next/link";

export default function Past() {
  return (
    <>
      <div className="max-w-screen-xl px-4 mx-auto my-12">
        <h1 className="text-5xl font-bold font-cabin">Past LexTalks</h1>
        <table className="w-full text-xl md:text-3xl">
          <tbody>
            <tr key="1" className="">
              <td className="font-bold ">
                <ul className="">
                  <li className="py-2 transition duration-150 hover:scale-110 w-fit">
                    <Link href="/past/2023-05-18">2023-05-18</Link>
                  </li>
                  <li className="py-2 transition duration-150 hover:scale-110 w-fit">
                    <Link href="/past/2023-10-12">2023-10-12</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
