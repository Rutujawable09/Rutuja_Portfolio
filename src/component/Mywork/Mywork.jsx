import React from 'react'
import style from './Mywork.module.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mywork_data from '../../assets/assets/mywork_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'
const Mywork = () => {
  return (
    <div id='work' className={style.Mywork}>
      <div className={style.myworkTitle}>
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className={style.myworkContainer}>
        {mywork_data.map((work,index)=>{
          return <img key={index} src={work.w_img} alt='' />
        })}
      </div>
      <div className={style.myworkShowmore}>
        <p>Show More</p>
        <img src={arrow_icon} alt='' />
      </div>
    </div>
  )
}

export default Mywork
