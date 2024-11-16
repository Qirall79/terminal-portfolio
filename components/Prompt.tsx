/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

export const Prompt = ({ handleCommand }: { handleCommand: any }) => {
  const [value, setValue] = useState('');

  const handlePress = (e: any) => {
    if (e.key === 'Enter') {
      const val = value.replaceAll('\n', '');

      if (val) {
        handleCommand(val);
        setValue('');
      }
    }
  };

  return (
    <div className='w-full flex-grow flex relative'>
      <span className='absolute top-0 left-0 font-bold text-[#9B87F5]'>{'$>'}</span>
      <textarea
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
