import Link from 'next/link';
import { LuFileDigit } from 'react-icons/lu';

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start justify-center md:justify-start'>
      <Link href={'/desktop/projects/web/transcendence'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>transcendence</p>
      </Link>
      <Link href={'/desktop/projects/web/pawtograph'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>pawtograph</p>
      </Link>
      <Link href={'/desktop/projects/web/note-it'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>note-it</p>
      </Link>
      <Link href={'/desktop/projects/web/walidbook'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>walidbook</p>
      </Link>
    </div>
  );
}
