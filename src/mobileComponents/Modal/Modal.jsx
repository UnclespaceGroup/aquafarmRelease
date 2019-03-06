import React from 'react'
import ReactModal from 'react-responsive-modal'
import s from './Modal.module.scss'

class Modal extends React.Component {
  state = {
    open: false
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  render () {
    const {open} = this.state
    const {
      title,
      children
    } = this.props
    return (
      <div>
        <ReactModal open={open} onClose={this.onCloseModal} center>
          <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={s.text}>
              {children}
            </div>
            <div className={s.footer}>
              <button className={s.button} onClick={this.onCloseModal}>Понятно</button>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default Modal
