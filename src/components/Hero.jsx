import React from 'react';
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

            <button 
                type='button' 
                className='black_btn'
                onClick={()=> window.open('https://github.com/TanviSharma2104/AI-Article-Summarizer')}>
                GitHub</button>
        </nav>
    </header>
  )
}

export default Hero