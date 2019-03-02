import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FORM_START, FORM_SUCCESS } from '../../reducer'
import OrderForm from './OrderForm'
import OrderSuccess from './OrderSuccess'
import { setCurrentBlockInForm } from 'actions'
// import axios from 'axios'

class OrderBlock extends Component {
  render () {
    const {
      props: {
        status,
        actions
      },
      onSubmit
    } = this
    console.log(status)
    return (
      status === FORM_SUCCESS ? <OrderSuccess {...actions} />
        : <OrderForm {...{ onSubmit}} />
    )
  }
  toStart = () => {
    this.props.setCurrentBlockInForm(FORM_START)
  }

  onSubmit = (values) => {
    console.log('submit')
    const _val = values.toJS()
    console.log(_val)

//     const url = 'https://tech.mymultishop.ru/api/aquafarm'
    // axios.post(url, {
    //   ..._val
    // })
    //   .then(res => {
    //     console.log(res)
    //     this.props.setCurrentBlockInForm(FORM_SUCCESS)
    //   })
    //   .catch(er => {
    //     console.log(er)
    //     alert('Произошла ошибка, повторите позже')
    //   })
  }
}

export default connect(
  state => ({
    status: state.status
  }),
  dispatch => ({
    actions: bindActionCreators(setCurrentBlockInForm, dispatch)
  })
)(OrderBlock)
