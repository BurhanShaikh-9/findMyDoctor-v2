import React, {useState} from 'react'
import Abocal from "../../assets/images/Pharmacy/abocal.png"
import Abocran from "../../assets/images/Pharmacy/Abocran.png"
import Acefyl from "../../assets/images/Pharmacy/acefyl.png"
import Acefyl2 from "../../assets/images/Pharmacy/aceful2.png"
import Agp from '../../assets/images/Pharmacy/agp.png'
import Slider from "react-slick";

export const Brands = () => {
    const [settings, setSettings] = useState({
        dots: false,
    
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        // prevArrow: <button type="button" className="slick-prev">Previous</button>,
        // nextArrow: <button type="button" className="slick-next">Next</button>,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
    
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 380,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    return (
        <>
            <div className="brands">
                <div className="container">
                    <div className="productMain">
                        <div className="mainHeading">
                            <p> <span>Brands</span></p>
                        </div>
                        <div className="categoryCarousel">
                           
                            <div className="carousel">
                                <Slider {...settings}>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                            <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                    <div className='carouselItem'>
                                        <a href='#' className="inner">
                                        <img src={Agp} alt="" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                           

                        </div>
                        <div className="bestSellerBody">
                            <div className="productItems">
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocal} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocal Tab</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocran} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocran Sachet</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Cough Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl2} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Respiratory Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocal} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocal Tab</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocran} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocran Sachet</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Cough Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl2} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Respiratory Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocal} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocal Tab</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Abocran} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Abocran Sachet</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Cough Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                        <a href='#' className="card" >
                                            <img src={Acefyl2} />
                                            <div className="card-body">
                                                <div className="rating">
                                                    <div className="stars">
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star-fill "></i></span>
                                                        <span> <i className="bi bi-star "></i></span>
                                                    </div>
                                                    <div className="review">
                                                        <p>2 Reviews</p>
                                                    </div>
                                                </div>
                                                <h6 className="card-title">Acefyl Respiratory Syrup</h6>
                                                <p className="card-text">ABBOTT LABORATORIES</p>
                                                <div className="pricing">
                                                    <p className='price'>169.0 PKR</p>
                                                    <small><strike>197.00 PKR</strike></small>
                                                </div>
                                                <div className="sale">
                                                    <p>Sale</p>
                                                </div>
                                            </div>
                                        </a>
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
