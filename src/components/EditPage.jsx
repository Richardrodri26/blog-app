import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';
import { useBlog } from '../blog';
import {IoIosArrowBack} from 'react-icons/io'


function EditPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, user}= useAuth();
  const { blogs, remove: removeBlog, edit, getBlog} = useBlog();

  let blog; 

  // const blogIndex = getBlog(id)
  //   blog = blogIndex;
  // console.log(id)
  

  if(location.state?.id){
    blog = location.state.id;
  } else{
    const blogIndex = getBlog(blog)
    blog = blogIndex;
  }

  const a = getBlog(blog)
  const b = a.id

  const [title, setTitle] = React.useState(a.title || '');
  const [content, setContent] = React.useState(a.content || '');

 
  //const blogpost = blogs.find(post => post.id === id);

  //console.log(blogpost.id)

  const returnToBlog = () => {
    navigate('/blog', { replace: true })
  }

  

  const editBlog = () =>{
    edit(b, title, content)
    navigate('/blog');
  }

  const isDisabled = !(title && content);
  return (
    <>
      <h2 className='text-center font-semibold dark:text-white'>Edita tu articulo</h2>
      <button 
        onClick={returnToBlog} 
        className=' px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
          <span ><IoIosArrowBack/></span>
      </button>

      <form onSubmit={editBlog}>
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
        Editar
      </button>
      </form>
    </>
  )
}
export {EditPage}