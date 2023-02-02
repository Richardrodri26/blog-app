import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth';

function Login() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if(auth.user) {
    return <Navigate to="/profile" />
  }
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button 
          type='submit'
          className='px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
        >
          Entrar
        </button>
      </form>
    </>
  )
}

export {Login}

{/* 
  import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');
  
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if (auth.user) {
    return <Navigate to="/profile" />
  }
  
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };
*/}