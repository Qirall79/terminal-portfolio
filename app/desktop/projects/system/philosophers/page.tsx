import { Project } from '@/components/Project';

const details = {
  description:
    'This is a simulation of the Dining Philosophers problem using both posix threads and semaphores in C.',
  image: '',
  code: 'github.com/qirall79',
  live: 'github.com/qirall79',
  tech: ['C'],
};

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
