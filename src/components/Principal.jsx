import React from 'react'
import Info from './ui/Info'

function Principal() {
  return (
    <section className='bg-BG-Blue-Marine flex flex-col h-fit py-28 w-6/12 items-center gap-5'>
        <Info
            title="lorem lorem" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate."
            textButton="Lorem"/>
    </section>
  )
}

export default Principal