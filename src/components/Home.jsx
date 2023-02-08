import React from 'react'
import picHome from "../assets/picHome.svg";
import article from "../assets/article.svg"
import darkmode from "../assets/darkmode.svg"


function Home() {
  return (
    <div
      className='w-[90%] my-0 mx-auto dark:text-white'
    >

      <div className='pattern dark:bg-slate-900 h-[50vh] rounded-2xl flex flex-col items-start justify-end transition-all duration-500 ease-in'>
        <p className='p-4 bg-blue-600 rounded-2xl text-white m-3'>Bienvenido a Blog APP</p>
      </div>

      <div className='flex flex-col gap-7 mt-5 items-center'>

        <div className='flex min-[768px]:flex-row flex-col justify-center items-center mb-5 gap-5 min-[768px]:max-h-[300px] max-w-[850px]'>
          <img
            src={article}
            alt="wallpaper"
            className="w-full rounded-full shadow-2xl overflow-hidden cover max-h-[245px] min-[768px]:max-w-[245px]"
          />
          <div className='p-4 bg-blue-600 rounded-2xl text-white min-[1440px]:min-w-[956px] min-[1024px]:min-w-[588px]'> 
          <p className='font-semibold text-lg mb-3'>¡Puedes Crear, leer y borrar articulos!</p>
          <p>Solo si cuentas con los permisos apropiados 👀</p>
          </div>
        </div>

        <div className='flex min-[768px]:flex-row flex-col justify-center items-center mb-5 gap-5 min-[768px]:max-h-[300px] max-w-[850px]'>
        <img
            src={picHome}
            alt="wallpaper"
            className="w-full rounded-full shadow-2xl overflow-hidden cover min-[768px]:max-h-[300px] min-[768px]:max-w-[245px]"
          />
          <div className='p-4 bg-blue-600 rounded-2xl text-white'> 
          <p className='font-semibold text-lg mb-3'>Tiene un flujo de login y roles: Admin y user</p>
          <p>Dependiendo de tu genero tu perfil hara un llamado a API´s para renderizar un wallpaper y una imagen de perfil acorde a tu usuario 📷</p>
          </div>
        </div>

        <div className='flex min-[768px]:flex-row flex-col justify-center items-center mb-5 gap-5 min-[768px]:max-h-[300px] max-w-[850px]'>
        <img
            src={darkmode}
            alt="wallpaper"
            className="w-full rounded-full shadow-2xl overflow-hidden cover min-[768px]:max-h-[300px] min-[768px]:max-w-[245px]"
          />
          <div className='p-4 bg-blue-600 rounded-2xl text-white'> 
          <p className='font-semibold text-lg mb-3'>¡Cuenta con un modo oscuro! ☀️🌑</p>
          <p>Todos los blogs cuenta con persistencia mediante el localStorage de tu navegador, ademas todo el sistema de ruta esta implementado con React Router V6</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export {Home}