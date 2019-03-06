import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'
import im from 'static/images/1.png'
import s from './Header.module.scss'

class Header extends Component {
  render () {
    return (
      <div className={s.container} style={{backgroundImage: `url(${im})`}}>
        <div className={s.gradient} />
        <div className={s.wrapper}>
          <div className={s.title}>Закажите собственную <br />акваферму</div>
          <div className={s.text}>Следите за рыбкой и выращивайте урожай</div>
          <Scrollchor animate={{offset: 0, duration: 1000}} className={s.button} to="#price" >Перейти к заказу</Scrollchor>
        </div>
      </div>
    )
  }
}

export default Header
