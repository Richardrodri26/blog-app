import { HashRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider, AuthRoute} from './auth'
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { Profile } from './components/Profile';
import { Blog } from './components/Blog';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Footer } from './components/Footer';
import { BlogPost } from './components/BlogPost';

import './App.css'

function App() {

  return (
    <>
      <HashRouter>
      <AuthProvider>
        <Menu/>

        <div className='min-h-screen w-full'>

        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/blog' element={<Blog/>}>
            <Route path='/blog/:slug' element={<BlogPost/>}/>
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
        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
