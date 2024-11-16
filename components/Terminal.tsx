/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { Prompt } from './Prompt';
import { TypeAnimation } from 'react-type-animation';

const helpContent = [
  "available commands:",
  "   help: this",
  "    ls: list information folders",
  "    cd: go to information folder",
  "    cat: display information",
  "    pwd: print current folder",
]

const folders = ["projects", "about"]

export const Terminal = () => {
  const [content, setContent] = useState([]);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent([...helpContent]);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onKeyDown={handleKeys}
      className='w-full max-w-screen flex-grow p-4 flex flex-col'
    >
      <div>
        <span className='font-bold text-[#9B87F5] pr-3'>{'$>'}</span>
        <TypeAnimation
          className='font-bold'
          sequence={['help']}
          wrapper='span'
          cursor={false}
          speed={1}
        />
      </div>

      {content.map((c, i) => {
        if (c.startsWith('$>')) {
          let [start, end] = c.split('$>');

          start = dir == '/' ? '' : dir;

          return (
            <div className='break-words break-all' key={i}>
              <span className='font-bold text-[#9B87F5]'>{start + ' $>'}</span>
              <span>{end}</span>
            </div>
          );
        }

        return (
          <div
            className={`${
              c.startsWith('$>') ? 'font-bold text-[#9B87F5]' : ''
            } break-words break-all`}
            key={i}
          >
            {c}
          </div>
        );
      })}
      <Prompt handleCommand={handleCommand} />
    </div>
  );
};
