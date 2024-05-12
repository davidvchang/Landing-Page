import React from 'react'

function Info({title, text, textButton}) {
  return (
    <div className='flex flex-col gap-5'>
        <span className='text-BG-Secundary-Green text-lg'>{title}</span>

        <div className='w-80 py-1 text-BG-Gray'>
            <p>{text}</p>
        </div>
        <button className='bg-BG-Secundary-Green w-fit px-8 py-1 rounded-md border border-BG-Secundary-Green hover:bg-BG-Gray hover:transition-all duration-300'>
            {textButton}
        </button>
    </div>
  )
}

export default Info