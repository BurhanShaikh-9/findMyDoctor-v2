import React from 'react'

export const Contact = () => {
    return (
        <>
            <main >
                <div className='contactUs'>
                    <section className="contactBanner">
                        <div className="banner">
                            <div className="bannerInner">
                                <div className="bannerText">
                                    <div className="container">
                                        <div className="bannerInfo">
                                            <p><span>CONTACT US</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className='contactSection'>
                        <div className="container">
                            <div className="contactWrapper">
                                <div className="card cardForm">
                                    <div className="card-body">
                                        <form className="contactForm">
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <p>
                                                            Get In Touch
                                                        </p>

                                                        <p className='heading'>Write Us A Message</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="contactName">Name</label>
                                                        <input type="text" id='contactName' placeholder='Enter Name...' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields fieldRight">
                                                        <label htmlFor="contactSubject">Subject</label>
                                                        <input type="text" id='contactSubject' placeholder='Enter Subject...' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="contactEmail">Email</label>
                                                        <input type="email" id='contactEmail' placeholder='Enter Email...' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                                                    <div className="fields">
                                                        <label htmlFor="contactPhone">Phone</label>
                                                        <input type="number" id='contactPhone' placeholder='Enter Number...' />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <label htmlFor="contactMessage">Message</label>
                                                        <textarea id="contactMessage" placeholder='Enter Message...'></textarea>

                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                                    <div className="fields">
                                                        <button type='Submit'>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card cardAbout">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                                                <div className="contactAbout">
                                                    <i className="bi bi-telephone-fill" />
                                                    <p>Call Us Now:</p>
                                                    <p>(+92) 313-5228378</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                                                <div className="contactAbout">
                                                    <i className="bi bi-geo-alt-fill" />
                                                    <p>Address:</p>
                                                    <p>Office # 404, CTC Building, Block-8 Clifton, Karachi.</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                                                <div className="contactAbout">
                                                    <i className="bi bi-envelope-fill" />
                                                    <p>Email:</p>
                                                    <p>info@findmydoctor.pk</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810.4832541419769!2d67.03429067605832!3d24.830818940173806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd2bc650439%3A0x569fba265e542df8!2sFind%20My%20Doctor!5e0!3m2!1sen!2s!4v1678089933612!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </>
    )
}
