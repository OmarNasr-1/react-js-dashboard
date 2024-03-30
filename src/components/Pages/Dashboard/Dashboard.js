import React from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    < >
        <Topbar/>
        <div className='d-flex'>
        <Sidebar />
        <Outlet/>
        </div>
       
      
    </>
  )
}
