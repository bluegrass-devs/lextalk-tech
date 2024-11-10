import Link from "next/link";

interface ScheduleEntry {
  title: string;
  time: string;
  presenter?: string;
}

interface ScheduleTableProps {
  data: ScheduleEntry[];
}

export const ScheduleTable: React.FC<ScheduleTableProps> = ({ data }) => {
  return (
    <Link href="/talks">
      <table className="w-full text-xl md:text-3xl">
        <thead className="">
          <tr className="text-2xl text-left">
            <th className="mx-3">Time</th>
            <th className="mx-3">Topic</th>
            <th className="mx-3">Presenter</th>
          </tr>
        </thead>
        <tbody>
          {data.map((line, index) => (
            <tr key={index} className="duration-100 hover:scale-110">
              <td
                className={`${
                  index % 2 == 0 ? "bg-accent" : "bg-background"
                } 'p-3 py-4 font-bold'`}
              >
                <time>{line.time}</time>
              </td>
              <td
                className={`${
                  index % 2 == 0 ? "bg-accent" : "bg-background"
                } 'p-3 py-4 font-bold'`}
              >
                {line.title}
              </td>
              <td
                className={`${
                  index % 2 == 0 ? "bg-accent" : "bg-background"
                } 'p-3 py-4 font-bold'`}
              >
                {line.presenter ? line.presenter : "N/a"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Link>
  );
};
