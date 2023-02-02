import React from 'react'
import { useAuth } from '../auth';

function Logout() {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>¿Seguro de que quieres salir?</label>
        <button 
          type='submit'
          className='px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
        >
          Salir
        </button>
      </form>
    </>
  )
}

export {Logout}