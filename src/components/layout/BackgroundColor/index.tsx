import React from 'react'
// import { Type } from '../../../fields/BackgroundColor'
import useStyles from './css'

const BackgroundColor: React.FC<{
  color: 'red'
  className?: string
  children?: React.ReactNode
}> = ({ children, color, className }) => {
  const classes = useStyles()

  return <div className={[classes[color], className].filter(Boolean).join(' ')}>{children}</div>
}

export default BackgroundColor
