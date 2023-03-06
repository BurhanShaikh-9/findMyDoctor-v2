import React, { useEffect } from 'react'
import headerLogo from '../../assets/images/headerLogo.png'
import { Link } from 'react-router-dom';
import { ROUTING } from '../../utils/routes';
import tokenService from '../../services/token.service'
import { useState } from 'react';
export const Header = (props) => {
    const { clearToken } = tokenService();
    // const [userLogged, setUserLogged] = useState(false)
    const [userToken, setUserToken] = useState(false);
    const [username, setUserName] = useState('')

    useEffect(() => {
        setUserName(props.userName)
        setUserToken(props.userLoggedIn)
    }, [username, userToken]);

    const handleSignOut = () => {

        clearToken();
    }



    return (
        <>
            <header>
                <div className="header">
                    <div className="container">
                        <div className="headerInner">
                            <div className="headerFirst">
                                <Link className='iconOutter' href='#'>
                                    <i className="ri-facebook-fill" />
                                </Link>
                                <Link className='iconOutter' href='#'>
                                    <i className="bi bi-twitter" />
                                </Link>
                                <Link className='iconOutter' href='#'>
                                    <i className="bi bi-youtube" />
                                </Link>
                                <Link className='iconOutter' href='#'>
                                    <i className="bi bi-instagram" />
                                </Link>


                            </div>
                            <div className="headerSecond">
                                <i className="bi bi-headset" />
                                <p>Call us for information (+11 222 333 44)</p>
                            </div>

                            {!userToken ?

                                <div className="headerThird">
                                    <Link to={ROUTING.LOGIN}>Login</Link>
                                    <Link to={ROUTING.SIGNUP}>Sign Up</Link>

                                </div>

                                :
                                <div className="userProfileDiv">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-user-line"></i> {username}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">User Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Settings</a></li>
                                            <li><button className="dropdown-item" onClick={handleSignOut}>Sign Out</button></li>
                                        </ul>
                                    </div>

                                </div>

                            }

                        </div>
                    </div>
                </div>
                <div className="mainHeader">
                    <div className="container headerContainer">
                        <div className="headerInner">
                            <Link className="" to={ROUTING.HOMEPAGE}> <img src={headerLogo} alt="Logo" /></Link>
                            <div className='menu'>
                                <div className="menuInner">
                                    <Link to={ROUTING.HOMEPAGE}>Home</Link>
                                    <Link to={ROUTING.INSURANCE}>Insure Karo</Link>
                                    <Link to={ROUTING.PHARMACY}>Pharmacy</Link>
                                    <Link href={ROUTING.BOOK_DOCTOR}>Consultation</Link>
                                    <Link href="#">About Us</Link>
                                    <Link href="#">Blog</Link>
                                    <Link to={ROUTING.CONTACT}>Contact Us</Link>
                                </div>
                                <div className="shoppingButton">
                                    <Link to={ROUTING.CART}> <i className="bi bi-cart"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar bg-body-tertiary mobileHeader">

                    <div className="container">
                        <Link className="navbar-brand" href="#"><img src={headerLogo} alt="Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={headerLogo} alt="Logo" /></h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                    {!userToken ?
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to={ROUTING.LOGIN}>Login</Link>
                                            <Link className="nav-link active" aria-current="page" to={ROUTING.LOGIN}>SignUp</Link>
                                        </li>
                                        :
                                        <li className="nav-item">
                                            <div className="userProfileDiv">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ri-user-line"></i> {username}
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#">User Profile</a></li>
                                                        <li><a className="dropdown-item" href="#">Settings</a></li>
                                                        <li><button className="dropdown-item" onClick={handleSignOut}>Sign Out</button></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </li>

                                    }
                                    <li className="nav-item">
                                        <Link className="nav-link active " aria-current="page" to={ROUTING.HOMEPAGE}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={ROUTING.INSURANCE}>Insure Karo</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={ROUTING.PHARMACY}>Pharmacy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Consultation</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={ROUTING.CART} >Cart</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
