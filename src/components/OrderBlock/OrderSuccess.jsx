import React, { Component } from 'react'
import s from './Order.module.scss'

class OrderSuccess extends Component {
  render () {
    return (
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.title}>Заказ успешно выполнен</div>
            <div className={s.text}>Скоро с Вами свяжется наш администратор</div>
          </div>
          <div className={s.col}>
            <div className={s.successIcon} />
          </div>
        </div>
        <div>
          <button className={s.button} onClick={this.props.toStart}>На главную</button>
          <div className={s.bottom}>С вопросами звоните на горячую линию <a href={'tel:88005553535'}> 8 800 555 35
            35</a></div>
        </div>
      </div>
    )
  }
}

export default OrderSuccess
