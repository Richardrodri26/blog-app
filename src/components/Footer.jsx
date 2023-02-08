import React from 'react'
import {AiOutlineGithub, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <footer className='max-[425px]:flex-col w-full bg-blue-600 overflow-x-hidden flex gap-5 justify-between items-center'>

      <div className='w-[20%] text-center text-white font-extrabold my-2'>
        <p>REACT ROUTER v6</p>
      </div>

      <div className='m-5 w-[70%] min-h-[25vh] my-0 mx-auto flex max-[425px]:flex-col gap-2 justify-between items-center p-4'>
        <div className='flex flex-col justify-center items-center text-white text-center gap-2'>
          <h3 className='text-lg font-bold'>Contact</h3>
          <a href="https://github.com/Richardrodri26" target={'_blank'}><AiOutlineGithub/></a>
          <a href='https://www.linkedin.com/in/richard-rodriguez-b91822188/' target={'_blank'}><AiFillLinkedin/></a>
        </div>
        <div className='flex flex-col justify-between items-center text-white'>
          <h3 className='text-lg font-bold'>Locations</h3>
          <p>Colombia</p>
        </div>
        <div className='flex flex-col justify-center items-center text-white'>
          <h3 className='text-lg font-bold'>Privacy</h3>
          <p>MIT</p>
        </div>
      </div>
    </footer>
  )
}

export {Footer}