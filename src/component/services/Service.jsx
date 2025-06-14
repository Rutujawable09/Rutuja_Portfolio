
import style from './Service.module.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import Services_Data from '../../assets/assets/services_data'
import arrow_icon from '../../assets/assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='services' className={style.services}>
      <div className={style.servicesTitle}>
        <h1>My Services</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className={style.serviceContainer}>
        {Services_Data.map((service,index)=>{
          return <div key={index} className={style.serviceFormat}>
          <h3>{service.s_no}</h3>
          <h2>{service.s_name}</h2>
          <p>{service.s_desc}</p>

          <div className={style.serviceReadmore}>
            <p>Readmore</p>
            <img src={arrow_icon} alt='' />
          </div>
          </div>
         
        })}
      </div>
    </div>
  )
}

export default Service
