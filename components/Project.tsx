import Link from 'next/link';
import React from 'react';

export const Project = ({ details }) => {
  return (
    <div className='max-w-[800px]'>
      <br />
      <p>{details.description}</p>
      <br />
      <div className='flex flex-col items-start md:flex-row space-x-4 md:items-center'>
        <span className='font-bold'>technologies used: </span>
        <ul
          className={`flex flex-wrap text-left gap-x-4 font-semibold md:text-base`}
        >
          {details.tech.map((t, i) => {
            return (
              <li
                className={`${i % 2 ? 'text-emerald-200' : 'text-blue-400'}`}
                key={t}
              >
                {t}
              </li>
            );
          })}
        </ul>
      </div>

      {details.image && (
        <>
          <br />
          <img
            className='rounded-md w-[450px]'
            src={details.image}
            alt={'project details'}
          />
        </>
      )}

      <br />
      <div className='flex space-x-4 font-bold'>
        <Link
          className='text-cyan-400 hover:text-cyan-600 transition-all'
          href={details.code}
        >
          Code
        </Link>
        {details.live && (
          <Link
            className='text-fuchsia-500 hover:text-fuchsia-700 transition-all'
            href={details.live}
          >
            Live
          </Link>
        )}
      </div>
      <br />
    </div>
  );
};
