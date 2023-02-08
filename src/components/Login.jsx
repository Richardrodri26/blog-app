import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import Select from 'react-select'

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const [username, setUsername] = React.useState("");
  const [genero, setGenero] = React.useState("");


  const login = (e) => {
    e.preventDefault();
    auth.login({ username, genero });
  };

  const generos = [
    {label: "Hombre", value: "M"},
    {label: "Mujer", value: "F"},

  ]
  const can = !(username && genero)

  if (auth.user) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }
  return (
    <div className="w-[90%] my-0 mx-auto min-h-screen flex flex-col justify-center items-center dark:text-white">
      

      <div className="w-full max-w-xs h-[90%]">
      <h1 className="text-center font-bold text-2xl mb-4 h-min ">Login</h1>
        <form
          onSubmit={login}
          className="bg-slate-100 dark:bg-slate-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-white"
            >
              Escribe tu nombre de usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecciona tu genero
          </label>

          <Select 
            options={generos}
            className='dark:text-black'
            onChange={(e) => setGenero(e.value)}
          />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={can}
              className='mt-5 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
            >
              Entrar
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Copyright Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export { Login };
