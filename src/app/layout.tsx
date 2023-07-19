import Nav from './Nav'
import Footer from './Footer'
import './globals.css'
import { Montserrat, Cabin } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--font-montserrat'
})

const cabin = Cabin({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cabin'
})

export const metadata = {
  title: 'LexTalk Tech',
  description: 'A semi-annual tech conference in the bluegrass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background text-text ${montserrat.variable} ${cabin.variable}`}>
      <body>
          <Nav />
          {children}
          <Footer />
      </body>
    </html>
  )
}
