import React, {useState}from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useAuth } from '../auth';

function Menu() {
  let [open, setOpen] = useState(false);
  const auth = useAuth();


// /*Sticky Header*/
// window.addEventListener("scroll",function(){
//   if(this.scrollY > 60){
//     document.querySelector(".header").classList.add("sticky");
//   } else {
//     document.querySelector(".header").classList.remove("sticky");
//   }
// });

  return (
    <div className='w-full flex justify-center items-center'>
      <header 
      className='bg-blue-600 py-4 md:px-5 px-7 shadow-lg flex justify-between w-11/12 rounded-2xl my-2 mx-1 overflow-x-hidden'>
      <p
       className='text-white font-bold'>LOGO</p>
      <span 
        onClick={() => setOpen(!open)} 
        className='md:hidden text-3xl absolute right-8 top-[20px] cursor-pointer text-white transition-all duration-500 ease-in'>{open ? <AiOutlineClose/> : <AiOutlineMenu/>}
      </span>
      <nav 
        className='sm:flex-column z-10'> 
      <ul 
        className={`rounded-3xl md:flex md:items-center md:pb-0 pb-12 absolute md:static mx-2 right-[20px] bg-blue-600 md:z-10 z-[-1] left-[30px] w-full top-20 md:w-auto md:pl-0 pl-9 pr-9 transition-all duration-500 ease-in md:mt-[-30px]${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0 max-[425px]:invisible'}`}>
        {routes.map(route => {
          if(route.publicOnly && auth.user) return null
          if(route.private && !auth.user) return null

            return (
            <li 
            key={route.to}
            className='md:ml-8 text-xl md:my-0 my-7 text-center transform hover:scale-110 transition-all duration-500 ease-in'
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