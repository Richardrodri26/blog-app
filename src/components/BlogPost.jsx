  import React from 'react'
  import { useParams, useNavigate, useLocation } from 'react-router-dom'
  import { useAuth } from '../auth';
  import { useBlog } from '../blog';
  import {IoIosArrowBack} from 'react-icons/io'
  import {FiEdit} from 'react-icons/fi'
  import { Coments } from './Coments';
  import { CommentBox } from './CommentBox';
  

function BlogPost() {
  const { id } = useParams();
  const { user }= useAuth();
  const { blogs, remove: removeBlog} = useBlog();

  const location = useLocation();
  const navigate = useNavigate();

  const blogpost = blogs.find(post => post.id === id);
  const canDelete = user?.isAdmin || blogpost?.author === user?.username;
  
  const returnToBlog = () => {
    navigate('/blog', { replace: true })
  }

  const toEdit = () => {
    navigate('/blog/edit',{state:{id}})
  }

  const deletedPost = () => {
    removeBlog(blogpost.id)
    navigate('/blog');
  }

  //console.log()

  return (
    <>
    <div className='flex justify-around items-center mb-5 gap-1'>
    <button 
        onClick={returnToBlog}
        className='flex mt-2 justify-center items-center max-h-[20px] w-auto px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
          <span ><IoIosArrowBack/></span>
      </button>
    <div className='flex items-center justify-around gap-5  w-[90%] max-[768px]:w-[70%]'>
      
      <h2 className='font-bold text-2xl '>{blogpost.title}</h2>

    </div>
    {
        (canDelete) ? 
      <button 
      onClick={toEdit}
        className='flex mt-2 justify-center items-center max-h-[20px] w-auto px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
        <span ><FiEdit/></span>
      </button>
      :
      null
      }
    </div>
    
    <div className='min-h-[60vh]'>
    <p>{blogpost.content}</p>
    <p>Autor: {blogpost.author}</p>
    </div>
    
    <div className="min-h-[25vh] shadow-lg p-5 rounded-md mb-5">
      <p className="font-semibold text-xl text-center mb-2">Comentarios</p>

      {blogpost.comments?.length > 0 ? (
        <ul>
          {blogpost.comments.map((comment, idx) => (
            <Coments
              comment={comment}
              id={blogpost.id}
              position={idx}
              key={`${comment.author}-${idx}`}
            />
          ))}
        </ul>
      ) : (
        <p>No hay comentarios</p>
      )}
    </div>


    <div className='flex flex-col gap-5 mb-4 justify-evenly items-center'>

    {user ? (
        <CommentBox id={blogpost.id} />
      ) : (
        <button
        className='max-h-[50px] px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
          onClick={() =>
          navigate('/login', { replace: true, state: { from: location } })
          }
        >
          Login to comment
        </button>
      )}

    {canDelete && (
      <button
        onClick={() => deletedPost()}
        className='max-h-[50px] px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
      >
        Eliminar blogpost
      </button>
    )}

      </div>
    </>
  );
}

export { BlogPost }