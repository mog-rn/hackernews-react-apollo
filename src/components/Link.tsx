import React from 'react'

interface ILink{
    link: {
        description: string
        url: string
    }
}

const Link: React.FC<ILink> = (props) => {
    const {link} = props;
  return (
    <div>{link.description}({link.url})</div>
  )
}

export default Link