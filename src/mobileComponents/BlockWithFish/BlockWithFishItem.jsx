import React, { Component } from 'react'
import s from './BlockWithFish.module.scss'

class BlockWithFishItem extends Component {
  render () {
    const {
      props: {
        title,
        text,
        icon
      }
    } = this
    return (
      <div className={s.wrapper}>
        <div className={s.title}>{title}</div>
        <div className={s.icon} style={{ backgroundImage: `url(${icon})`}} />
        <div className={s.text}>{text}</div>
      </div>
    )
  }
}
export default BlockWithFishItem
