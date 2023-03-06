import React from 'react'
import self from '../../assets/images/BookDoctor/self.png'
import parent from '../../assets/images/BookDoctor/parents.png'
import wife from '../../assets/images/BookDoctor/wife.png'
import { Link} from 'react-router-dom';
import { ROUTING } from '../../utils/routes';


export const BuyingFor = () => {

    return (
        <>
            <section>
                <div className="container">

                    <div className="mainBody">
                        <div className="mainBodyHeading">
                            <h1>
                                Who Are You <span>Buying</span> For?
                            </h1>
                        </div>
                        <div className="mainBodyInner">
                            <div className="row wrapper ">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" align="center">
                                    <Link to={ROUTING.OURPRODUCTS} className='radioButton'>
                                        <input type="radio" id="option0" name="LabBookedFor" value="self" />
                                        <label className="radio-button" htmlFor="option0">
                                            <div className="imgDiv">
                                                <img src={self} />
                                            </div>
                                            Self
                                        </label>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align="center">
                                    <Link   to={ROUTING.OURPRODUCTS} className='radioButton'>
                                        <input type="radio" id="option1" name="LabBookedFor" value="parents" />
                                        <label className="radio-button" htmlFor="option1">
                                            <div className="imgDiv">
                                                <img src={parent} />
                                            </div>
                                            Parents
                                        </label>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align="center"    >
                                    <Link  to={ROUTING.OURPRODUCTS} className='radioButton'>
                                        <input type="radio" id="option2" name="LabBookedFor" value="family" />
                                        <label className="radio-button" htmlFor="option2">
                                            <div className="imgDiv">
                                                <img src={wife} />
                                            </div>
                                            Family
                                        </label>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
