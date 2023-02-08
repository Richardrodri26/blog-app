import React from "react";
import { useAuth } from '../auth';
import { Link, useParams } from "react-router-dom";
import { useBlog } from '../blog';

function CommentBox({ id }) {
  const { user }= useAuth();
  const { commentBlog } = useBlog();

    const [comment, setComment] = React.useState('');
  
    const saveComment = (e) => {
      e.preventDefault();
      commentBlog(id, {
        content: comment,
        author: user?.username,
      });
      setComment('');
    };

  return (
    <form onSubmit={saveComment} className="shadow-md w-full">
      <label className="text-start block mb-2 text-sm font-medium text-gray-900 p-2">
        Escribe tu comentario:
        <textarea
          className="block p-2.5 w-full text-sm text-black bg-slate-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {
          user ? <button
          type="submit" disabled={!comment}
          className='ml-0 m-3 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
          Comentar
        </button> 
        : <button
          className='ml-0 m-3 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
         <Link to={'/login'}>Comentar</Link> 
        </button> 
        }
      </label>
    </form>
  );
}
export { CommentBox };