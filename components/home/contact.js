'use client'
import { useState } from 'react';
import './contact.css'
import Router from 'next/router';
export default function Contact() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const handleForm = async () => {

        await fetch("https://script.google.com/macros/s/AKfycbwCWN-1JdcTCTdy9iedi2XC02QRRXTwdcU-UdyV0tlffmdkjv5KV4W-o9KZsjoyPlGMew/exec", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                name: name,
                message: message,
                email: email
            },
            mode: "no-cors", // Add this line to bypass CORS
        })
        Router.reload()
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="row scroll">
                    <img src='assets/scroll.webp' className='img-fluid' alt="" />
                </div>
                <div className="row text-center pb-5">
                    <h2>Contact</h2>
                    <p>I’m currently available for freelance projects in Kasaragod, Kerala, and beyond.<br/> Whether you need e-commerce development, website redesign, or mobile app development, I’d love to collaborate with you.</p>
                </div>
                <div className="container">
                    <form action='https://script.google.com/macros/s/AKfycbwt9ab1MdnnBImOdvBNDMvbm4m6a-2CXPSVMPuNaABhIp6t9sON96M8mT6BHCZ95y5wLw/exec' method='post'>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" onChange={function (e){setname(e.target.value)}} name="name" required id="name"  className='form-control' placeholder='Enter Your Name' />
                                    <label htmlFor="name" className='text-dark'>Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" name="email" onChange={function (e){setemail(e.target.value)}} required id="email" className='form-control' placeholder='Enter Your Email' />
                                    <label htmlFor="email" className='text-dark'>Email</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <textarea name="message" id="msg" onChange={function (e){setmessage(e.target.value)}} required style={{ height: '8rem' }} placeholder='Enter your needs' className='form-control'></textarea>
                                    <label htmlFor="msg" className='text-dark'>Message</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col text-center">
                                <button onClick={handleForm} className='btn btn-bg' type='submit'><i style={{ fontFamily: 'monospace' }} className='fa-brands fa-bounce'>Message</i> <i className="fa-brands fa-facebook-messenger fa-bounce"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}