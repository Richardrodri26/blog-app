import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import wallpaper from "../assets/wallpaper.jpg";
import defaultPic from "../assets/userpic.png";
import { useBlog } from "../blog";

import { useAuth } from "../auth";

function Profile() {
  const { user } = useAuth();
  const { blogs } = useBlog();
  const location = useLocation();

  const [image, setImage] = React.useState(wallpaper);
  const [userProfile, setUserProfile] = React.useState(defaultPic);
  const ACCESS_KEY = "Rj92wwjp3z2_z22qKTaaSn-LVVkXekpm3jvnePFnQj8";

  async function fetchWallpaper() {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=wallpaper&client_id=${ACCESS_KEY}`
    );
    const data = await response.json();
    const img = data.results;
    const number = Math.floor(Math.random() * 10);

    setImage(img[number].urls.regular);
  }

  async function fetchUserPic() {
    const response = await fetch(
      `https://randomuser.me/api/${
        user.genero === "M" ? "?gender=male" : "?gender=female"
      }`
    );
    const data = await response.json();
    const img = data.results;
    setUserProfile(img[0].picture.medium);
  }

  useEffect(() => {
    fetchUserPic();
    fetchWallpaper();
  }, []);

  function BlogLink({ post }) {
    return (
      <li key={post.to}>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </li>
    );
  }

  return (
    <>
    <h1 className="mb-5 text-center font-bold text-2xl dark:text-white">Perfil</h1>
    <div className="flex flex-col min-[1024px]:flex-row gap-5 ">
      <div className="w-full my-0 mx-auto min-[1024px]:w-3/4 min-[1024px]:shadow-xl p-5">
        

        <div className="my-0 mx-auto h-auto max-h-[300px] flex flex-col justify-center items-center">
          <img
            src={image}
            alt="wallpaper"
            className="aspect-video w-full rounded-xl shadow-xl overflow-hidden cover"
          />
          <img
            src={userProfile}
            alt="userPic"
            className="relative top-[-70px] border-4 border-solid border-white rounded-full h-[120px] max-w-[120px] shadow-xl cover min-[768px]:left-[-40%] min-[768px]:top-[-50px] min-[768px]:h-[250px]"
          />
        </div>
        <p className="p-5 text-semibold text-2xl dark:text-white">Bienvenido, {user.username}</p>
        {(user.isAdmin) ? <p className="p-5 text-semibold text-2xl dark:text-white">Cuenta Admin</p> : null}
        
        
      </div>

      <div className="w-full my-0 mx-auto p-5 min-[1024px]:w-1/4 min-[1024px]:shadow-xl dark:text-white">
        {location.pathname === "/profile" ? (
          <p className="font-semibold text-lg">
            Articulos que podrian interesarte
          </p>
        ) : (
          <p className="font-semibold text-lg dark:text-white">Otros articulos</p>
        )}
        <ul>
          {blogs.length > 0 ? (
            blogs.map((post) => <BlogLink key={post.id} post={post} />)
          ) : (
            <p className="dark:text-white">No hay articulos disponibles</p>
          )}
        </ul>
      </div>
    </div>
    </>
  );
}

export { Profile };
