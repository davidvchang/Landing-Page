import React from 'react'
import ButtonFooter from './ButtonFooter'

function Div2SAP({title, parrafo}) {
  return (
    <div className='flex flex-row gap-3 justify-center items-center'>
        <div className='w-36 h-36 bg-BG-Blue-Marine rounded-lg'></div>

        <div className='flex flex-col gap-2 w-96'>
            <span className='text-BG-Secundary-Green font-semibold'>{title}</span>
            <p>{parrafo}</p>

            <div className='flex flex-row gap-2'>
                <ButtonFooter/>
                <ButtonFooter/>
            </div>

        </div>
    </div>
  )
}

export default Div2SAP
