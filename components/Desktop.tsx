'use client';

import Link from 'next/link';
import { FaFileAlt } from 'react-icons/fa';
import { IoFolder } from 'react-icons/io5';

export const Desktop = () => {
  return (
    <div className='p-8 flex space-x-12 items-end justify-center md:justify-start'>
      <Link href={'/desktop/projects'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <IoFolder size={42} />
        <p>projects</p>
      </Link>

      <Link href={'/desktop/about'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <FaFileAlt size={36} />
        <p>about.txt</p>
      </Link>
    </div>
  );
};
