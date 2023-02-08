import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { blogdata } from './blogdata';

const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {

      //localStorage.clear('BLOGS_V1')
      const localStorageBlogs = localStorage.getItem('BLOGS_V1');
      let parsedBlogs;
    
       if (!localStorageBlogs) {
         localStorage.setItem('BLOGS_V1', JSON.stringify(blogdata));
         parsedBlogs = blogdata;
      } else {
        parsedBlogs = JSON.parse(localStorageBlogs);
      }

  const [blogs, setBlogs] = React.useState(parsedBlogs);

   const saveBlogs = (blog) => {
     // Convertimos a string nuestros TODOs
     //setBlogs((prevState) => [blog, ...prevState]);
     const stringifiedBlogs = JSON.stringify([blog, ...blogs]);

    // Los guardamos en el localStorage
    localStorage.setItem('BLOGS_V1', stringifiedBlogs);
    // Actualizamos nuestro estado
    //setBlogs((prevState) => [blog, ...prevState]);
  };

   const deleteBlog = (id) =>{
    const idx = blogs.findIndex((blog) => blog.id === id);
    if (idx >= 0) {
      setBlogs((prevState) => {
        const blogsTemp = [...prevState];
        blogsTemp.splice(idx, 1);
        return blogsTemp;
      });
   }
      const blogsTemp = [...blogs];
        blogsTemp.splice(idx, 1);
      const stringifiedBlogs = JSON.stringify(blogsTemp);
      localStorage.setItem('BLOGS_V1', stringifiedBlogs);
  } 

  const commentBlogLocalStorage = (id, comment) =>{
    const idx = blogs.findIndex((blog) => blog.id === id);
    if (idx >= 0) {
      const blogsTemp = [...blogs];
        const blog = blogsTemp[idx];
        const newComments = [...blog.comments, comment];
        blog.comments = newComments;
        blogsTemp[idx] = blog;
      const stringifiedBlogs = JSON.stringify(blogsTemp);
      localStorage.setItem('BLOGS_V1', stringifiedBlogs);
      setBlogs(blogsTemp);
    }
      
  }

  const removeCommentLocalStorage = (id, position) =>{
    const idx = blogs.findIndex((blog) => blog.id === id);
    if (idx >= 0) {
      const blogsTemp = [...blogs];
      blogsTemp[idx].comments.splice(position, 1);
      const stringifiedBlogs = JSON.stringify(blogsTemp);
      localStorage.setItem('BLOGS_V1', stringifiedBlogs);
      setBlogs(blogsTemp);
    }
  }

  const editBlog = (id, newTitle, newContent) =>{
    const idx = blogs.findIndex((blog) => blog.id === id);
    const newBlogs = [...blogs]
    newBlogs[idx].title = newTitle
    newBlogs[idx].content = newContent
    const stringifiedBlogs = JSON.stringify(newBlogs);
    localStorage.setItem('BLOGS_V1', stringifiedBlogs);
    setBlogs(newBlogs)
  }

  //localstorage

  function newBlogId(){
    return crypto.randomUUID()
  }

  const create = (blog) => {
    setBlogs((prevState) => [blog, ...prevState]);
    saveBlogs(blog)
  };

  const getBlog =(id)=>{
    const idx = blogs.findIndex(blog => blog.id === id);
    return blogs[idx]
  }

  const edit = (id, newTitle, newContent) => {
    // const idx = blogs.findIndex((blog) => blog.id === id);
    // const newBlogs = [...blogs]
    // newBlogs[idx].title = newTitle
    // newBlogs[idx].content = newContent
    // setBlogs(newBlogs)
    editBlog(id, newTitle, newContent)
  }

  const remove = (id) => {
    
    deleteBlog(id)
  };

  const commentBlog = (id, comment) => {

    // const idx = blogs.findIndex((blog) => blog.id === id);
    // if (idx >= 0) {
    //   setBlogs((prevState) => {
    //     const blogsTemp = [...prevState];
    //     const blog = blogsTemp[idx];
    //     const newComments = [...blog.comments, comment];
    //     blog.comments = newComments;
    //     blogsTemp[idx] = blog;
    //     return blogsTemp;
    //   });
    // }

    commentBlogLocalStorage(id, comment)
  };

  const removeComment = (id, position) => {
    // const idx = blogs.findIndex((blog) => blog.id === id);
    // if (idx >= 0) {
    //   const blogsTemp = [...blogs];
    //   blogsTemp[idx].comments.splice(position, 1);
    //   setBlogs(blogsTemp);
    // }

    removeCommentLocalStorage(id, position)
  };

  const value = {
    blogs,
    create,
    remove,
    commentBlog,
    removeComment,
    edit,
    newBlogId,
    getBlog
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

const useBlog = () => {
  return React.useContext(BlogContext);
};

function BlogRoute(props) {
  const { blogs } = React.useContext(BlogContext);
  const { id } = useParams();

  const blog = blogs.find((post) => post.id === id);

  if (!blog) {
    return <Navigate to="*" />;
  }

  return props.children;
}


export { BlogProvider, useBlog, BlogRoute };