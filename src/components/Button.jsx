import React from 'react'

const Button = (props) => {
  return (
    <button className={`rounded-full px-4 py-2 text-white hover:bg-buttonBgHover transition-all bg-buttonBg font-semibold ${props.className}`}>{props.children}</button>
  )
}

export default Button