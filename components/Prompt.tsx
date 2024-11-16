/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

export const Prompt = ({ handleCommand }: { handleCommand: any }) => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  const handlePress = (e: any) => {
    if (e.key === 'Enter') {
      const val = value.replaceAll('\n', '');

      if (val) {
        handleCommand(val);
        setValue('');
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full flex-grow flex relative transition-all ${
        visible ? '' : 'hidden'
      }`}
    >
      <span className='absolute top-0 left-0 font-bold text-[#9B87F5]'>
        {'$>'}
      </span>
      <textarea
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value == '\n' ? '' : e.target.value)}
        onKeyDown={handlePress}
        className='bg-transparent
					w-full
					flex
					flex-grow
					caret-slate-50
					outline-none
					relative
					px-[29px]
					'
      />
    </div>
  );
};
