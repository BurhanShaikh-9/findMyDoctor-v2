import React, { useState } from 'react'
import signinImg from '../../assets/images/registration/register1.png'
import googleImg from '../../assets/images/registration/google.png'
import { Link } from 'react-router-dom'
import AuthService from '../../services/auth.service'
import { loading } from '../Component/loading'
import { ROUTING } from '../../utils/routes'

export const Signup = () => {
    
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const {handleRegister, OnSuccessRegister} = AuthService();


    const [signup, setSignup] = useState({
        fullname: "",
        // userName: "",
        email: "",
        phone: "",
        password: "",
    });
    const getSignupInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setSignup({ ...signup, [name]: value })
    }

    const formSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPasswordsMatch(false);
            return
        } else {

            setPasswordsMatch(true);
   
        }
        const insuranceVar = { ...signup, password }
        setIsLoading(true);
        
        handleRegister(insuranceVar).then((res) => {     
            console.log(insuranceVar)     
            console.log(res, 'responseRegistered')
            OnSuccessRegister(res)
        }).catch((err) =>{
            console.log(err, 'responseRegisterError')
        }).finally(() =>{
            setIsLoading(false)
        })
    }


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    return (
        <>
            <main >
                <div className="loginForm">
                    <section className="loginBanner">
                        <div className="banner">
                            <div className="bannerInner">
                                <div className="bannerText">
                                    <div className="container">
                                        <div className="bannerInfo">
                                            <p><span>Sign Up</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="login">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                    <div className="sideImageDiv">
                                        <img src={signinImg} alt="" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" align="center">
                                    <form className="loginMain" onSubmit={formSubmit}>
                                        <div className="heading">
                                            <p>Sign Up</p><small>Already have an account? <Link to={ROUTING.SIGNUP}>Sign In</Link> </small>
                                        </div>
                                        <div className="loginInputFields">
                                            <input type="text" placeholder='Enter Full Name...' name='fullname' onChange={getSignupInput} required/>
                                        </div>
                                        {/* <div className="loginInputFields">
                                            <input type="text" placeholder='Enter User Name...' name='userName' onChange={getSignupInput} />
                                        </div> */}
                                        <div className="loginInputFields">
                                            <input type="email" placeholder='Enter Email Address...' name='email' onChange={getSignupInput} required/>
                                        </div>
                                        <div className="loginInputFields">
                                            <input type="number" placeholder='Enter Contact Number...' name='phone' onChange={getSignupInput} required/>
                                        </div>
                                        <div className="loginInputFields2">
                                            <input type="password" placeholder='Enter Password...'  name='password' onChange={handlePasswordChange} required/>
                                            <input type="password" placeholder='Confirm Password...'  onChange={handleConfirmPasswordChange} required/>
                                            {!passwordsMatch && (
                                                <div className='passwordMatch' >Passwords do not match</div>
                                            )}
                                        </div>
                                        {/* <div className="infoDiv">
                                            <div className="rememberDiv">
                                                <input type="checkbox" />
                                                <span>Remember me</span>
                                            </div>
                                            <div className="forgetDiv">
                                                <Link>Forget Password?</Link>
                                            </div>
                                        </div> */}
                                        {!isLoading &&  <div className="loginButton">
                                            <button type='submit'>Sign Up</button>
                                        </div>}
                                        
                                        {isLoading &&  <p>Loading...</p>}
                              
                                        <div className='orDiv'>
                                            <p>or</p>
                                        </div>
                                        <div className="loginOther">
                                            <button>
                                                <img src={googleImg} alt="" />
                                                Google Sign In
                                            </button>
                                            <button>
                                                <i className="ri-facebook-fill"></i>
                                                Facebook Sign In
                                            </button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}
