import React from 'react'
import Nav from './ui/Nav'

function NavBar() {
  return (
    <section className='w-full h-14 bg-BG-Gray flex flex-row items-center justify-between px-28'>
        <span className='font-semibold text-2xl'>Logo</span>

            {/* Contenedor Nav */}
        <ul className='flex flex-row gap-20'>
            <Nav link="#" name="lorem"/>
            <Nav link="#" name="lorem"/>
            <Nav link="#" name="lorem"/>
            <Nav link="#" name="lorem"/>
        </ul>
    </section>
  )
}

export default NavBar