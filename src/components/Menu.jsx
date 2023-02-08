import React, {useEffect, useState}from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useAuth } from '../auth';

function Menu() {
  let [open, setOpen] = useState(false);
  const auth = useAuth();

  let [theme, setTheme] = useState(null);

  useEffect(() =>{
    if(theme === 'dark'){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() =>{
    if(window.matchMedia('prefers-color-scheme: dark').matches){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className='w-full flex justify-center items-center overflow-x-hidden dark:bg-slate-900 transition-all duration-500 ease-in'>
      <header 
      className='bg-blue-600 py-4 md:px-5 px-7 shadow-xl flex justify-between w-11/12 rounded-2xl my-2 mx-1 overflow-x-hidden'>
      <p
       className='text-white font-bold'>LOGO</p>

      

      <span 
        onClick={() => setOpen(!open)} 
        className='md:hidden p-2 text-3xl absolute right-6 top-[14px] cursor-pointer text-white transition-all duration-500 ease-in'>{open ? <AiOutlineClose className=''/> : <AiOutlineMenu/>}
      </span>
      <nav 
        className='flex sm:flex-column z-10 w-auto'> 

      <label class="relative inline-flex items-center cursor-pointer max-[764px]:right-[40px]">
        <input type="checkbox" value="" class="sr-only peer" onClick={handleTheme}/>
        <div class="w-11 right-5 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.7 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-white dark:text-gray-300 max-[764px]:hidden ">Dark mode</span>
      </label>

      <ul 
        className={`rounded-3xl md:flex md:items-center md:pb-0 pb-10 absolute md:static mx-2 right-[20px] bg-blue-600 md:z-10 z-[-1] left-[20px] w-[80%] top-20 md:w-auto md:pl-0 pl-9 pr-9 transition-all duration-300 ease-in md:mt-[-30px]${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0 max-[767px]:invisible'}`}>
        {routes.map(route => {
          if(route.publicOnly && auth.user) return null
          if(route.private && !auth.user) return null

            return (
            <li 
            key={route.to}
            className={`md:ml-8 text-xl md:my-0 my-7 text-center transform hover:scale-110 transition-all duration-500 ease-in ${open ? 'visible' : 'max-[767px]:invisible'}`}
            onClick={() => setOpen(!open)}
            >
              <NavLink
              className='text-white' 
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
              to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
            );
          
        })}
      </ul>
    </nav>
    </header>
    </div>
  )
}

const routes = [];

routes.push({
  to: '/',
  text: 'Home',
  private: false
})
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true
})
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false
})
routes.push({
  to: '/login',
  text: 'Login',
  publicOnly: true,
  private: false
})
routes.push({
  to: '/logout',
  text: 'Logout',
  private: true
})

export {Menu}