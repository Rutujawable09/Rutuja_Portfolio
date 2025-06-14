import React from "react";
import style from "./About.module.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import profile_img1 from "../../assets/assets/profile_img1.jpg";
const About = () => {
  return (
    <div id="about" className={style.about}>
      <div className={style.aboutTitle}>
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className={style.aboutSection}>
        <div className={style.aboutLeft}>
          <img src={profile_img1} alt="" />
        </div>
        <div className={style.aboutRight}>
          <div className={style.aboutPara}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              officia quibusdam nihil?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              doloremque cum animi quod.
            </p>
          </div>
          <div className={style.aboutSkills}>
            <div className={style.aboutSkill}>
              {" "}
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
            <div className={style.aboutSkill}>
              {" "}
              <p>React JS</p>
              <hr style={{ width: "70%" }}></hr>
            </div>
            <div className={style.aboutSkill}>
              {" "}
              <p>JavaScript</p>
              <hr style={{ width: "60%" }}></hr>
            </div>
            <div className={style.aboutSkill}>
              {" "}
              <p>Node Js</p>
              <hr style={{ width: "50%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className={style.aboutAchivments}>
        <div className={style.aboutAchivment}>
          <h5>Fresher</h5>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className={style.aboutAchivment}>
          <h5>10+</h5>
          <p>PROJECT COMPLETED</p>
        </div>
<hr />
         <div className={style.aboutAchivment}>
          <h5>10+</h5>
          <p>PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
