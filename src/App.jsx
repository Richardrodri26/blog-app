import { HashRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider, AuthRoute} from './auth'
import { BlogProvider, BlogRoute } from './blog'
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Profile } from './components/Profile';
import { Blog } from './components/Blog';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';
import { CreateBlog } from './components/CreateBlog';
import { EditPage } from './components/EditPage';

import './App.css'

function App() {

  return (
    <>
      <HashRouter>
      <AuthProvider>
      
        <Menu/>

        <BlogProvider>
        <div className='min-h-screen w-full overflow-x-hidden p-5 dark:bg-slate-900 transition-all duration-500 ease-in'>

        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/blog' element={<Blog/>}>
            <Route 
              path=':id' 
              element={
                <BlogRoute>
                  <BlogPost/>
                </BlogRoute>
              }
              />

            <Route path='edit' element={<EditPage/>} />

            <Route path="create" element={<CreateBlog />} />
          </Route>  

          <Route path='/login' element={<Login/>} />
          <Route 
            path='/logout' 
            element={
              <AuthRoute>
                <Logout/>
              </AuthRoute>
            } 
          />
          <Route 
            path='/profile' 
            element={
              <AuthRoute>
                <Profile/>
              </AuthRoute>
            } 
          />

          <Route path='*' element={<p>No sale nada mi loco</p>} />
          
        </Routes>
        </div>
        <Footer/>
        </BlogProvider>
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
