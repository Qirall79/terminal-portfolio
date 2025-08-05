import { Header } from '@/components/Header'
import React from 'react'

export default function layout({children}) {
  return (
	<div className='w-full min-h-screen bg-[#1A1F2C] flex flex-col'>
		<Header mode='terminal' />
		{children}
	</div>
  )
}
