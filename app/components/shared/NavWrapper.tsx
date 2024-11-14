import { getData } from "@/lib/data";
import Nav from "./Nav";

export default async function NavWrapper() {
  const data = await getData();
  return <Nav ticketsUrl={data?.ticketLink} />;
}