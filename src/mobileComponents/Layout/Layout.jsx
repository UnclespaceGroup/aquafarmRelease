import React from 'react'
import s from './Layout.module.scss'

const Layout = ({children, bg}) => {
  return (
    <div style={{backgroundColor: bg}}>
      <div className={s.container}>{children}</div>
    </div>
  )
}
export default Layout
