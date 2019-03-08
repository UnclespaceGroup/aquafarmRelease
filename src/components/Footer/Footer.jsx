import React from 'react'
import s from './Footer.module.scss'
import logo from '../../static/images/logo.png'

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <a href={'tel:88005553535'} className={s.phone}>8 800 555 3535</a>
        <div className={s.logo} style={{backgroundImage: `url(${logo})`}} />
      </div>
    </div>
  )
}
export default Footer
