'use client';

import Link from 'next/link';
import Image from 'next/image';
import icon from '@/public/images/icon.png'

function NavBar() {
    return (
        <div className="w-full py-5 sticky top-0 z-50 bg-[#282C33]">
            <div className="flex justify-around items-center">
                <Link href='/' className="font-bold text-md text-white flex items-center gap-2">
                    <Image 
                        src={icon}
                        alt="logo"
                        width={16}
                        height={16}
                    />
                    Luv Kansal
                </Link>
                <ul className="list-none flex justify-center items-center gap-8 text-[#ABB2BF] text-md">
                    <li>
                        <Link href="/" className="hover:text-white cursor-pointer transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="hover:text-white cursor-pointer transition">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-white cursor-pointer transition">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#achievements" className="hover:text-white cursor-pointer transition">
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link href="#tech-stack" className="hover:text-white cursor-pointer transition">
                            Tech Stack
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-white cursor-pointer transition">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
