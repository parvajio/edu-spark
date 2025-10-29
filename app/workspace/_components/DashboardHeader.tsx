import { SidebarHeader, SidebarTrigger } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='w-full flex items-center justify-between shadow-md px-3 py-5'>
        <SidebarTrigger />
        <UserButton></UserButton>
    </div>
  )
}

export default DashboardHeader