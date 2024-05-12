import React from 'react'

function Principal() {
  return (
    <section className='bg-BG-Blue-Marine flex flex-col h-fit py-28 w-full pl-28 gap-5'>
        <span className='bg-BG-Secundary-Green w-fit px-5 py-1'>lorem lorem</span>
        
        <div className='w-80 py-1 text-BG-Gray'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse magni nulla inventore temporibus nisi officia minima ullam, 
                nostrum aliquam cupiditate impedit enim quasi repudiandae et rem reiciendis vero vitae!</p>
        </div>

        <button className='bg-BG-Gray w-fit px-8 py-1 rounded-md border border-BG-Secundary-Green hover:bg-BG-Secundary-Green hover:transition-all duration-300'>lorem</button>
    </section>
  )
}

export default Principal