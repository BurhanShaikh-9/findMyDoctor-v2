import React, { useState, useEffect } from 'react'
import personImg from '../../../assets/images/profile/guy.png'
import AuthService from '../../../services/auth.service';
import tokenService from '../../../services/token.service';

export const Myprofile = () => {
    const { getStorageData } = tokenService();
    const { getUserData, patchUserData } = AuthService();
    const myData = getStorageData();
    const [profileImage, setProfileImage] = useState();
    const [profileData, setProfileData] = useState({
        fullname: myData.fullname,
        email: myData.email,
        phone: myData.phone,
    })
    const [profileMetaData, setProfileMetaData] = useState({
        fullname: myData.fullname,
        email: myData.email,
        phone: myData.phone,
        address: "",
        age: "",
        weight: "",
        height: "",
    });


    //get Input from Form
    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProfileMetaData({ ...profileMetaData, [name]: value })
        setProfileData({ ...profileData, [name]: value })
    }
    const getImgInput = (e) => {
        const file = e.target.files[0];
        setProfileImage(file)
    }

    //Form Submition after Taking Input
    const formSubmit = (e) => {
        e.preventDefault();

        //adding MetaData to formData
        const formData = new FormData();
        formData.set("address", profileMetaData.address)
        formData.set("height", profileMetaData.height)
        formData.set("weight", profileMetaData.weight)
        formData.set("age", profileMetaData.age)
        formData.set("image", profileImage)
        for (const obj of formData.entries()) {
            console.log(obj[0] + ': ' + obj[1]);
        }

        //adding MainData to formData
        const userData = { ...profileData }
        patchUserData(userData).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err.message)
        })
        
        console.log(userData)

    }

    useEffect(() => {
        getUserData(myData.id).then((res => {
            console.log(res)
        }))
    }, [getUserData])

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
                                <h4 className="textPrimary mb-0">{myData.fullname}</h4>
                                <p>Update and personalize your details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={formSubmit}>
                    <div className="profileForm">
                        <div className="fields">
                            <label htmlFor="userName">Name</label>
                            <div className='inputField'>
                                <input type="text" id='userName' autoComplete='off' name='fullname' placeholder={myData.fullname} onChange={getInput} />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="number">Phone Number</label>
                            <div className='inputField'>
                                <input type="text" id='number' autoComplete='off' name='phone' placeholder={myData.phone} onChange={getInput} />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="email">Email</label>
                            <div className='inputField'>
                                <input type="text" id='email' autoComplete='off' name='email' placeholder={myData.email} onChange={getInput} />
                            </div>

                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Address</label>
                            <div className='inputField'>
                                <textarea type="text" id='address' autoComplete='off' rows={2} placeholder="Enter Address..." name='address' onChange={getInput} />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="address">Image</label>
                            <div className='inputField'>
                                <img src={personImg} alt="" />
                                <input id='dpImageUpload' type="file" accept="image/*" name='image' onChange={getImgInput} />
                                <label htmlFor='dpImageUpload'>Update</label>
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Age</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' name='age' onChange={getInput} />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Height</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' name='height' onChange={getInput} />
                            </div>
                        </div>
                        <hr />
                        <div className="fields">
                            <label htmlFor="age">Weight</label>
                            <div className='inputField'>
                                <input type="text" id='age' autoComplete='off' name='weight' onChange={getInput} />
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
