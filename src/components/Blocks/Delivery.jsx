import React from 'react'
import s from './Delivery.module.scss'

export const Delivery = ({title, children}) => {
  return (
    <div className={s.delivery}>
      <div className={s.title}>{title}</div>
      <div className={s.text}>{children}</div>
    </div>
  )
}
