import React, { useState } from 'react'
import Slider from "react-slick";
import Abocal from "../../assets/images/Pharmacy/abocal.png"
import Abocran from "../../assets/images/Pharmacy/Abocran.png"
import Acefyl from "../../assets/images/Pharmacy/acefyl.png"
import Acefyl2 from "../../assets/images/Pharmacy/aceful2.png"
import Agp from '../../assets/images/Pharmacy/agp.png'
import { Link } from 'react-router-dom';
import { ROUTING } from '../../utils/routes';
export const OurProducts = () => {

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
      <div className="ourProducts">
        <div className="container">
          <div className="productMain">
            <div className="mainHeading">
              <p>Our <span>Products</span></p>

              <hr />
            </div>

            <div className="productBody">
              <div className="categoryCarousel">
                <div className="startHeading">
                  <p>Categories</p>
                  <div class="subHeaderIcon">
                    <div class="search-box">
                      <button class="btn-search"> <i class="bi bi-search"></i></button>
                      <input type="text" class="input-search" placeholder="Type to Search..." />
                    </div>

                  </div>
                </div>
                <hr />
                <div className="carousel">
                  <Slider {...settings}>
                    <div className='carouselItem'>
                      <a href='#' className="inner acidity">
                        <span>Acidity</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner acne">
                        <span>Acne</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner babycare">
                        <span>Baby Care</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner baldness">
                        <span>Baldness</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner cancer">
                        <span>Cancer</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner derma">
                        <span>Derma</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner haircare">
                        <span>Hair Care</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner infer">
                        <span>Infertility</span>
                      </a>
                    </div>
                    <div className='carouselItem'>
                      <a href='#' className="inner malaria">
                        <span>Malaria</span>
                      </a>
                    </div>
                  </Slider>
                </div>
                <div className="viewButton">
                  <Link to={ROUTING.OUR_CATEGORIES}>View All</Link>
                </div>

              </div>
              <div className="bestSeller">
                <div className="startHeading">
                  <p>Best Seller</p>
                  <div className='viewButton'>
                    <Link to={ROUTING.BESTSELLER}>View All</Link>
                  </div>
                </div>
                <hr />
                <div className="productItems">
                  <div className="row">
                    <div className="col-lg-3 col-xxl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-lg-3 col-xxl-3">

                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-lg-3 col-xxl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-lg-3 col-xxl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brands">
                <div className="startHeading">
                  <p>Brands</p>
                  <div className='viewButton'>
                    <Link to={ROUTING.BRANDS}>View All</Link>
                  </div>
                </div>
                <hr />
                <div className="carousel">

                  <div className='carouselItem'>
                    <div className="inner">
                      <img src={Agp} alt="" />
                    </div>
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

                </div>


              </div>
              <div className="bestSeller">
                <div className="startHeading">
                  <p>Frequently Bought</p>
                  <div className='viewButton'>
                    <Link to={ROUTING.FREQUENTLY_BOUGHT}>View All</Link>
                  </div>
                </div>
                <hr />
                <div className="productItems">
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                      <Link to={ROUTING.PRODUCT_ITEM} className="card" >
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
                      </Link>
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
