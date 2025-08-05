'use client';

import Link from 'next/link';

const skills = [
  'Next.js',
  'React.js',
  'Redux',
  'TypeScript',
  'AWS',
  'Express.js',
  'MongoDB',
  'Node.js',
  'Tailwind CSS',
  'C',
  'C++',
  'Java',
  'Python',
  'Git',
];

export const About = () => {
  return (
    <div className='text-left pr-4'>
      <br />
      <p className='max-w-[800px] text-justify'>
        I&apos;m{' '}
        <span className='font-semibold text-blue-200'>Walid Belfatmi</span>, a
        self-taught full stack developer. The combination of creativity, problem
        solving, and permanent learning is what drives my passion for
        programming in general, and specifically web development.
      </p>

      <br />
      <p className='font-semibold text-[#b2a4f4]'>Resume: </p>
      <div className='flex justify-between space-x-2 md:space-x-8 translate-x-4 max-w-[600px] text-sm md:text-base mb-2'>
        <Link
        className='text-blue-300 hover:text-blue-200'
          href='/walid_belfatmi_resume.pdf'
          target='_blank'
          download={'walid_belfatmi_resume.pdf'}
        >
          walid_belfatmi_resume.pdf
        </Link>
      </div>

      <br />
      <p className='font-semibold text-[#b2a4f4]'>Education: </p>
      <div className='flex justify-between space-x-2 md:space-x-8 translate-x-4 max-w-[600px] text-sm md:text-base mb-2'>
        <p>1337 Coding School (Software Development)</p>
        <p>2023 - 2025</p>
      </div>
      <div className='flex justify-between space-x-2 md:space-x-8 translate-x-4 max-w-[600px] text-sm md:text-base'>
        <p>ENCG Settat (Financial Management)</p>
        <p>2019 - 2023</p>
      </div>

      <br />

      <p className='font-semibold text-[#b2a4f4]'>Experiences: </p>
      <div className='flex space-x-2 md:space-x-8 translate-x-4 text-sm md:text-base'>
        <p>Oracle (Research Assistant)</p>
        <p>Mar 2025 - Sep 2025</p>
      </div>
      <div className='flex space-x-2 md:space-x-8 translate-x-4 text-sm md:text-base'>
        <p>Astren Empower (Intern full stack developer)</p>
        <p>Apr 2023 - Jul 2023</p>
      </div>

      <br />

      <p className='font-semibold text-[#b2a4f4]'>Skills: </p>
      <ul className='flex flex-wrap gap-x-4 translate-x-4'>
        {skills.map((s, j) => {
          return (
            <li
              className={`${j % 2 ? 'text-emerald-300' : 'text-cyan-300'}`}
              key={j}
            >
              {s}
            </li>
          );
        })}
      </ul>

      <br />

      <p className='font-semibold text-[#b2a4f4]'>Contact: </p>
      <ul className='flex flex-wrap space-x-4 translate-x-4 font-semibold'>
        <li className='text-red-300 hover:text-red-200 transition-all'>
          <Link href={'mailto:walidbelfatmi.dev@gmail.com'} target='_blank'>
            Email
          </Link>
        </li>
        <li className='text-blue-500 hover:text-blue-400 transition-all'>
          <Link
            href={'https://www.linkedin.com/in/walid-belfatmi-1587751a2/'}
            target='_blank'
          >
            LinkedIn
          </Link>
        </li>
        <li className='text-slate-400 hover:text-slate-300 transition-all'>
          <Link href={'https://github.com/Qirall79'} target='_blank'>
            Github
          </Link>
        </li>
      </ul>

      <br />
    </div>
  );
};
