import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='py-10 flex items-center justify-center'>
        <SignUp signInUrl='/login'/>
    </div>
  )
}

export default page