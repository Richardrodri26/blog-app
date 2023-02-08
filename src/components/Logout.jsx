import React from 'react'
import { useAuth } from '../auth';

function Logout() {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <div 
    className='w-[90%] my-0 mx-auto dark:text-white'
    >
      <h1 className='text-center font-bold text-2xl mb-4'>Logout</h1>
    
    <div className="flex flex-col justify-between items-center">
      <form onSubmit={logout} className="">
        <label className=''>¿Seguro de que quieres salir?</label>
        <button 
          type='submit'
          className='ml-2 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
        >
          Salir
        </button>
      </form>
     </div>
    </div>
  )
}

export {Logout}