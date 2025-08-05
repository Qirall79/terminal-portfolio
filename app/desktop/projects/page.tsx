import Link from 'next/link';
import { IoFolder } from 'react-icons/io5';

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start justify-center md:justify-start'>
      <Link href={'/desktop/projects/web'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <IoFolder size={42} />
        <p>web</p>
      </Link>
      
      <Link href={'/desktop/projects/system'} className='flex flex-col space-y-2 items-center text-center hover:text-indigo-400 cursor-pointer transition-all'>
        <IoFolder size={42} />
        <p>system <br /> programming</p>
      </Link>
      
      <Link href={'/desktop/projects/graphics'} className='flex flex-col space-y-2 items-center text-center hover:text-indigo-400 cursor-pointer transition-all'>
        <IoFolder size={42} />
        <p>computer <br /> graphics</p>
      </Link>
    </div>
  );
}
