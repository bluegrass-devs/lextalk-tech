import Nav from "./Nav";
import Footer from "./Footer";
import "./globals.css";
import { Montserrat, Cabin } from "next/font/google";

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

export const metadata = {
  title: "LexTalk Tech",
  description: "A quarterly tech conference in the bluegrass",
};

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
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="bg-background flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
