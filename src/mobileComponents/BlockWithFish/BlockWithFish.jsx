import React, { Component } from 'react'
import s from './BlockWithFish.module.scss'
import _ from 'lodash'
import BlockWithFishItem from './BlockWithFishItem'
import icon1 from 'static/images/fish.png'
import icon2 from 'static/images/plant.png'
import icon3 from 'static/images/silence.png'

const items = [
  {
    title: 'Не требует особого ухода',
    text: 'Система полностью автоматизирована',
    icon: icon1
  },
  {
    title: 'Не требует особого ухода',
    text: 'Система полностью автоматизирована',
    icon: icon2
  },
  {
    title: 'Не требует особого ухода',
    text: 'Система полностью автоматизирована',
    icon: icon3
  }
]

class BlockWithFish extends Component {
  render () {
    return (
      <div className={s.container}>
        <div className={s.row}>
          {
            _.map(items, (item, key) =>
              <div className={s.col} key={key}>
                <BlockWithFishItem {...item} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default BlockWithFish
