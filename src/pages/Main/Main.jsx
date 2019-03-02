import React, { Component } from 'react'
import { Header, BlockWithFish, TextWithButton, Layout, TextWithButtonAndImage } from 'exportComponents'
import im6 from 'static/images/006.jpg'

class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        <Layout>
          <BlockWithFish />
          <TextWithButton button={<button>Подробнее об акваферме</button>}>
            <p>Акваферма – уникальный синтез аквариума и площадки для разведения растений.</p>
            <p>Акваферма представляет собой замкнутую экосистему, поддерживающую баланс между растениями и рыбкой. </p>
          </TextWithButton>
          <TextWithButton id={'tt'} >
            <p>Акваферма – уникальный синтез аквариума и площадки для разведения растений.</p>
            <p>Акваферма представляет собой замкнутую экосистему, поддерживающую баланс между растениями и рыбкой. </p>
          </TextWithButton>
          <TextWithButtonAndImage {...{
            button: <button>Посмотреть комплект</button>,
            image:im6
          }} >
            <p>В комплект входит все необходимое. <br />Вам остается добавить только рыбку</p>
          </TextWithButtonAndImage>

          <div style={{ height: '200rem' }} />
        </Layout>
      </div>
    )
  }
}

export default Main
