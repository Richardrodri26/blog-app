import React from 'react'
import { Link, Outlet , useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth';
import { useBlog } from '../blog';

function Blog() {
  const { user }= useAuth();
  const { blogs } = useBlog();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`dark:text-white flex flex-col min-[1024px]:${(location.pathname === "/blog") ? 'flex-col' :'flex-row'}`}>
    <div 
    className='w-full my-0 mx-auto p-2 min-[1024px]:w-3/4 min-[1024px]:p-5'
    >
      <div className='text-center'>
    {
      (user && (location.pathname === "/blog")) ?
        (<button 
        className='px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        onClick={() => navigate('/blog/create')}>Añadir un articulo</button>)
        : 
        (!user && (location.pathname === "/blog")) ?
        (<button
        className='px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
          onClick={() =>
            navigate('/login', { replace: true, state: { from: location } })
          }
        >
          Inicia sesion para añadir un articulo
        </button>)
      : null
    }
   </div> 

    <Outlet/>

    </div>

    <div className='w-full my-0 mx-auto p-5 mb-5 min-[1024px]:w-1/4 min-[1024px]:shadow-xl'>
    {(location.pathname === "/blog") ? <p className='font-semibold text-lg'>Articulos</p> : <p className='font-semibold text-lg'>Otros articulos</p>}
    <ul>
      {(blogs.length > 0) ? (blogs.map(post =>(
        <BlogLink key={post.id} post={post}/>
      ))) :
      <p>No hay articulos disponibles</p>
      }
    </ul>
    </div>
    </div>
  )
}

function BlogLink({post}){
  return (
    <li key={post.to}>
      <Link to={`/blog/${post.id}`}>{post.title}</Link>
    </li>
  )
}

export { Blog }