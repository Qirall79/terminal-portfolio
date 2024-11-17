import { Project } from '@/components/Project';

const details = {
  description:
    "This is a note taking web app that is similar to Google Keep. You want to remember something important by fear to forgetting it ? I got your back, u simply create an account and start creating. Whenever u comeback, your notes are still there ! You can create, delete and edit your notes. Notes must be associated to a project. You can create a project on the sidebar, and u can delete it when you're done with it.",
  image: '/images/noteit.png',
  code: 'github.com/qirall79',
  live: 'github.com/qirall79',
  tech: [
    'React.js',
    'TypeScript',
    'Tailwind',
    'Node.js',
    'Express.js',
    'MongoDB',
  ],
};

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
