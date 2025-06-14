import React from 'react'
import style from './Contact.module.css'
import theme_pattern from '../../assets/assets/theme_pattern.svg'
import mail_icon from '../../assets/assets/mail_icon.svg'
import location_icon from '../../assets/assets/location_icon.svg'
import call_icon from '../../assets/assets/call_icon.svg'
const Contect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3548b007-5fc9-4366-88bb-4460a736c27a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  return (
    <div id='contact' className={style.contact}>
      <div className={style.contactTitle}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={style.contectSection  }>
        <div className={style.contactLeft}>
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on you can contact anytime</p>
          <div className={style.contactDetails} >
            <div className={style.contactDetail} >
             <img src={mail_icon} alt=''/> <p>greatstackdev@gmail.com</p>
            </div>

             <div className={style.contactDetail} >
              <img src={call_icon} alt=''/> <p>+91 896-754-3079</p>
            </div>

             <div className={style.contactDetail} >
              <img src={location_icon} alt=''/> <p>Maharashtra, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}
        className={style.contactRight} >
          <label htmlFor=''>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor=''>Your Email</label>
          <input type="email" placeholder='Enter your Email' name='email' />
          <label htmlFor=''>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'>
          </textarea>
          <button type='submit' className={style.contactSubmit}>Submit now</button>
          </form>   
        </div>
    </div>
  )
}

export default Contect
