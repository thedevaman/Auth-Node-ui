import { AlignRight, icons, LayoutDashboard, LogOut, Pencil, User } from 'lucide-react'
import React, { useState } from 'react'
import { useSession } from '../../zustand/useSession'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Dashboard from './Dashboard'

const menus = [
  {
    label:'Dashboard',
    icons:<LayoutDashboard className='w-4 h-4' />,
    link:'/app/dashboard'
  },
  {
    label:'Notebook',
    icons:<Pencil className='w-4 h-4' />,
    link:'/app/notebook'
  },
  {
    label:'Profile',
    icons:<User className='w-4 h-4' />,
    link:'/app/profile'
  }
]

function Layout() {
    const [open,setOpen] = useState(false)
    const {user,logout} = useSession(state=>state)
    const [toggleSize,setToggleSize] = useState(250)
    const {pathname} = useLocation()

    const handleLogout = () =>{
      logout()
      navigate("/login")
    }

  return (
    <div>
      <aside className='overflow-hidden bg-blue-600 h-full fixed top-0 left-0' style={{width: toggleSize,transition:'300ms'}}>
        <div className='flex flex-col py-6'>
        {
          menus.map((item,index)=>(
            <Link to={item.link} key={index} className={`flex items-center gap-2 px-3 py-3 text-white hover:bg-rose-600 ${pathname === item.link ? 'bg-rose-600' :'null'} `}>
            {item.icons}
              {item.label}</Link>
          ))
        }
        </div>
      </aside>
      <section style={{marginLeft:toggleSize,transition:'300ms'}}>
        <nav style={{left:toggleSize,transition:'300ms'}} className='sticky top-0 bg-white py-4 px-12 shadow flex items-center justify-between'>
          <h1 className='font-semibold text-xl'>Coders</h1>

          <div className='flex items-center gap-3'>
          <button onClick={()=>setToggleSize((toggleSize === 250 ? 0:250 ))} className='hover:bg-gray-200 p-3 rounded-lg'>
            <AlignRight/>
        </button>
        <button className='relative'>
           <img onClick={()=>setOpen(!open)} src="https://api.dicebear.com/7.x/avataaars/svg?seed=male-355" className='w-12 h-12 rounded-full object-cover' />
            {
               user && open &&
            
            
            <div className='flex flex-col items-start gap-1 absolute -bottom-28 shadow-lg right-0 bg-white border border-gray-200 rounded-lg'>
             <p className='hover:bg-gray-100 w-full text-left py-1 px-4 capitalize'>{user.user.fullname}</p>
             <p className='hover:bg-gray-100 w-full text-left py-1 px-4'>{user.user.email}</p>
             <div className='flex items-center gap-2 hover:bg-gray-100 w-full text-left py-1 px-4'>
              <button onClick={handleLogout} className='flex items-center gap-2 hover:bg-gray-100 w-full text-lrft py-1 px-4'>
                <LogOut className='w-4 h-4'/>
                Logout
              </button>  
             </div>
            </div>
           }
        </button>
        </div>

        </nav>
        <div className='px-12 py-8'>
         <Outlet/>
        </div>
      </section>
    </div>
  )
}

export default Layout
