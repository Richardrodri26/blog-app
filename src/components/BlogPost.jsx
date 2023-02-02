import React from 'react'
import { blogdata } from '../blogdata'
import { useParams, useNavigate } from 'react-router-dom'

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug);
  const returnToBlog = () => {
    navigate('/blog', { replace: true })
  }

  return (
    <>
    <h2 className='font-bold text-2xl'>{blogpost.title}</h2>
    <button 
    className='px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"'
    onClick={returnToBlog}>Volver</button>
    <p>Autor: {blogpost.author}</p>
    <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost }