import React, { use, useRef, useState } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/assets/logo.svg";
import underline from "../../assets/assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/assets/menu_open.svg'
import menu_close from '../../assets/assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef=useRef();

  const openMenu =()=>{
    menuRef.current.style.right="0"
  }

   const closeMenu =()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className={style.navbar}>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt=""  className={style.navMobileOpen}/>
      <ul ref={menuRef} className={style.navMenu}>
        <img src={menu_close} onClick={closeMenu} alt="" className={style.navMobileClose}/>
        <li>
          <AnchorLink className={style.anchorLink} offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu == "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className={style.anchorLink} offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu == "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className={style.anchorLink} offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu == "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className={style.anchorLink} offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu == "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className={style.anchorLink} offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu == "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className={style.navConnect}>
        <AnchorLink className={style.anchorLink} offset={50} href="#contact">
          Contect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
