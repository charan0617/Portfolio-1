import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../accets/walmart.png'
import Adobe from '../../accets/adobe.png'
import Microsoft from '../../accets/microsoft.png'
import Facebook from '../../accets/facebook.png'
import FacebookIcon from '../../accets/facebook-icon.png'
import InstagramIcon from '../../accets/instagram.png'
import YoutubeIcon from '../../accets/youtube.png'
import TwitterIcon from '../../accets/twitter.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9td50l', 'template_sz8b0dl', form.current, {publicKey: '_fii1gbSkkymd24Gf',})
       .then((result) => {
             console.log(result.text);
             e.target.reset()
             alert('Email sent !!')
        },(error) => {
             console.log(error.text);
        },
      )
    }
  return (
    <section id="contactPage">

        <div id="clients">
            <h1 className="contactPageTitle">My Client</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
            <img src={Walmart} alt="client" className="clientImg" />
            <img src={Adobe} alt="client" className="clientImg" />
            <img src={Microsoft} alt="client" className="clientImg" />
            <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>


        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill the form below to discus any work opportunities</span>


            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your name' name='your_name' />
                <input type="email" className="email" placeholder='Your email'name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your message'></textarea>
                <button type='submit' value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="FB" className="link" />
                    <img src={InstagramIcon} alt="INSTA" className="link" />
                    <img src={YoutubeIcon} alt="YT" className="link" />
                    <img src={TwitterIcon} alt="TWT" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact