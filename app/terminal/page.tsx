import { Header } from '@/components/Header';
import { Terminal } from '@/components/Terminal';

export default function Home() {

  return (
    <div className='w-full min-h-screen bg-[#1A1F2C] flex flex-col'>
      <Header mode='desktop' />
      <Terminal />
    </div>
  );
}
