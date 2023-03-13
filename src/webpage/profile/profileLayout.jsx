import React from 'react'
import { Link, NavLink, Outlet, useMatch } from 'react-router-dom'
import { ROUTING } from '../../utils/routes'
import { Myprofile } from '../profile/profilePages/myprofile'


export const ProfileLayout = () => {
    const isMatch = useMatch("/:children");
    return (
        <>
            <main >
                <div className="profileMain">
                    <section className="profileBanner">
                        <div className="banner">
                            <div className="bannerInner">
                                <div className="bannerText">
                                    <div className="container">
                                        <div className="bannerInfo">
                                            <p><span>Profile</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section>
                        <div className="container">
                            <div className="profile">
                                <div className="profileSide">
                                    <ul>
                                        <li> <NavLink activeclassname="active" to={ROUTING.MYPROFILE} > Profile</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.BENEFICIARY}>Beneficiaries</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.PRESCIPTION} >Prescriptions</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.REPORT}>Reports</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.MY_INSURANCE}> Insurance</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.BILLING}>Billing</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.PAYMENT}>Payment</NavLink> </li>
                                        <li> <NavLink activeclassname="active" to={ROUTING.LOGOUT}>Logout</NavLink> </li>
                                    </ul>
                                </div>
                                <div className="profileBody">
                                    <div className="row gx-0"> {!!isMatch ? <Myprofile />  : <Outlet /> }</div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main >


        </>

    )
}
