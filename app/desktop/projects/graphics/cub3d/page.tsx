import { Project } from '@/components/Project';

const details = {
  description:
    'Cub3d is a raycasting engine using C and MinilibX, similar to the Wolfenstein 3D game.',
  image: '',
  code: 'github.com/qirall79',
  live: 'github.com/qirall79',
  tech: ['C', 'MinilibX'],
};

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
