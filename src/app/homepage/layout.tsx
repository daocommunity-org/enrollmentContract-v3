import React, { ReactNode } from 'react'
import { NavBar } from "@/components";
import { Toaster, TracingBeam } from '@/components/ui';

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-full text-white pb-8'>
        <NavBar />
        <TracingBeam> 
            <Toaster />
            {children}
        </TracingBeam>
    </div>
  )
}

export default layout