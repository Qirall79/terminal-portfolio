import { Project } from '@/components/Project';

const details = {
  description:
    'Webserv is a custom HTTP server built from scratch in C++98, designed to function similarly to Nginx. Developed by Qirall79 and ApplexX7, it supports essential web server features such as static file serving, directory listing, and CGI execution. The server handles multiple concurrent clients using I/O multiplexing and supports HTTP methods like GET, POST, and DELETE.',
  image: '/images/webserv.png',
  code: 'github.com/qirall79',
  live: 'github.com/qirall79',
  tech: ['C++'],
};

export default function Home() {
  return (
    <div className='p-8 flex space-x-12 items-start'>
      <Project details={details} />
    </div>
  );
}
