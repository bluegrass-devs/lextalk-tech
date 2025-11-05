import { Montserrat, Cabin } from "next/font/google";
import NavWrapper from "./components/shared/NavWrapper";
import Footer from "./components/shared/Footer"
import "./globals.css";
import { DataProvider } from "./context/DataContext";

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
//   description: "A tech conference in the bluegrass",
// };

// old ticket URL -> "https://www.affinna.com/event/f8142beea26e11ee8fae7facffad2127";
// if ticketURL is empty string then Ticket's links will not show

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-accent text-text ${montserrat.variable} ${cabin.variable}`}
    >
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
        <body className="bg-background flex flex-col">
          <DataProvider>
              <NavWrapper />
                <main className="min-h-screen">{children}</main>
              <Footer/>
          </DataProvider>
        </body>
    </html>
  );
}
