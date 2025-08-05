import Link from 'next/link';
import { LuFileDigit } from 'react-icons/lu';

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start justify-center md:justify-start'>
      <Link href={'/desktop/projects/graphics/cub3d'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>cub3d</p>
      </Link>
      <Link href={'/desktop/projects/graphics/fract-ol'} className='flex flex-col space-y-2 items-center hover:text-indigo-400 cursor-pointer transition-all'>
        <LuFileDigit size={36} />
        <p>fract-ol</p>
      </Link>
    </div>
  );
}
