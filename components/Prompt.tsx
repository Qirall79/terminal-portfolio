/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as getCaretCoordinates from 'textarea-caret';
import { fileSystem } from './Terminal';

export const Prompt = ({ handleCommand, dir }: { handleCommand: any, dir: string }) => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState([0, (dir ? (dir.length + 1) : 0) * 9.5 + 29]);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handlePress = (e: any) => {
    if (e.key === 'Enter') {
      const val = value.replaceAll('\n', '');
      if (val) {
        handleCommand(val);
        setValue('');
      }
      setPosition([0, (dir ? (dir.length + 1) : 0) * 9.3 + 29]);
    }

    if (e.key == 'Tab') {
      e.preventDefault();

      const tmpDir = dir ? dir : '/';

      const searchedValues = value.trim().split(" ");
      const searchedValue = searchedValues.pop();
  
      const completions = [...fileSystem[tmpDir].dirs, ...fileSystem[tmpDir].files];

      const matches = completions.filter(c => c.startsWith(searchedValue));

      if (matches.length == 1)
      {
        const val = searchedValues.join(" ") + " " + matches[0];
        setValue(val);
        setPosition([0, (dir ? (dir.length + 1) : 0) * 9.3 + val.length * 10 + 29]);
      }
    }
  };

  const handleChange = (e: any) => {
    if (e.target.value != "\n")
      {
        setValue(e.target.value);
        const caret = getCaretCoordinates(e.target, e.target.selectionEnd);
        setPosition([caret.top, caret.left]);
      }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    setPosition([0, (dir ? (dir.length + 1) : 0) * 9.3 + 29]);
  }, [dir])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (visible && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [visible]);
  
  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollIntoView()
    }
  }, []);

  return (
    <div
      className={`w-full flex-grow flex relative transition-all ${
        visible ? '' : 'hidden'
      }`}
    >
      <span className='absolute top-0 left-0 font-bold text-[#9B87F5]'>
        {(dir ? (dir + ' ') : '') + '$>'}
      </span>
      <div className='bg-transparent w-full flex flex-grow relative'>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handlePress}
          onFocus={handleFocus}
          onBlur={handleBlur} 
          className='bg-transparent w-full flex flex-grow caret-transparent outline-none'
          style={{
            paddingLeft: `${(dir ? (dir.length + 1) : 0) * 9.5 + 29}px`
          }}
        />
        {isFocused && (
          <span
            id='caret'
            className='w-2 h-6 bg-neutral-50 absolute translate-y-[-2px]'
            style={{
              left: `${position[1]}px`,
              top: `${position[0]}px`,
              whiteSpace: 'pre',
            }}
          />
        )}
      </div>
    </div>
  );
};
