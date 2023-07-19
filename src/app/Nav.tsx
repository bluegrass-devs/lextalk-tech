'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaMeetup, FaBars } from 'react-icons/fa6'
import { useState } from 'react'

export default function Nav () {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className='bg-accent z-20'>
                <div className='h-24 flex flex-col md:flex-row md:items-center text-3xl font-montserrat font-thin'>
                    {/* Left Side  */}
                    <div className="flex h-full">
                        <FaBars 
                            className='mx-10 my-auto md:hidden'
                            onClick={toggleMenu}
                        />
                        <Link href='/'>
                            <Image
                                className="relative w-44 mx-8" 
                                src='/images/logoTransparent.png'
                                alt='LexTalk Logo'
                                width={1009}
                                height={568}
                            />
                        </Link>
                    </div>
                    {/* Mobile */}
                    <div className={`${menu ? '' : 'hidden'} md:hidden z-20 bg-accent/75 block flex flex-col w-full items-center`}>
                        <Link href='/' className='my-4'>Home</Link>
                        <Link href='/about' className='my-4'>About</Link>
                        <Link href='/speakers' className='my-4'>Speakers</Link>
                        <Link href='/tickets' className='my-4'>Tickets</Link>
                        <Link href='/past' className='my-4'>Past LexTalk</Link>
                    </div>
                    {/* Desktop */}
                    <div className='md:flex w-full justify-evenly hidden'>
                        <Link href='/' className='border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2'>Home</Link>
                        <Link href='/about' className='border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2'>About</Link>
                        <Link href='/speakers' className='border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2'>Speakers</Link>
                        <Link href='/tickets' className='border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2'>Tickets</Link>
                        <Link href='/past' className='border-b-2 border-transparent duration-150 hover:scale-110 hover:border-text hover:-translate-y-2'>Past LexTalk</Link>
                    </div>
                    <div className='flex mx-4 hidden'>
                        <a href="https://www.meetup.com/The-Bluegrass-Developers-Guild/" className="mx-4 duration-150 hover:scale-110"><FaMeetup /></a>
                        <a href="https://github.com/bluegrass-devs" className="mx-4 duration-150 hover:scale-110"><FaGithub /></a>
                    </div>
                </div>
        </nav>
    )
}