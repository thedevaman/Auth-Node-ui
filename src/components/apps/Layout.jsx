import { AlignRight, LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { useSession } from '../../zustand/useSession'


function Layout() {
    const [open,setOpen] = useState(false)
    const {user,logout} = useSession(state=>state)
  return (
    <div>
      <aside className='bg-blue-600 h-full fixed top-0 left-0 w-[250px]'></aside>
      <section className='ml-[250px]'>
        <nav className='sticky top-0 left-[250px] bg-white py-4 px-12 shadow flex items-center justify-between'>
          <h1 className='font-semibold text-xl'>Coders</h1>

          <div className='flex items-center gap-3'>
          <button className='hover:bg-gray-200 p-3 rounded-lg'>
            <AlignRight/>
        </button>
        <button className='relative'>
           <img onClick={()=>setOpen(!open)} src="https://api.dicebear.com/7.x/avataaars/svg?seed=male-355" className='w-12 h-12 rounded-full object-cover' />
            {
               user && open &&
            
            
            <div className='flex flex-col items-start gap-1 absolute -bottom-28 shadow-lg right-0 bg-white border border-gray-200 rounded-lg'>
             <p className='hover:bg-gray-100 w-full text-left py-1 px-4 capitalize'>{user.fullname}</p>
             <p className='hover:bg-gray-100 w-full text-left py-1 px-4'>{user.email}</p>
             <div className='flex items-center gap-2 hover:bg-gray-100 w-full text-left py-1 px-4'>
                <LogOut className='w-4 h-4'/>
                Logout
             </div>
            </div>
           }
        </button>
        </div>

        </nav>
        <div className='px-12 py-8'>
        <h1 className='text-4xl font-bold'>Welcome to profile page</h1>
        
        <p className='text-black/60 mt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis recusandae eligendi culpa similique qui ex sapiente sequi ullam, voluptas iusto quaerat itaque doloribus. Quas accusantium dolores veritatis aspernatur suscipit?</p>
        </div>
      </section>
    </div>
  )
}

export default Layout
