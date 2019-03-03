import React from 'react'
import s from './Advantages.module.scss'

const Advantages = ({title, icon, text}) => {
  return (
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.col1}>
          <div className={s.icon} style={{backgroundImage: `url(${icon})`}} />
        </div>
        <div className={s.col2}>
          <div className={s.title}>{title}</div>
          <div className={s.text}>{text}</div>
        </div>
      </div>
    </div>
  )
}
export default Advantages
