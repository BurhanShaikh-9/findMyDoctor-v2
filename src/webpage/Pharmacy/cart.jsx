import React from 'react'
import { Link } from 'react-router-dom'
import {ROUTING} from '../../utils/routes'
import acefyl from '../../assets/images/Pharmacy/acefyl22.png'

export const Cart = () => {
    return (
        <>
            <div className="cart">
                <div className="container">
                    <div className="productMain">
                        <div className="mainHeading">
                            <p><span>Order</span>Now?</p>
                        </div>
                        <div className="cartBody">
                            <div className="cardInner">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="heading">
                                            <p className='yourOrder'>
                                                Your Order
                                            </p>
                                            <p className='total'>Total <span>1500 </span> </p>
                                        </div>
                                        <hr />
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="row g-3 listMain">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3" align="center">
                                                        <div className="image">
                                                            <img src={acefyl} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                        <div className="middle">
                                                            <p>Lorem ipsum dolor sit amet.</p>
                                                            <div className="rating">
                                                                <div className="stars">
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star "></i></span>
                                                                </div>
                                                                <div className="review">
                                                                    <p>4.0</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1" align="center">
                                                        <div className="quantity">
                                                            x1
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" align="center">
                                                        <div className="price">
                                                            500 PKR
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row g-3 listMain">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3" align="center">
                                                        <div className="image">
                                                            <img src={acefyl} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                                        <div className="middle">
                                                            <p>Lorem ipsum dolor sit amet.</p>
                                                            <div className="rating">
                                                                <div className="stars">
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star-fill "></i></span>
                                                                    <span> <i className="bi bi-star "></i></span>
                                                                </div>
                                                                <div className="review">
                                                                    <p>4.0</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-1 col-xl-1" align="center">
                                                        <div className="quantity">
                                                            x1
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2" align="center">
                                                        <div className="price">
                                                            500 PKR
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="buttonDiv">
                                            <Link to={ROUTING.CHECKOUT}>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
