import React from 'react'

function ButtonFooter({text}) {
  return (
    <button className='bg-BG-Secundary-Green w-10 h-10 rounded-md hover:bg-BG-Gray hover:transition-all duration-300 hover:border hover:border-BG-Secundary-Green'>
        {text}
    </button>
  )
}

export default ButtonFooter