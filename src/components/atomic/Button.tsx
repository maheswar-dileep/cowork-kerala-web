import React from 'react'

type Props = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const Button = (props: Props) => {
  return (
    <div>Button</div>
  )
}

export default Button
