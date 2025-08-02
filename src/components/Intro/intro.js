import React from 'react'
import './intro.css'
import bg from '../../accets/ck.png'
import btnImg from '../../accets/hireme.png'
import {Link} from 'react-scroll'


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Charan</span> <br />Web Developer</span>
            <p className="introPara">I am a skilled web developer with experience in creating <br />visually appealing and user friendy websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro