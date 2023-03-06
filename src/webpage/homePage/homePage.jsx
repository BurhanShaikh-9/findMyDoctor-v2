import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ROUTING } from '../../utils/routes'
import CountUp from "react-countup";
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import docImg from '../../assets/images/homepage/backgroundDoctor.png'
import bookDocImg from '../../assets/images/homepage/bookDoctor.png'
import bookLabImg from '../../assets/images/homepage/bookLab.png'
import bookCovidImg from '../../assets/images/homepage/sehatcard.png'
import bookPharmImg from '../../assets/images/homepage/bookPharm.png'
import aboutImg from '../../assets/images/homepage/aboutPic0.png'
import bubbleOne from '../../assets/images/homepage/bubble01.png'
import bubbleTwo from '../../assets/images/homepage/bubble02.png'
import bubbleThree from '../../assets/images/homepage/bubble03.png'
import bubbleFour from '../../assets/images/homepage/bubble04.png'
import newsImage from '../../assets/images/homepage/aboutUs.png'
import CommaImg from '../../assets/images/homepage/comma.png'
import StarImg from '../../assets/images/homepage/fiveStars.png'
import techJuiceImg from '../../assets/images/homepage/fmdNews/2.png'
import samaaImg from '../../assets/images/homepage/fmdNews/6.png'
import tImg from '../../assets/images/homepage/fmdNews/4.png'
import mashionImg from '../../assets/images/homepage/fmdNews/3.png'
import proImg from '../../assets/images/homepage/fmdNews/5.png'
import geoImg from '../../assets/images/homepage/fmdNews/1.png'
import client1 from '../../assets/images/homepage/fmdClients/1.png'
import client2 from '../../assets/images/homepage/fmdClients/2.png'
import client3 from '../../assets/images/homepage/fmdClients/3.png'
import client4 from '../../assets/images/homepage/fmdClients/4.png'
import client5 from '../../assets/images/homepage/fmdClients/5.png'
import client6 from '../../assets/images/homepage/fmdClients/6.png'
export const HomePage = () => {

    const [partnerShipCount, setPartnerShipCount] = useState(0);
    const [partnerShipEnd, setPartnerShipEnd] = useState(60000);
    useEffect(() => {
        setPartnerShipCount(0);
        setPartnerShipEnd(60000);
    }, []);

    const [thirdCount, setThirdCount] = useState(0);
    const [thirdCountEnd, setThirdCountEnd] = useState(70);
    useEffect(() => {
        setThirdCount(0);
        setThirdCountEnd(70);
    }, []);

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(90000);
    useEffect(() => {
        setStart(0);
        setEnd(90000);
    }, []);
    const [isVisible, setIsVisible] = useState(false);

    window.onscroll = function () {
        // service Section Scroll Animation
        let box = document.querySelector(".servicesMain");
        let position = box.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 2;

        let box2 = document.querySelector(".servicesmainHeading");


        if (position < screenPosition) {
            box.classList.add("active");
            box2.classList.add("activeHeading")
        }
        else {
            box.classList.remove("active");
            box2.classList.remove("activeHeading")
        }
    }

    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    return (
        <>
            <main>
                <div className="homePage">

                    <div className="homePageInner">
                        <section>
                            <div className="banner">
                                <div className="bannerInner">
                                    <div className="bannerText">
                                        <div className="container">
                                            <div className="bannerInfo">
                                                <div className='bannerPara'>
                                                    <div className='succButton'>
                                                        <i className="bi bi-shield-fill-check"></i>
                                                        <p>Success Rates</p>
                                                    </div>
                                                    <p className='Primary'>Primary</p>
                                                    <p className='Health'>Health<span>Care</span> </p>
                                                    <p className='Service'>Services <span>At</span> </p>
                                                    <p className='Home'>Your Home</p>
                                                    <div className='bookButtonOuter'>
                                                    <Link className='bookButton' to={ROUTING.BOOK_DOCTOR}>
                                                            <div className="circle"></div>
                                                            <p>Book Now</p>

                                                        </Link>
                                                    </div>

                                                </div>
                                                <div className='doctorImage'>
                                                    <img src={docImg} alt="doctor" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="container serviceContainer">
                                <div className='servicesmainHeading'>
                                    <p>
                                        OUR <span>SERVICES</span>
                                    </p>
                                </div>
                                <div className="servicesMain">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 cardsCenterMob">
                                            <div className="card redCard">

                                                <div className="card-body">
                                                    <div className="serviceBody">
                                                        <div className="cardImage">
                                                            <img src={bookDocImg} alt="bookDoctor" />
                                                        </div>
                                                        <div className="para">
                                                            <p className='cardHeading'>BOOK DOCTOR</p>
                                                            <p className='cardPara'>I need to arrange Link Doctor</p>
                                                        </div>
                                                        <div className="cardButton">
                                                            <Link to={ROUTING.BOOK_DOCTOR}>
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 cardsCenterMob">
                                            <div className="card blackCard">

                                                <div className="card-body">
                                                    <div className="serviceBody">
                                                        <div className="cardImage">
                                                            <img src={bookLabImg} alt="bookDoctor" />
                                                        </div>
                                                        <div className="para">
                                                            <p className='cardHeading'>BOOK A LAB</p>
                                                            <p className='cardPara'>Book Link lab test</p>
                                                        </div>
                                                        <div className="cardButton">
                                                            <Link to={ROUTING.BOOK_LAB}>
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 cardsCenterMob">
                                            <div className="card redCard">

                                                <div className="card-body">
                                                    <div className="serviceBody">
                                                        <div className="cardImage">
                                                            <img src={bookCovidImg} alt="bookDoctor" />
                                                        </div>
                                                        <div className="para">
                                                            <p className='cardHeading'>SEHAT CARD</p>
                                                            <p className='cardPara'>Buy health Insurance</p>
                                                        </div>
                                                        <div className="cardButton">
                                                            <Link href="#">
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 cardsCenterMob">
                                            <div className="card blackCard">

                                                <div className="card-body">
                                                    <div className="serviceBody">
                                                        <div className="cardImage">
                                                            <img src={bookPharmImg} alt="bookDoctor" />
                                                        </div>
                                                        <div className="para">
                                                            <p className='cardHeading'>PHARMACY</p>
                                                            <p className='cardPara'>I need to order my medicines.</p>
                                                        </div>
                                                        <div className="cardButton">
                                                            <Link to={ROUTING.PHARMACY}>
                                                                Book Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <div className="aboutUs">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <div className="aboutPicOutter">
                                                <img src={aboutImg} alt="" />

                                                {/* <div className="aboutPictures">
                                                    <div className="imageCircle">

                                                        <img src={circle} alt="" />
                                                    </div>
                                                    <div className="image1">
                                                        <img src={aboutPicOne} alt="" />
                                                    </div>
                                                    <div className="image2">
                                                        <img src={aboutPicTwo} alt="" />
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <div className="aboutPara">
                                                <div className="heading">
                                                    <p>Who</p>
                                                    <p className='colored'>We</p>
                                                    <p>Are</p>
                                                </div>
                                                <div className="heading2">
                                                    <p>Growing towards Link <span>better</span>  and <span>healthier future</span>  for everyone</p>
                                                </div>
                                                <div className="paragraph">
                                                    <p>
                                                        LoWe are Link healthcare startup established in 2016; with technology that is acting as Link bridge between PMC verified doctors, trusted and leading laboratories and patients. Our basic purpose is to provide better healthcare facilities for your utmost comfort.We want to make healthcare trusted, reliable and convenient. Healthcare is Link very essential sector all over the world, however it has sadly been neglected in Pakistan over the years. It is also one of the world's largest and fastest-growing industries. We are here to make Link difference and thrive in beneficial ways which will hopefully serve not only us, but all future generations.
                                                    </p>
                                                </div>
                                                <div className="aboutButton">
                                                    <Link href="#">
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <VisibilitySensor
                            onChange={(visibility) => setIsVisible(visibility)}
                            active={!isVisible}
                        >
                            <section className='employeeSection'>
                                <div className="container">
                                    <div className="employee">
                                        <div className="employeeAbout">
                                            <div className='employeeText'>
                                                <p className='heading'>For Employers</p>
                                                <p>If you're looking to hire workers in Link career at home, hire Link job
                                                    interview counselor, hiring manager, and other help.</p>
                                            </div>
                                            <div className='employeeContactButton'>
                                                <Link href="#">Contact Us</Link>
                                            </div>
                                        </div>
                                        <div className="employeeBubbleDiv">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                                    <div className="bubbleOuter">
                                                        <div className="bubble">
                                                            <div className="bubbleImage">
                                                                <img src={bubbleOne} alt="" />
                                                            </div>
                                                            <p className='heading bubbleHeading'  > {isVisible ? <CountUp start={start} end={end} duration={2} /> : "0"}+</p>

                                                            <p>Checkups <br /> and Lab Tests</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                                    <div className="bubbleOuter">
                                                        <div className="bubble">
                                                            <div className="bubbleImage2">
                                                                <img src={bubbleTwo} alt="" />
                                                            </div>
                                                            <p className='heading bubbleHeading'> {isVisible ? <CountUp start={partnerShipCount} end={partnerShipEnd} duration={2} /> : "0"} +</p>
                                                            <p>Satisfied <br /> Customer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                                    <div className="bubbleOuter">
                                                        <div className="bubble">
                                                            <div className="bubbleImage">
                                                                <img src={bubbleThree} alt="" />
                                                            </div>
                                                            <p className='heading bubbleHeading'>{isVisible ? <CountUp start={thirdCount} end={thirdCountEnd} duration={2} /> : "0"}+</p>
                                                            <p>Partnership & <br /> Collaborations</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
                                                    <div className="bubbleOuter">
                                                        <div className="bubble">
                                                            <div className="bubbleImage1">
                                                                <img src={bubbleFour} alt="" />
                                                            </div>
                                                            <p className='heading bubbleHeading'>{isVisible ? <CountUp start={thirdCount} end={thirdCountEnd} duration={2} /> : "0"}+</p>
                                                            <p>Professionals <br /> Doctor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </VisibilitySensor>
                        <section>
                            <div className="container">
                                <div className="aboutUs">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <div className="aboutPicOutter">
                                                <div className="aboutPictures">
                                                    <div className="newsImage">
                                                        <img src={newsImage} alt="" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <div className="aboutPara">
                                                <div className="heading1">
                                                    <p>What They Are Talikng <span>About Us</span></p>
                                                </div>

                                                <div className="newsCard">
                                                    <div className="card">

                                                        <div className="card-body">
                                                            <div className="serviceBody">

                                                                <div className="para">
                                                                    <p className='cardHeading'>You're in Good Hands!</p>
                                                                    <p className='cardPara'>Promptly Responded, Outstanding service! It was much convenient especially in this Corona Amidst I’ve booked Link General Physicians visit & doctor was at our door on time sharply. Highly Recommended!</p>
                                                                </div>
                                                                <div className='userReviewOuter'>
                                                                    <div className='userReview'>
                                                                        <p className='cardHeading'>Usama Aslam</p>
                                                                        <p className='cardPara'>Our Customer</p>
                                                                    </div>
                                                                    <div className='rightSide'>
                                                                        <img src={CommaImg} alt="" />
                                                                        <Link href="#">
                                                                            <img src={StarImg} alt="" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <div className="newsCarousel">
                                    <div className="CarouselHeading">
                                        <p> Find My Doctor In <span>News</span></p>
                                    </div>
                                    <div className="carouselDiv">
                                        <div className="carouselInner">
                                            <Slider {...settings}>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>

                                                        <img src={samaaImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>
                                                        <img src={techJuiceImg} alt="" />
                                                    </div>
                                                </div>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>
                                                        <img src={tImg} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>
                                                        <img src={mashionImg} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>
                                                        <img src={proImg} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner'>
                                                        <img src={geoImg} alt="" />
                                                    </div>

                                                </div>
                                            </Slider>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='hiringSection'>
                            <div className="container">
                                <div className="hiringAbout">
                                    <div className='hiringText'>
                                        <p className='heading'>We are  <span>Hiring</span></p>
                                        <p>We are seeking Link highly skilled and compassionate doctor to join our
                                            healthcare team and provide exceptional medical care to our patients.</p>
                                    </div>
                                    <div className='hiringContactButton'>
                                        <Link href="#">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="container">
                                <div className="newsCarousel">
                                    <div className="CarouselHeading">
                                        <p> Our <span>Clients</span></p>
                                    </div>
                                    <div className="carouselDiv">
                                        <div className="carouselInner">
                                            <Slider {...settings}>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>

                                                        <img src={client1} alt="" />
                                                    </div>
                                                </div>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>
                                                        <img src={client2} alt="" />
                                                    </div>
                                                </div>
                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>
                                                        <img src={client3} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>
                                                        <img src={client4} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>
                                                        <img src={client5} alt="" />
                                                    </div>

                                                </div>

                                                <div className='carouselItem'>
                                                    <div className='carouselItemInner1'>
                                                        <img src={client6} alt="" />
                                                    </div>

                                                </div>
                                            </Slider>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
        </>
    )
}
