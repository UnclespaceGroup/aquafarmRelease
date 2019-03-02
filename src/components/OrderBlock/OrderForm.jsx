import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FieldInput from './Form'
import s from './Order.module.scss'

class OrderForm extends Component {
  render () {
    const {
      props: {
        handleSubmit
      }
    } = this
    return (
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.title}>Заполните форму, и станьте аквафермером</div>
            <div className={s.text}>Наш администратор свяжется с Вами и в ближайшее время вы получите свой набор
              Акваферма
            </div>
          </div>
          <div className={s.col}>
            <form onSubmit={handleSubmit}>
              <Field {...{
                component: FieldInput,
                placeholder: 'Email',
                name: 'email',
                type: 'email'
              }} />
              <Field {...{
                component: FieldInput,
                placeholder: 'Номер телефона',
                name: 'phone',
                type: 'phone'
              }} />
            </form>
            <div className={s.price}>4,990 р</div>
          </div>
        </div>
        <button className={s.button} type={'submit'}>Заказать</button>
        <div className={s.bottom}>Ваши данные не будут переданы третьим лицам или использованы в спам рассылках.</div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'orderForm',
})(OrderForm)
