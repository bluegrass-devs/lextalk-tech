import Link from "next/link";

interface ScheduleEntry {
  topic: string;
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
            <tr key={index} className="hover:scale-110 duration-100">
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
    </Link>
  );
};
