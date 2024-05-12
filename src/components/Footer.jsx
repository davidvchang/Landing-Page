import React from 'react'
import ButtonFooter from './ui/ButtonFooter'
import TextFooter from './ui/TextFooter'

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center bg-BG-Blue-Marine w-full h-48 gap-10'>
        <div className='flex flex-row gap-3'>
            <ButtonFooter/>
            <ButtonFooter/>
            <ButtonFooter/>
        </div>

        <div className='flex flex-row gap-5'>
            <TextFooter text="Lorem"/>
            <TextFooter text="Lorem"/>
            <TextFooter text="Lorem"/>
            <TextFooter text="Lorem"/>
        </div>
    </footer>
  )
}

export default Footer
