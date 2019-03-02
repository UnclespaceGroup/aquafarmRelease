import React, { Component } from 'react'
import s from './TextWithButtonAndImage.module.scss'

class TextWithButtonAndImage extends Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
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
        image,
        id
      },
      state: {
        active
      }
    } = this
    return (
      <div className={s.container} id={id}>
        <div className={s.row}>
          <div className={s.col1}>
            <div className={active ? s.wrapper_active : s.wrapper}>
              {children}
            </div>
            {button && <div className={s.button}>{button}</div>}
          </div>
          <div className={s.col}>
            <div className={s.image} style={{backgroundImage: `url(${image})`}} />
          </div>
        </div>
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
    // else {
    //   this.setState({
    //     active: false
    //   })
    // }
  }
  static defaultProps = {
    id: 'defaultId'
  }
}

export default TextWithButtonAndImage
