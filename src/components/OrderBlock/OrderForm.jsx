import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import FieldInput from './Form'
import s from './Order.module.scss'
import { email, phoneNumber, required } from 'utils/Form/validate'

class OrderForm extends Component {
  render () {
    const {
      props: {
        handleSubmit
      }
    } = this
    return (
      <form onSubmit={handleSubmit}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.col}>
              <div className={s.title}>Заполните форму, и станьте аквафермером</div>
              <div className={s.text}>Наш администратор свяжется с Вами и в ближайшее время вы получите свой набор
                Акваферма
              </div>
            </div>
            <div className={s.col}>
              <Field {...{
                component: FieldInput,
                placeholder: 'Email',
                name: 'email',
                type: 'email',
                validate: [email, required]
              }} />
              <Field {...{
                component: FieldInput,
                placeholder: 'Номер телефона',
                name: 'phone',
                type: 'phone',
                validate: [phoneNumber]
              }} />
              <div className={s.price}>4,990 р</div>
            </div>
          </div>
          <div>
            <button className={s.button} type={'submit'}>Заказать</button>
            <div className={s.bottom}>Ваши данные не будут переданы третьим лицам или использованы в спам рассылках.</div>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'orderForm',
})(OrderForm)
