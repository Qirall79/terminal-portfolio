import { Header } from '@/components/Header';
import { redirect } from 'next/navigation';



export default function Home() {

  redirect('/terminal')

  return (
    <div className='w-full min-h-screen bg-[#1A1F2C] flex flex-col'>
      <Header mode='desktop' />
    </div>
  );
}
