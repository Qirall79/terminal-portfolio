/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import { Prompt } from './Prompt';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';
import { About } from './About';
import { Header } from './Header';
import { Help } from './Help';
import data from '@/data/data';
import { Project } from './Project';

const commands = ['ls', 'cd', 'cat', 'clear', 'help'];

const projects = [
  'reDIYs',
  'webserv',
  'pawtograph',
  'transcendence',
  'walidbook',
  'note-it',
  'minishell',
  'cub3d',
  'fract-ol',
];

export const fileSystem = {
  '/': {
    dirs: ['projects'],
    files: ['about.txt'],
  },
  projects: {
    dirs: ['web', 'system-programming', 'computer-graphics'],
    files: ['help.txt'],
  },
  web: {
    dirs: [],
    files: ['transcendence', 'pawtograph', 'walidbook', 'note-it'],
  },
  'computer-graphics': {
    dirs: [],
    files: ['cub3d', 'fract-ol'],
  },
  'system-programming': {
    dirs: [],
    files: ['reDIYs', 'webserv', 'minishell'],
  },
};

export const Terminal = () => {
  const [content, setContent] = useState([]);
  const [dir, setDir] = useState('/');
  const [directories, setDirectories] = useState(['/']);
  const [cmd, setCmd] = useState('');
  const [cleared, setCleared] = useState(false);
  const [animated, setAnimated] = useState(false);

  const addContent = (c: string[]) => {
    setContent([...content, ...c]);
  };

  const handleCommand = (command: string) => {
    const args = command.split(' ');

    const singleCommand = args[0];

    setCmd(singleCommand);

    if (!commands.includes(singleCommand)) {
      addContent([
        (dir == '/' ? '' : dir) + '$> ' + command,
        'Command not found!',
      ]);
      return;
    }

    if (command == 'clear') {
      setContent([]);
      setCleared(true);
    } else {
      const newContent = [(dir == '/' ? '' : dir) + '$> ' + command];

      if (singleCommand === 'cd') {
        if (fileSystem[dir].dirs.includes(args[1]) || args[1] === '..') {
          {
            if (args[1] !== '..') {
              setDir(args[1]);
              setDirectories([...directories, args[1]]);
            } else {
              const dirs = [...directories];
              dirs.pop();
              setDir(dirs[dirs.length - 1]);
              setDirectories([...dirs]);
            }
          }
        } else {
          if (!args[1]) {
            setDir('/');
            setDirectories(['/']);
          } else newContent.push('Directory not found!');
        }
      }

      if (singleCommand === 'ls') {
        const dirs = fileSystem[dir].dirs.map((d) => d + '/');
        const files = fileSystem[dir].files;
        const fullList = [...dirs, ...files].join(' | ');

        newContent.push(fullList);
      }

      if (singleCommand === 'cat') {
        if (!args[1]) newContent.push('usage: cat <filename>');
        else {
          if (Object.keys(data).includes(args[1])) {
            if (projects.includes(args[1])) newContent.push(args[1] + '<>');
            else {
              if (args[1] === 'about.txt') newContent.push('|||');
              else newContent.push(data[args[1]]);
            }
          } else newContent.push('file not found!');
        }
      }

      if (singleCommand == 'help') newContent.push('<help>');

      addContent(newContent);
    }
  };

  const handleKeys = (e) => {
    if (e.metaKey && e.key == 'k') {
      setContent([]);
      setCleared(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(['<help>']);
      setAnimated(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onKeyDown={handleKeys}
      className='w-full max-w-screen flex-grow p-8 flex flex-col'
    >
      <br />
      {!cleared && (
        <div>
          <span className='font-bold text-[#9B87F5] pr-3'>{'$>'}</span>
          <TypeAnimation
            sequence={['help']}
            wrapper='span'
            cursor={false}
            speed={1}
          />
          {!animated && (
            <span
              id='tmp-caret'
              className={`w-2 h-6 bg-neutral-50 inline-block absolute`}
            />
          )}
        </div>
      )}

      {content.map((c, i) => {
        if (c.includes('$>')) {
          let [start, end] = c.split('$>');

          return (
            <div className='break-words break-all' key={i}>
              <span className='font-bold text-[#9B87F5]'>{start + ' $>'}</span>
              <span>{end}</span>
            </div>
          );
        }

        if (c === '<help>') return <Help key={i} />;

        if (c.includes(' | ')) {
          const list = c.split(' | ');

          return (
            <div className={`break-words break-all flex space-x-4`} key={i}>
              {list.map((l) => {
                return (
                  <span
                    className={`${
                      l.endsWith('/') ? 'font-bold text-cyan-400' : ''
                    }`}
                    key={l}
                  >
                    {l}
                  </span>
                );
              })}
            </div>
          );
        }

        if (c.endsWith('<>')) {
          // this is a project
          const name = c.split('<>')[0];
          const details = data[name];

          return <Project key={i} details={details} />;
        }

        if (c === '|||') {
          // this is about.txt
          return <About key={i} />;
        }

        return (
          <div
            className={`${
              c.startsWith('$>') ? 'font-bold text-[#9B87F5]' : ''
            } break-words`}
            key={i}
            style={{
              display: cmd == 'ls' ? 'inline' : 'block',
            }}
          >
            {c}
          </div>
        );
      })}
      <Prompt dir={dir == '/' ? '' : dir} handleCommand={handleCommand} />
    </div>
  );
};
