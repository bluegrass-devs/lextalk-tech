export default function Past() {
  return (
    <>
    <div className="my-12 mx-auto max-w-screen-xl px-4">
      <h1 className="text-2xl font-cabin">
        List of past LexTalks
      </h1>
      <table className="w-full text-xl md:text-3xl">
        <tbody>
          <tr key="1" className="">
            <td className="m-3 font-bold">
              <ul className="list-disc">
                <li><a href="/past/2023-05-18">2023-05-18</a></li>
                <li><a href="/past/2023-10-12">2023-10-12</a></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
