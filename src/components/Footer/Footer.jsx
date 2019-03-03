import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={s.container}>
      <a href={'tel:88005553535'} className={s.phone}>8 800 555 3535</a>
    </div>
  )
}
export default Footer
