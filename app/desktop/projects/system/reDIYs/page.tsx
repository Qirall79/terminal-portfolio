import { Project } from '@/components/Project';
import projects from '@/data/data';

const details = projects.reDIYs;

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
