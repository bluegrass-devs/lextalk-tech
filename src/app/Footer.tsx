import { FaMeetup, FaCode, FaGithub } from 'react-icons/fa6'
import Link from 'next/link'

export default function Footer () {
    return (
      <>
        <footer className='text-text bg-accent font-montserrat text-sm'>
            <div className='md:w-1/3 mx-auto flex flex-col flex-shrink'>
                <span className='text-center'>© Copyright 2023</span>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 my-2'>
                    <Link href='/' className='my-2 w-48 text-center transition duration-150 hover:text-white hover:scale-110'>Home</Link>
                    <Link href='/about' className='my-2 w-48 text-center transition duration-150 hover:text-white hover:scale-110'>About</Link>
                    <Link href='/speakers' className='my-2 w-48 text-center transition duration-150 hover:text-white hover:scale-110'>Speakers</Link>
                    <Link href='/tickets' className='my-2 w-48 text-center transition duration-150 hover:text-white hover:scale-110'>Tickets</Link>
                    <Link href='/past' className='my-2 w-48 text-center whitespace-nowrap transition duration-150 hover:text-white hover:scale-110'>Past Events</Link>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='flex w-1/2 md:w-1/4 justify-center text-2xl my-2 gap-4'>
                        <a className="transition duration-150 hover:text-white hover:scale-110" href="https://www.meetup.com/The-Bluegrass-Developers-Guild/"><FaMeetup /></a>
                        <a className="transition duration-150 hover:text-white hover:scale-110" href="https://www.bluegrassdevs.org/"><FaCode /></a>
                        <a className="transition duration-150 hover:text-white hover:scale-110" href="https://github.com/bluegrass-devs/lextalk-tech"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
  }