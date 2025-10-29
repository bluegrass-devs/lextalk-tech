import { getData } from "@/lib/data";
import Nav from "./Nav";

export default async function NavWrapper() {
  const data = getData();
  return <Nav ticketsUrl={data?.ticketLink} />;
}
