import React, { ReactNode } from 'react'
import Link from 'next/link'
import { isAuthenticated } from '@/lib/actions/auth.actions'
import { redirect } from 'next/navigation';
const layout = async({children}:{children:ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
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
