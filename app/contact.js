import './contact.css'
export default function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row scroll">
                    <img src='assets/scroll.webp' className='img-fluid' alt="" />
                </div>
                <div className="row text-center pb-5">
                    <h2>Contact</h2>
                    <p>I’m currently available for freelance work</p>
                </div>
                <div className="container">
                    <form method='post'>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" name="name" required id="name"  className='form-control' placeholder='Enter Your Name' />
                                    <label htmlFor="name" className='text-dark'>Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" name="email" required id="email" className='form-control' placeholder='Enter Your Email' />
                                    <label htmlFor="email" className='text-dark'>Email</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <textarea name="message" id="msg" required style={{ height: '8rem' }} placeholder='Enter your needs' className='form-control'></textarea>
                                    <label htmlFor="msg" className='text-dark'>Message</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col text-center">
                                <button className='btn btn-bg' type='submit'><i style={{ fontFamily: 'monospace' }} className='fa-brands fa-bounce'>Message</i> <i className="fa-brands fa-facebook-messenger fa-bounce"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}