import React, { useState, useEffect } from 'react'
import personImg from '../../../assets/images/profile/guy.png'
import AuthService from '../../../services/auth.service';
import tokenService from '../../../services/token.service';

export const Myprofile = () => {
    const {getUserId} = tokenService();
    const {getUserData} = AuthService();
      const [userId, setUserId] = useState(getUserId());
      console.log(userId)
    const [formData, setFormData] = useState(new FormData());
    

    //get Input from Form
    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        formData.set(name, value);
    }

    //Form Submition after Taking Input
    const formSubmit = (e) => {
        e.preventDefault();
        formData.set("id", userId)
        for(let obj of formData){
            console.log(obj)
        }
    }

    useEffect(()=>{
        getUserData(userId).then((res => {
            console.log(res)
        }))
      
    })

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
                <form onSubmit={formSubmit}>
                    <div className="profileForm">
                        <div className="fields">
                            <label htmlFor="userName">Name</label>
                            <div className='inputField'>
                                <input type="text" id='userName' autoComplete='off' value="" name='name' onChange={getInput} />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="number">Phone Number</label>
                            <div className='inputField'>
                                <input type="text" id='number' autoComplete='off' value="" name='phone' onChange={getInput} />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="email">Email</label>
                            <div className='inputField'>
                                <input type="text" id='email' autoComplete='off' value="" name='email' onChange={getInput}/>
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Address</label>
                            <div className='inputField'>
                                <textarea type="text" id='address' autoComplete='off' rows={2} placeholder="Enter Address..." name='address' onChange={getInput}/>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Image</label>
                            <div className='inputField'>
                                <img src={personImg} alt="" />
                                <input type="file" accept="image/*" name='image' onChange={getInput}/>
                                <button>Update</button>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Age</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' onChange={getInput}/>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Height</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' onChange={getInput}/>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Weight</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' onChange={getInput}/>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <button type='submit'>Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
