import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {httpRequest} from '../lib/https'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../zustand/useSession'

function Login() {
   
    const {setUser} = useSession(state=>state)
    const navigate = useNavigate()

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

    const login = async(e)=>{

    try{
     e.preventDefault()
    const {data} = await httpRequest.post('/login',form)
     toast.success(data.message)
     setForm(model)
     setUser({
        user:data.user,
        token:data.token
    })
    setTimeout(()=>navigate("/app/profile"),200)
    }catch(err){
     toast.error(err?.response?.data?.message || err.message)
    }    

     
    }

  return (
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-8 w-xl shadow-lg'>
       <h1 className='text-2xl font-semibold mb-4'>Login</h1>
       <form className='space-y-4' onSubmit={login}>
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

        <button className='p-3 rounded text-white font-medium bg-indigo-600 px-8'>Login</button>
       </form>
      </div>
    </div>
  )
}

export default Login
