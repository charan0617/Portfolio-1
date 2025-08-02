import React from 'react'
import './works.css'
import Portfolio1 from '../../accets/portfolio-1.png'
import Portfolio2 from '../../accets/portfolio-2.png'
import Portfolio3 from '../../accets/portfolio-3.png'
import Portfolio4 from '../../accets/portfolio-4.png'
import Portfolio5 from '../../accets/portfolio-5.png'
import Portfolio6 from '../../accets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="WorksTitle">My Projects</h2>
        <span className="WorksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to
        bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
        <div className="WorksImgs">
            <img src={Portfolio1} alt="project" className="WorksImg" />
            <img src={Portfolio2} alt="project" className="WorksImg" />
            <img src={Portfolio3} alt="project" className="WorksImg" />
            <img src={Portfolio4} alt="project" className="WorksImg" />
            <img src={Portfolio5} alt="project" className="WorksImg" />
            <img src={Portfolio6} alt="project" className="WorksImg" />
        </div>
        <button className="WorkBtn">See more . . .</button>
    </section>
  )
}

export default Works