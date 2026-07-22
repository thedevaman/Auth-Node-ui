import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Signup() {

    const model = {
        fullname : '',
        email : '',
        password : ''
    }
    const [form, setForm] = useState(model) 

    const handleChage = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setForm(prevform =>({
            ...prevform,
            [name]:value
        }))
    }

    const signup = (e)=>{
     e.preventDefault()
     console.log(form)
     toast.success("Signup success")
    }

  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-8 w-xl shadow-lg'>
       <h1 className='text-2xl font-semibold mb-4'>Register Now</h1>
       <form className='space-y-4' onSubmit={signup}>
        <div className='flex flex-col gap-1'>
            <label className='font-medium'>Fullname</label>
            <input 
            className='border border-gray-300 rounded p-3'
            placeholder='Fullname'
            required
            name='fullname'
            value={form.fullname}
            onChange={handleChage}
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='font-medium'>Email</label>
            <input 
            className='border border-gray-300 rounded p-3'
            placeholder='Email'
            required
            name='email'
            value={form.email}
            onChange={handleChage}
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label className='font-medium'>Password</label>
            <input 
            className='border border-gray-300 rounded p-3'
            placeholder='Password'
            required
            name='password'
            value={form.password}

            onChange={handleChage}
            />
        </div>

        <button className='p-3 rounded text-white font-medium bg-indigo-600 px-8'>Sign up</button>
       </form>
      </div>
    </div>
  )
}

export default Signup
