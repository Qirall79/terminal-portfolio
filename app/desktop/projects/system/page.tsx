import Link from 'next/link';
import { LuFileDigit } from 'react-icons/lu';

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start justify-center md:justify-start'>
      <Link href={'/desktop/projects/system/reDIYs'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>reDIYs</p>
      </Link>
      <Link href={'/desktop/projects/system/webserv'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>webserv</p>
      </Link>
      <Link href={'/desktop/projects/system/minishell'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>minishell</p>
      </Link>
    </div>
  );
}
