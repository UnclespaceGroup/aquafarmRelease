import React, { Component } from 'react'
import CarouselSlider from 'nuka-carousel'
import s from './Carousel.module.scss'
import im1 from 'static/big/003.jpg'
import im2 from 'static/big/002.jpg'
import im3 from 'static/big/u_okna.jpg'

// const data = [
//   <div className={s.image} style={{backgroundImage: `url(${im1})`}} />,
//   <div className={s.image} style={{backgroundImage: `url(${im2})`}} />,
//   <div className={s.image} style={{backgroundImage: `url(${im3})`}} />
// ]

// const data = [
//   <img className={s.image} src={im1} />,
//   <img className={s.image} src={im2} />,
//   <img className={s.image} src={im3} />
// ]

class Carousel extends Component {
  render () {
    return (
      <CarouselSlider
        autoplay
        renderCenterLeftControls={({previousSlide}) => (
          <button className={s.prev} onClick={previousSlide}>{'<'}</button>
        )}
        renderCenterRightControls={({nextSlide}) => (
          <button className={s.next} onClick={nextSlide}>{'>'}</button>
        )}
      >
        <div className={s.image} style={{backgroundImage: `url(${im1})`}} />
        <div className={s.image} style={{backgroundImage: `url(${im2})`}} />
        <div className={s.image} style={{backgroundImage: `url(${im3})`}} />
      </CarouselSlider>
    )
  }
}

export default Carousel
