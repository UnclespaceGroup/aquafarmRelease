import React, { Component } from 'react'
import s from './Header.module.scss'

class Header extends Component {
  render () {
    return (
      <div className={s.container}>
        <div className={s.gradient} />
        <div className={s.wrapper}>
          <div className={s.title}>Закажите собственную <br />акваферму</div>
          <div className={s.text}>Следите за рыбкой и выращивайте урожай</div>
          <button className={s.button}>Перейти к заказу</button>
        </div>
      </div>
    )
  }
}

export default Header
