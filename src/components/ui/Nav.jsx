import React from 'react'

function Nav(props) {
    const {link, name} = props

  return (
    <li className='flex flex-row'>
        <a href={link} className='hover:text-BG-Secundary-Green hover:transition-colors duration-300'>{name}</a>
    </li>
  )
}

export default Nav