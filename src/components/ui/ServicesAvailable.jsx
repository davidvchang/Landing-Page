import React from 'react'

function ServicesAvailable(props) {
    const {icon, text} = props

  return (
    <li className='flex flex-row gap-2'>
        {icon}
        <span>{text}</span>

    </li>
  )
}

export default ServicesAvailable