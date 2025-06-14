import React from 'react'
import style from './Footer.module.css'
import footer_logo from'../../assets/assets/footer_logo.svg'
import user_icon from'../../assets/assets/user_icon.svg'
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerTopLeft}>
          <img src={footer_logo} alt="" />
          <p>I am fronted devloper</p>
        </div>
        <div className={style.footerTopRight}>
          <div className={style.footerEmailinput}>
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className={style.footerSubscribe}>Subscribe</div>
        </div>
      </div>
      <hr />
      <div className={style.footerBottom}>
        <p className={style.footerBottomLeft}>2025 Rutuja. All rights reserved.</p>
        <div className={style.footerBottomRight}>
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
