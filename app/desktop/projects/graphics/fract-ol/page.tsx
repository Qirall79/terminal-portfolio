import { Project } from '@/components/Project';

const details = {
  description:
    'Fract-ol is a generator for fractals such as the Mandelbrot and Julia sets using C and MinilibX.',
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
