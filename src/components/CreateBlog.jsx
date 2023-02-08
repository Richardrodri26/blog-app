import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import { useBlog } from '../blog';
import {IoIosArrowBack} from 'react-icons/io'


function CreateBlog() {
  const navigate = useNavigate();
  const blog = useBlog();
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  // const [slug, setSlug] = React.useState('');

  const { data, user}= useAuth();

  const returnToBlog = () => {
    navigate('/blog', { replace: true })
  }

  const isDisabled = !(title && content);

  const create = (e) => {
    e.preventDefault();
    blog.create({
      title,
      slug: title.toLowerCase().split(' ').join('-'),
      content,
      author: user.username,
      id: blog.newBlogId(),
      comments: []
    });
    returnToBlog();
  };
  return (

    <>
      <h2 className='text-center font-semibold dark:text-white'>Crea un Articulo</h2>
      <button 
        onClick={returnToBlog}
        className=' px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
          <span ><IoIosArrowBack/></span>
      </button>

      <form onSubmit={create}>
        <label className="mt-5 block text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Title:
          <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label
          className="block text-gray-700 text-sm font-bold mb-2 dark:text-white">
          Content:
          <textarea
            className="block p-2.5 w-full text-sm text-black bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button
        type="submit" disabled={isDisabled}
        className='ml-0 m-3 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
      >
        Crear
      </button>
      </form>
    </>


    // <div className="w-[90%] my-0 mx-auto min-h-screen">
    //   <h1 className="text-center font-bold text-2xl mb-4 h-min">Login</h1>

    //   <div className="w-full max-w-xs">
    //     <form
    //       onSubmit={createBlog}
    //       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //     >
    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //         >
    //           Escribe el titulo de tu articulo
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           type="text"
    //           placeholder="Titulo del articulo"
    //           value={title}
    //           onChange={(e) => setTitle(e.target.value)}
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label
    //           className="block text-gray-700 text-sm font-bold mb-2"
    //         >
    //           Contenido 
    //         </label>
    //         <textarea
    //       className="block p-2.5 w-full text-sm text-black bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    //       value={content}
    //       onChange={(e) => setContent(e.target.value)}
    //     />
    //       </div>

    //       <div className="flex items-center justify-between">
    //         <button
    //           type="submit"
    //           className='px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
    //         >
    //           Enviar
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  )
}

export {CreateBlog}