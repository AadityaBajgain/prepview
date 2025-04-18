import React, { ReactNode } from 'react'
import Link from 'next/link'
const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'/>
        <h2 className='text-primary-100'> PrepView</h2>
      </nav>
      {children}
    </div>
  )
}

export default layout
