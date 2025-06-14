import React from 'react'
import style from './Profile.module.css'
import profile_img1 from '../../assets/assets/profile_img1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Profile = () => {
  return (
    <div id='profile' className={style.profile}>
      <img className={style.img} src={profile_img1} alt='' />
      <h1><span>I'm Rutuja Wable</span> , fronted developer based in India .</h1>
      <p>I am a fronted devloper from Maharashtra.</p>
      <div className={style.profileAction}>
      <div className={style.profileConnect}><AnchorLink className={style.anchorLink} offset={50} href="#contact" >Connect with me</AnchorLink></div>
      <div className={style.profileResume}>My Resume</div>
      </div>
    </div>
  )
}

export default Profile
