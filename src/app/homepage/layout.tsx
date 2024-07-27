import React, { ReactNode } from 'react'
import { NavBar } from "@/components";
import { TracingBeam } from '@/components/ui';

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-full text-white'>
        <NavBar />
        <TracingBeam> 
            {children}
        </TracingBeam>
    </div>
  )
}

export default layout