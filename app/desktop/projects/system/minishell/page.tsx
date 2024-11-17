import { Project } from '@/components/Project';

const details = {
  description: 'This is an implementation of bash using C',
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
