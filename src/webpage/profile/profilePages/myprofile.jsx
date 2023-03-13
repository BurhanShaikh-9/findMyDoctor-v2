import React from 'react'
import personImg from '../../../assets/images/profile/guy.png'

export const Myprofile = () => {
    return (
        <>
            <div className="profileInner">
                <div className="profileHead">
                    <div className="photoContent">
                        <div className="coverPhoto"></div>
                    </div>
                    <div className="profileInfo">
                        <div className="profilePhoto">
                            <img
                                src={personImg}
                                className="img-fluid rounded-circle"
                                alt="profile"
                            />
                        </div>
                        <div className="profileDetails">
                            <div className="profileName px-3 pt-2">
                                <h4 className="textPrimary mb-0">Mitchell C. Shay</h4>
                                <p>Update and personalize your details</p>
                            </div>
                            <div className='editButton'>
                                <button>Edit</button>
                            </div>

                        </div>
                    </div>
                </div>
                <form action="">
                    <div className="profileForm">
                        <div className="fields">
                            <label htmlFor="userName">Name</label>
                            <div className='inputField'>
                                <input type="text" id='userName' autoComplete='off' value="shahrez khan" />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="number">Phone Number</label>
                            <div className='inputField'>
                                <input type="text" id='number' autoComplete='off' value="+9287827987" />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="email">Email</label>
                            <div className='inputField'>
                                <input type="text" id='email' autoComplete='off' value="shahrezkhan@gmail.com" />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Address</label>
                            <div className='inputField'>
                                <textarea type="text" id='address' autoComplete='off' rows={2} />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Image</label>
                            <div className='inputField'>
                                <img src={personImg} alt="" />
                                <button>Update</button>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Age</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Height</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Weight</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' />
                            </div>
                        </div>
                        <hr />
                    </div>
                </form>
            </div>
        </>
    )
}
