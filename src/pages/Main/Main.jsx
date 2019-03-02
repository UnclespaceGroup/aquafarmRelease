import React, { Component } from 'react'
import { Header, BlockWithFish, TextWithButton, Layout, TextWithButtonAndImage, OrderBlock, Modal } from 'exportComponents'
import im6 from 'static/images/006.jpg'
import { about, complect } from './data'

class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        <Layout>
          <BlockWithFish />
          <TextWithButton button={<button onClick={() => {this.modalAbout.onOpenModal()}}>Подробнее об акваферме</button>}>
            <p>Акваферма – уникальный синтез аквариума и площадки для разведения растений.</p>
            <p>Акваферма представляет собой замкнутую экосистему, поддерживающую баланс между растениями и рыбкой. </p>
          </TextWithButton>
          <TextWithButton id={'tt'}>
            <p>Акваферма – уникальный синтез аквариума и площадки для разведения растений.</p>
            <p>Акваферма представляет собой замкнутую экосистему, поддерживающую баланс между растениями и рыбкой. </p>
          </TextWithButton>
          <TextWithButtonAndImage {...{
            button: <button onClick={() => {this.modalComplect.onOpenModal()}}>Посмотреть комплект</button>,
            image: im6
          }} >
            <p>В комплект входит все необходимое. <br />Вам остается добавить только рыбку</p>
          </TextWithButtonAndImage>
        </Layout>
        <Layout bg={'#DFDFDF'}>
          <OrderBlock />
        </Layout>

        <Modal ref={node => { if (node) this.modalAbout = node}} title={'Подробнее об акваферме'} >
          {about}
        </Modal>

        <Modal ref={node => { if (node) this.modalComplect = node}} title={'Комплект Аквафермы'} >
          {complect}
        </Modal>

      </div>
    )
  }
}

export default Main
