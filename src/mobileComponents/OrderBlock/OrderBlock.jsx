import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FORM_START, FORM_SUCCESS } from 'reducer'
import OrderForm from './OrderForm'
import OrderSuccess from './OrderSuccess'
import { setCurrentBlockInForm } from 'actions'
import axios from 'axios'

class OrderBlock extends Component {
  state = {
    sending: false
  }
  render () {
    const {
      props: {
        status
      },
      state: {
        sending
      },
      onSubmit,
      toStart
    } = this
    return (
      status === FORM_SUCCESS ? <OrderSuccess {...{toStart}} />
        : <OrderForm {...{ onSubmit, sending}} />
    )
  }
  toStart = () => {
    this.props.setCurrentBlockInForm(FORM_START)
  }

  onSubmit = (values) => {
    this.setState({ sending : true })
    const _val = values
    const url = 'https://tech.mymultishop.ru/api/aquafarm'
    axios.post(url, {
      ..._val
    })
      .then(res => {
        console.log(res)
        this.props.setCurrentBlockInForm(FORM_SUCCESS)
        this.setState({sending: false})
      })
      .catch(er => {
        console.log(er)
        alert('Произошла ошибка, повторите позже')
        this.setState({sending: false})
      })
  }
}

export default connect(
  state => {
    return ({
    status: state.currentForm
  })},
  dispatch => ({
    setCurrentBlockInForm: bindActionCreators(setCurrentBlockInForm, dispatch)
  })
)(OrderBlock)
