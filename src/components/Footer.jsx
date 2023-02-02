import React from 'react'

function Footer() {
  return (
    <footer 
      className='max-[425px]:flex-col w-full h-auto flex bg-blue-600 gap-2 justify-between items-center p-10'>
      <div className='flex-col justify-center justify-items-center text-white'>
        <h3 className='text-lg font-bold'>Contact</h3>
        <p>Youtube</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
      <div className='flex-col justify-center items-center text-white'>
        <h3 className='text-lg font-bold'>Locations</h3>
        <p>Colombia</p>
        <p>Venezuela</p>
        <p>Ecuador</p>
      </div>
      <div className='flex-col justify-center items-center text-white'>
        <h3 className='text-lg font-bold'>Privacy</h3>
        <p>MIT</p>
        <p>Copyright</p>
        <p>all</p>
      </div>
    </footer>
  )
}

export {Footer}