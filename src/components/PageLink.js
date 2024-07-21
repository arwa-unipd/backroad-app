import React from 'react'

const PageLink = ({href,name,itemClass}) => {
  return (
    <li>
      <a
        href={href}
        className={itemClass}
        target='_blank'
        rel='noreferrer'
      >
        {name}
      </a>
    </li>
  )
}

export default PageLink
