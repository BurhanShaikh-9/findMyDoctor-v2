import React from 'react'

export const CheckOut = () => {
    return (
        <>
            <div className="checkOut">
                <section>
                    <div className="container">

                        <div className="mainBody">
                            <div className="mainBodyHeading">
                                <h1>
                                    <span>Booking </span>Details
                                </h1>
                            </div>
                            <div className="mainBodyInner">
                                <div className="row wrapper ">


                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Recipient Name</label>
                                            <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Your Name...' name='receiptName' required />
                                        </div>
                                    </div>


                                   
                                  
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Promo Code</label>
                                            <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Promo Code...' name='promoCode' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Promo Code</label>
                                            <select name="" id="">
                                                <option value="">Cash</option>
                                                <option value="">Online Delivery</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Card Number</label>
                                            <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Card Number...' name='promoCode' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Cost</label>
                                            <p>450 PKR</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Location</label>
                                            <select name="" id="">
                                                <option value="">Gulshan e Iqbal</option>
                                                <option value="">Shahrah e faisal</option>
                                                <option value="">Scheme 33</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                        <div className='selectDateTime '>
                                            <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Address</label>
                                            <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Your Address...' name='address' required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " >
                                        <div className='appointmentButton '>
                                            <button className="done" type='submit'>
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
