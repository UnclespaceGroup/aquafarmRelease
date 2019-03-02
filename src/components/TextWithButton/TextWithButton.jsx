import React, { Component } from 'react'
import s from './TextWithButton.module.scss'
import _ from 'lodash'

class TextWithButton extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  state = {
    active: false
  }

  render () {
    const {
      props: {
        children,
        button,
        id
      },
      state: {
        active
      }
    } = this
    return (
      <div className={s.container} id={id}>
        <div className={active ? s.wrapper_active : s.wrapper}>
          {
            _.map(children, (item, key) =>
              <div key={key} >{item}</div>
            )
          }
        </div>
        { button && <div className={s.button}>{button}</div> }
      </div>
    )
  }
  handleScroll = () => {
    let slide = document.querySelector('#' + this.props.id)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const _offsetTop = slide.offsetTop - slide.offsetHeight - 200
    if (scrollTop > _offsetTop) {
      this.setState({
        active: true
      })
    }
    else {
      this.setState({
        active: false
      })
    }
  }
  static defaultProps = {
    id: 'defaultId'
  }
}
export default TextWithButton
