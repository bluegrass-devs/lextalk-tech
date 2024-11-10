import { Montserrat, Cabin } from "next/font/google";
import Nav from "./components/shared/Nav";
import Footer from "./components/shared/Footer"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-montserrat",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cabin",
});

// export const metadata = {
//   title: "LexTalk Tech",
//   description: "A quarterly tech conference in the bluegrass",
// };

// old ticket URL -> "https://www.affinna.com/event/f8142beea26e11ee8fae7facffad2127";
// if ticketURL is empty string then Ticket's links will not show
export const ticketsUrl = 'https://www.eventbrite.com/e/lextalk-tech-nov-7th-tickets-1000967299137';
export const conferenceDate = new Date(2024, 10, 7, 18);
export const formattedDateConferenceDate = conferenceDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const props = {ticketsUrl, conferenceDate, formattedDateConferenceDate}
  return (
    <html
      lang="en"
      className={`bg-accent text-text ${montserrat.variable} ${cabin.variable}`}
    >
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className="bg-background flex flex-col">
        <Nav {...props} />
        <main className="min-h-screen">{children}</main>
        <Footer {...props} />
      </body>
    </html>
  );
}
