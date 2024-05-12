import React from 'react'
import Info from './ui/Info'

function MiddleInfo() {
  return (
    <section className='bg-BG-Blue-Marine flex flex-row h-fit w-full'>
        <div className='bg-BG-Blue-Marine w-6/12 flex justify-center py-28'>
            <Info
                title="lorem lorem" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate."
                textButton="Lorem"/>
        </div>

        <div className='bg-BG-Secundary-Green w-6/12'>

        </div>
    </section>
  )
}

export default MiddleInfo