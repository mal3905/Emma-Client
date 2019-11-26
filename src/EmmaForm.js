import React from 'react'


export default function EmmaForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Emma-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}