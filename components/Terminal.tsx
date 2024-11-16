/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { Prompt } from './Prompt';

export const Terminal = () => {
  const [content, setContent] = useState(['This is some content']);
  const [dir, setDir] = useState('/');

  const addContent = (c: string[]) => {
    setContent([...content, ...c]);
  };

  const handleCommand = (command: string) => {
    if (command == 'clear') setContent([]);
    else addContent(['$> ' + command, 'This is some result']);
  };

  const handleKeys = (e) => {
    if (e.metaKey && e.key == 'k') setContent([]);
  };

  return (
    <div
      onKeyDown={handleKeys}
      className='w-full max-w-screen flex-grow p-4 flex flex-col'
    >
      {content.map((c, i) => {
        if (c.startsWith('$>')) {
          let [start, end] = c.split('$>');

          start = dir == '/' ? '' : dir;

          return (
            <p className='break-words break-all' key={i}>
              <span className='font-bold text-[#9B87F5]'>{start + ' $>'}</span>
              <span>{end}</span>
            </p>
          );
        }

        return (
          <p
            className={`${
              c.startsWith('$>') ? 'font-bold text-[#9B87F5]' : ''
            } break-words break-all`}
            key={i}
          >
            {c}
          </p>
        );
      })}
      <Prompt handleCommand={handleCommand} />
    </div>
  );
};
