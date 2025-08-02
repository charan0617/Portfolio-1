import React from 'react'
import './skills.css'
import UIDesign from '../../accets/ui-design.png'
import WebDesign from '../../accets/website-design.png'
import AppDesign from '../../accets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionated web designer with experience in creating visually appealing and user-friendly websites.I have strong understanding of design and a keen eye for details.    I am proficent in HTML, CSS, Javascript, React.js, Express.js and MangoDB, as well as design softwares. </span>
      <div className="skillBars">

        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>Designing intuitive and engaging user experiences with a focus on usability and aesthetic balance.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="EebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web design</h2>
            <p>Creating responsive, visually appealing websites that deliver seamless user interaction.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App design</h2>
            <p>Building sleek and functional mobile app interfaces tailored for smooth user journeys.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills