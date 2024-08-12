import { Montserrat, Cabin } from "next/font/google";
import Nav from "./Nav";
import Footer from "./Footer";
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
//     title: "LexTalk Tech",
//     description: "A quarterly tech conference in the bluegrass",
// };

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
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
