import React from 'react'


export default function NavCuteButton(props) {
  const { tag, className, childrenm, ...otherProps } = props

  return React.createElement(
    props.tag,
    {
      className: ['NavCuteButton', props.className].join(' '),
      ...otherProps
    },
    props.children
  )
}

NavCuteButton.defaultProps ={
  tag: 'a',
}