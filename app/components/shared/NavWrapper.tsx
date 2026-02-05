import { getCurrentEvent } from "@/lib/data";
import Nav from "./Nav";

export default async function NavWrapper() {
  const data = getCurrentEvent();
  return <Nav ticketsUrl={data?.ticketLink} />;
}
