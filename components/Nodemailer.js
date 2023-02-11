import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { RiPhoneFill, } from 'react-icons/ri'
// import { FaAddressCard } from 'react-icons/fa'
// import { AiOutlineMail } from 'react-icons/ai'
import './nodemailer.css'

const Result = () => {
    return (
        <p>Your message has been sent.</p>
    )
}

const Contact = () => {

    const form = useRef();

    const [result, setResult] = useState(false);

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_jmjvmpu', 'template_gqyw1he', form.current, 'user_0F0916xp78DwYZBNw0Mle')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };



    return (
        <>
            <div className="contact">
                

                <div className="contact_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact_form_container py-5">
                                    <div className="contact_form_title">
                                        Get In Touch
                                    </div>
                                    <form ref={form} className="contact_form" onSubmit={sendEmail} >
                                        <div className='contact_form_name d-flex justify-content-between align-items-between' >
                                            <input type="text" name='firstname' id="contact_form" className='contact_form_name input-field' placeholder='Name' required='true' />

                                            <input type="email" name='email' id="contact_form_email" className='contact_form_email input-field' placeholder='email' required='true' />

                                            <input type="text" name='company' id="contact_form_phone" className='contact_form_phone input-field' placeholder='company' required='true' />
                                        </div>

                                        <div className="contact_form_text mt-5">
                                            <textarea className="text-field msg" name='message' placeholder='Message'  rows="8"></textarea>
                                        </div>

                                        <div className="contact_form_button">
                                            <button type='submit' className='button contact_submit_button' >Send Message</button>
                                        </div>
                                        {result ? <Result /> : ""}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
