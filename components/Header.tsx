/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from "next/link";

export const Header = ({
  mode,
}: {
  mode?: 'desktop' | 'terminal';
}) => {
  

  return (
    <div className='p-4 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center mb-12 md:mb-0'>
      <pre className="text-[10px] md:text-base">
        <p>
          {
            '.------------------------------------------------------------------.'
          }
        </p>
        <p>
          {
            '|╦ ╦┌─┐┬  ┬┌┬┐  ╔╗ ┌─┐┬  ┌─┐┌─┐┌┬┐┌┬┐┬    ╔═╗┌─┐┬─┐┌┬┐┌─┐┌─┐┬  ┬┌─┐|'
          }
        </p>
        <p>
          {
            '|║║║├─┤│  │ ││  ╠╩╗├┤ │  ├┤ ├─┤ │ ││││    ╠═╝│ │├┬┘ │ ├┤ │ ││  ││ │|'
          }
        </p>
        <p>
          {
            '|╚╩╝┴ ┴┴─┘┴─┴┘  ╚═╝└─┘┴─┘└  ┴ ┴ ┴ ┴ ┴┴    ╩  └─┘┴└─ ┴ └  └─┘┴─┘┴└─┘|'
          }
        </p>
        <p>
          {
            "'------------------------------------------------------------------'"
          }
        </p>
      </pre>

      <Link
        href={'/' + mode}
        className='px-4 py-2 border-2 border-slate-300'
      >
        {mode === 'desktop' ? 'Desktop mode' : 'Terminal mode'}
      </Link>
    </div>
  );
};
