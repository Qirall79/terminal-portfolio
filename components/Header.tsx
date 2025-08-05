/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from "next/image";
import Link from "next/link";

export const Header = ({
  mode,
}: {
  mode?: 'desktop' | 'terminal';
}) => {
  

  return (
    <div className='p-4 flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center mb-6 md:mb-0'>
      <pre className="text-[10px] hidden md:inline-block md:text-base">
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

      <Image className=" md:hidden" src={"/images/header.png"} width={400} height={300} alt="header" />

      <Link
        href={'/' + mode}
        className='text-xs md:text-base px-4 py-2 border-2 border-slate-300'
      >
        {mode === 'desktop' ? 'Desktop mode' : 'Terminal mode'}
      </Link>
    </div>
  );
};
