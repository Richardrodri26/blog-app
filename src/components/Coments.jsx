import React from "react";
import { useAuth } from '../auth';
import { useBlog } from '../blog';
import { useParams } from "react-router-dom";
import { blogdata } from "../blogdata";
import {MdDeleteForever} from 'react-icons/md'

function Coments({ comment, id, position }) {
  const { user }= useAuth();
  const { removeComment, blogs } = useBlog();
  const blogpost = blogdata.find((post) => post.id === id);
  //const sameUserComment = blogs.comments.find((blog) => blog.author === user?.username);
  //console.log(blogs.comments)
  const canRemove = user?.username === comment?.author || user?.isAdmin ;

  const deleteComment = ()=>{
    removeComment(id, position)
  }

  return (
    
    <li className="border-b-2 border-slate-200 p-2">
    <p>{comment.content}</p>
    <p className="flex justify-between">
      Autor: {comment.author}
      {canRemove && (
        <button
        onClick={() => deleteComment()}
        className=' px-2 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
        >
        <span
        >
          <MdDeleteForever/>
        </span>
        </button>
      )}
    </p>
    
  </li>
  );
}

export { Coments };
