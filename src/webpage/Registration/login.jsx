import React, { useState } from 'react'
import LoginImg from '../../assets/images/registration/login1.png'
import googleImg from '../../assets/images/registration/google.png'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../../services/auth.service'
import { Loading } from '../Component/loading';
import { ROUTING } from '../../utils/routes';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login'

export const Login = () => {
    const { handleLogin, onSuccessLogin } = AuthService();
    const [isLoading, setIsLoading] = useState(false)


    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const getLoginInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value })
    }
    const formSubmit = e => {
        e.preventDefault();
        const loginData = { ...login }
        console.log(loginData)
        setIsLoading(true);
        handleLogin(loginData).then((res) => {
            console.log(res, 'responseLogin')
            onSuccessLogin(res);
        }).catch((err) => {
            console.log(err, "loginResponseErr")
        }).finally(() => {
            setIsLoading(false)
            // window.location.href = ROUTING.HOMEPAGE;
        })
    }



    return (
        <>
            {isLoading && <Loading />}
            {!isLoading &&
                <main >
                    <div className="loginForm">
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        <section className="loginBanner">
                            <div className="banner">
                                <div className="bannerInner">
                                    <div className="bannerText">
                                        <div className="container">
                                            <div className="bannerInfo">
                                                <p><span>Log In</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <div className="login">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" align="center">
                                        <form className="loginMain" onSubmit={formSubmit}>
                                            <div className="heading">
                                                <p>Log In</p><small>Don't have an account? <Link to={ROUTING.SIGNUP}>Sign Up</Link> </small>
                                            </div>
                                            <div className="loginInputFields">
                                                <input type="email" placeholder='Email...' name='email' onChange={getLoginInput} required />
                                            </div>
                                            <div className="loginInputFields">
                                                <input type="password" placeholder='Password...' name='password' onChange={getLoginInput} required />
                                            </div>
                                            <div className="infoDiv">
                                                <div className="rememberDiv">
                                                    <input type="checkbox" />
                                                    <span>Remember me</span>
                                                </div>
                                                <div className="forgetDiv">
                                                    <Link>Forget Password?</Link>
                                                </div>
                                            </div>
                                            <div className="loginButton">
                                                <button type='submit'>Log In</button>
                                            </div>
                                            <div className='orDiv'>
                                                <p>or</p>
                                            </div>
                                            <div className="loginOther">
                                                {/* <button>
                                                <img src={googleImg} alt="" />
                                                Google Sign In
                                            </button> */}

                                                <LoginSocialGoogle
                                                    client_id={"792328529943-tl3hbpbafbj7g16s89rb2e3p5kgg9c65.apps.googleusercontent.com"}
                                                    scope="openid profile email"
                                                    discoveryDocs="claims_supported"
                                                    access_type="offline"
                                                    onResolve={({ provider, data }) => {
                                                        console.log(provider, data);
                                                    }}
                                                    onReject={(err) => {
                                                        console.log(err);
                                                    }}
                                                >
                                                    <GoogleLoginButton />
                                                </LoginSocialGoogle>

                                                {/* <button>
                                                    <i className="ri-facebook-fill"></i>
                                                    Facebook Sign In
                                                </button> */}

                                                {/* <LoginSocialFacebook
                                                    appId="878914386520193"
                                                    onResolve={({ response }) => {
                                                        console.log(response);
                                                    }}
                                                    onReject={(error) => {
                                                        console.log(error);
                                                    }}
                                                >
                                                    <FacebookLoginButton/>
                                                </LoginSocialFacebook> */}


                                                {/* <LoginSocialFacebook
                                                    isOnlyGetToken
                                                    appId={'878914386520193'}
                                                    onResolve={({ provider, data }) => {
                                                        console.log(provider, data);
                                                    }}
                                                    onReject={(err) => {
                                                        console.log(err)
                                                    }}
                                                >
                                                    <FacebookLoginButton />
                                                </LoginSocialFacebook> */}
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                        <div className="sideImageDiv">
                                            <img src={LoginImg} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main >
            }
        </>
    )
}