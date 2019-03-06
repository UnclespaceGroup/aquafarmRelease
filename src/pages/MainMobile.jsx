import React, { Component } from 'react'
import {
  Header,
  BlockWithFish,
  TextWithButton,
  Layout,
  TextWithButtonAndImage,
  OrderBlock,
  Modal,
  Carousel, Footer, Advantages, Delivery, Menu
} from 'exportMobileComponents'
import im6 from 'static/images/006.jpg'
import { about, complect } from './data'
import ad1 from 'static/images/money.png'
import ad2 from 'static/images/guarantee.png'
import ad3 from 'static/images/free.png'
import map from 'static/images/prem-dostavka.png'

class MainMobile extends Component {
  componentDidUpdate () {
  }

  render () {
    return (
      <div>
        <Menu />
        <Header />
        <Layout>
          <BlockWithFish />
          <TextWithButton
            button={<button onClick={() => {this.modalAbout.onOpenModal()}}>Подробнее об акваферме</button>}>
            <p>Акваферма – уникальный синтез аквариума и площадки для разведения растений.</p>
            <p>Является одним из самых популярных товаров социальных сетей 2019 года</p>
          </TextWithButton>
          <TextWithButton id={'tt'}>
          <p>Акваферма представляет собой замкнутую экосистему, поддерживающую баланс между растениями и рыбкой.</p>
          <p>Растения фильтруют воду, питаясь выделениями рыбки, рыбка радуется растениям</p>
        </TextWithButton>
          <TextWithButton id={'ttыыы'}>
            <p>Поэтому Вам не доставит забот следить за аквафермой.</p>
            <p>Покормите вовремя рыбку, и все готово</p>
          </TextWithButton>
          <TextWithButtonAndImage {...{
            button: <button onClick={() => {this.modalComplect.onOpenModal()}}>Посмотреть комплект</button>,
            image: im6,
            id: 'sssss'
          }} >
            <p>В комплект входит все необходимое. </p>
            <p>Вам остается добавить только рыбку</p>
          </TextWithButtonAndImage>

        </Layout>
        <Carousel />

        <Layout>
          <TextWithButton id={'advantages'}>
            <Advantages {...{
              title: 'Удобная оплата',
              text: 'Оплата только при получении',
              icon: ad1
            }} />
            <Advantages {...{
              title: '100% гарантия подлинности',
              text: 'Мы - официальный диллер компании Назад к истокам',
              icon: ad2
            }} />
            <Advantages {...{
              title: 'Бесплатная доставка',
              text: 'Курьер отдаст вам посылку лично в руки',
              icon: ad3
            }} />
          </TextWithButton>

          <TextWithButtonAndImage bigImage {...{
            image: map,
            id: 'sssssss'
          }} >
            <Delivery {...{title: 'По Москве'}} >
              <div>Доставка на следующий день после заказа <br /> Цена доставки от 300 рублей <br /> Оплата курьеру
                наличными или при получении заказа
              </div>
            </Delivery>
            <Delivery {...{title: 'По Санкт-Петербургу'}} >
              <div>Доставка на следующий день после заказа <br /> Цена доставки от 300 рублей <br /> Оплата курьеру
                наличными или при получении заказа
              </div>
            </Delivery>
            <Delivery {...{title: 'По России'}} >
              <div>Доставка на следующий день после заказа <br /> Цена доставки от 300 рублей <br /> Оплата курьеру
                наличными или при получении заказа
              </div>
            </Delivery>
          </TextWithButtonAndImage>

        </Layout>

        <Layout bg={'#DFDFDF'}>
          <OrderBlock />
        </Layout>

        <Modal ref={node => { if (node) this.modalAbout = node}} title={'Подробнее об акваферме'}>
          {about}
        </Modal>

        <Modal ref={node => { if (node) this.modalComplect = node}} title={'Комплект Аквафермы'}>
          {complect}
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default MainMobile
