import React, { Component } from 'react'
import s from './Main.module.scss'

class Page404 extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount() {
    console.log('will')
  }
  componentDidMount() {
    console.log('did')
  }
  render() {
    console.log(s)
    return (
      <div className={s.container}>
        404
      </div>
    )
  }
}
export default Page404
