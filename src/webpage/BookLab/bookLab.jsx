import React, { useRef, useState } from 'react'
import self from '../../assets/images/BookDoctor/self.png'
import parent from '../../assets/images/BookDoctor/parents.png'
import confirmTestImg from '../../assets/images/bookLab/confirmTest.png'
import darulSehatImg from '../../assets/images/bookLab/darulSehat.jpeg'
import harmoneLabImg from '../../assets/images/bookLab/harmoneLab.png'
import hussainiLabImg from '../../assets/images/bookLab/HussainiLab.png'
import minhajLabImg from '../../assets/images/bookLab/minhaj.jpg'
import family from '../../assets/images/BookDoctor/family.png'
import nmcLabImg from '../../assets/images/bookLab/nmc.png'
import onehealthLabImg from '../../assets/images/bookLab/onehealth.jpg'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import TimePicker from 'react-time-picker';
import { Greeting } from '../Component/greeting'

export const BookLab = () => {

    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);
    const buttonRef4 = useRef(null);
    const buttonRef5 = useRef(null);
    const buttonRef6 = useRef(null);
    // ref1
    const bookingForNext = (e) => {
        e.preventDefault();
        buttonRef1.current.style.display = 'none';
        // buttonRef1.current.style.transition = 'opacity 1s ease-in-out';
        buttonRef2.current.style.display = 'block';
    }
    // ref2
    const selectLocationBack = (e) => {
        e.preventDefault();
        buttonRef2.current.style.display = 'none';
        buttonRef1.current.style.display = 'block';
    }
    const selectLocationNext = e => {
        e.preventDefault();
        buttonRef2.current.style.display = 'none';
        buttonRef3.current.style.display = 'block';
    }
    // ref3
    const ChooseLabBack = (e) => {
        e.preventDefault();
        buttonRef3.current.style.display = 'none';
        buttonRef2.current.style.display = 'block';

    }
    const ChooseLabNext = (e) => {
        e.preventDefault();
        buttonRef3.current.style.display = 'none';
        buttonRef4.current.style.display = 'block';
    }
    // ref4
    const bookSlotBack = (e) => {
        e.preventDefault();
        buttonRef4.current.style.display = 'none';
        buttonRef3.current.style.display = 'block';
    }
    const bookSlotNext = (e) => {
        e.preventDefault();
        buttonRef4.current.style.display = 'none';
        buttonRef5.current.style.display = 'block';
    }
    // ref5
    const bookDetailsBack = (e) => {
        e.preventDefault();
        buttonRef5.current.style.display = 'none';
        buttonRef4.current.style.display = 'block';
    }
    const bookDetailsNext = (e) => {
        e.preventDefault();
        buttonRef5.current.style.display = 'none';
        buttonRef6.current.style.display = 'block';
    }
    const [settings, setSettings] = useState({
        dots: false,
        infinite: false,
        // className: "center",
        // centerMode: true,
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

    const [startDate, setStartDate] = useState(new Date());

    const [labBooking, setLabBooking] = useState({
        LabBookedFor: "",
        location: "gulshaneiqbal",
        labName: "",
        receiptName: "",
        promoCodeLab: "",
        address: "",
    });
    const getLabInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        setLabBooking({ ...labBooking, [name]: value })

    }
    const formSubmit = e => {
        e.preventDefault();
        bookDetailsNext(e);
        const BookLabVar = { ...labBooking, testType, BookingDate, labTime }
        console.log(BookLabVar);
    }

    // date and time input Select
    const formatDate = date => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    };
    const BookingDate = formatDate(startDate)
    const [labTime, setLabTime] = useState('00:00');

    // lab Test Select Visible
    const [isVisible, setIsVisible] = useState(false);
    const visibleLabTest = () => {
        setIsVisible(true);
    };

    // testSelect Code
    const [testType, setTestType] = useState([]);
    const handleSelect = (event) => {
        if (!testType.includes(event.target.value)) {
            setTestType([...testType, event.target.value]);
        }
    }
    const handleRemove = (item) => {
        const newValues = testType.filter(val => val !== item);
        setTestType(newValues);
  
    }

    return (
        <>
            <main >
                <form className="bookLab" onSubmit={formSubmit}>
                    <section className="bookDoctorBanner">
                        <div className="banner">
                            <div className="bannerInner">
                                <div className="bannerText">
                                    <div className="container">
                                        <div className="bannerInfo">
                                            <p>Book A <span>Lab</span>  </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="switchDiv firstSwitchDiv" ref={buttonRef1}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Who Are You <span>Booking</span> For?
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4" align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="option0" name="LabBookedFor" value="self" onChange={getLabInput} />
                                                    <label className="radio-button" htmlFor="option0">
                                                        <div className="imgDiv">
                                                            <img src={self} />
                                                        </div>
                                                        Self
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="option1" name="LabBookedFor" value="parents" onChange={getLabInput} />
                                                    <label className="radio-button" htmlFor="option1">
                                                        <div className="imgDiv">
                                                            <img src={parent} />
                                                        </div>
                                                        Parents
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 " align="center"    >
                                                <div className='radioButton'>
                                                    <input type="radio" id="option2" name="LabBookedFor" value="family" onChange={getLabInput} />
                                                    <label className="radio-button" htmlFor="option2">
                                                        <div className="imgDiv">
                                                            <img src={family} />
                                                        </div>
                                                        Family
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="pagging">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="progressBar">
                                            <label htmlFor="pageProgress">1 of 5 answered</label>
                                            <progress min="0" max="50" value="10" id='pageProgress' />
                                        </div>
                                        <div className="buttons">

                                            <button href="#" className='nextButton' onClick={bookingForNext} disabled={!labBooking.LabBookedFor}><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef2}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Select <span>Location</span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
                                                <div className='radioButton'>
                                                    <label htmlFor="selectLocation" className='chooseLocationClass'>Choose Your Location</label>
                                                    <select id="selectLocation" name="location" onChange={getLabInput}>
                                                        <option value="gulshaneiqbal">Gulshan-e-Iqbal</option>
                                                        <option value="scheme33">Scheme-33</option>
                                                        <option value="shahrahefaisal">Shahrah-e-Faisal</option>
                                                        <option value="dha">DHA</option>
                                                    </select>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="pagging">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="progressBar">
                                            <label htmlFor="pageProgress">2 of 5 answered</label>
                                            <progress min="0" max="50" value="20" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={selectLocationBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={selectLocationNext} disabled={!labBooking.location}><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef3}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Choose Your <span> Lab</span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">

                                                <div className="LabCarousel">
                                                    <div className="LabCarouselInner">
                                                        <Slider {...settings}>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='darulSehatId' value="darulSehat" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor='darulSehatId' onClick={visibleLabTest}>
                                                                        <img src={darulSehatImg} alt="" />
                                                                    </label>

                                                                </div>
                                                            </div>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='harmoneLabId' value="harmoneLab" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor='harmoneLabId' onClick={visibleLabTest}>
                                                                        <img src={harmoneLabImg} alt="" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='hussainiLabId' value="hussainiLab" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor="hussainiLabId" onClick={visibleLabTest}>
                                                                        <img src={hussainiLabImg} alt="" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='minhajLabId' value="minhajLab" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor='minhajLabId' onClick={visibleLabTest}>
                                                                        <img src={minhajLabImg} alt="" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='nmcLabId' value="nmcLab" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor='nmcLabId' onClick={visibleLabTest}>
                                                                        <img src={nmcLabImg} alt="" />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='carouselItem'>
                                                                <div className='carouselItemInner'>
                                                                    <input type="radio" id='onehealthLabId' value="nmcLab" name='labName' onChange={getLabInput} />
                                                                    <label className='imgOuter' htmlFor='onehealthLabId' onClick={visibleLabTest}>
                                                                        <img src={onehealthLabImg} alt="" />
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </Slider>
                                                    </div>

                                                </div>
                                            </div>
                                            {isVisible &&
                                                <>

                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
                                                        <div className='radioButton'>
                                                            <label htmlFor="chooseTest" className='chooseLabClass'>Choose Test</label>
                                                            <select name="" id="chooseTest" onChange={handleSelect}>
                                                                <option disabled selected defaultChecked value>Select Your Test</option>
                                                                <option value="liverTest">Liver Function Test</option>
                                                                <option value="insomnia">Insomnia</option>
                                                                <option value="adhd">ADHD</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {!testType.length <= 0 &&
                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
                                                            <div className='radioButton'>

                                                                <label htmlFor="chooseTest" className='chooseLabClass'>Selected Test</label>
                                                                <ul className="list-group">

                                                                    {
                                                                        testType.map((items, key) => (
                                                                            <li key={key}  className="list-group-item">
                                                                                <p>{items} <button onClick={() => handleRemove(items)}>X</button></p>

                                                                            </li>
                                                                        )
                                                                        )
                                                                    }


                                                                </ul>
                                                            </div>
                                                        </div>
                                                    }
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="pagging">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="progressBar">
                                            <label htmlFor="pageProgress">3 of 5 answered</label>
                                            <progress min="0" max="50" value="30" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={ChooseLabBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' type="button" data-bs-toggle="modal" data-bs-target={labBooking.labName !== '' && testType.length !== 0 ? '#modal1' : null} disabled={!labBooking.labName || testType.length <= 0}><i className="bi bi-arrow-right"></i></button>
                                            {/* Modal Start */}
                                            <div className="modal fade" id="modal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="header">
                                                            <p> <span>Confirm</span> Test </p>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">

                                                            <img src={confirmTestImg} alt="" />
                                                        </div>
                                                        <div className="ButtonFooter">
                                                            <button type="button" data-bs-dismiss="modal" onClick={ChooseLabNext}>Confirm</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Modal End */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef4}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Book <span>Slot </span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
                                                <div className='selectDateTimePicker '>

                                                    <DatePicker
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        inline
                                                    />

                                                    <div className='TimePickerDiv'> <TimePicker onChange={setLabTime} value={labTime} /></div>
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Enter Time</label>
                                                    <input type="time" id='selectTimeId' className='selectDateTimeInput' />


                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="pagging">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="progressBar">
                                            <label htmlFor="pageProgress">4 of 5 answered</label>
                                            <progress min="0" max="50" value="40" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={bookSlotBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={bookSlotNext} ><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef5}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            <span>Booking </span>Details
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectDateId" className='selectDateTimeLabel'> Date & Time</label>
                                                    <p>{BookingDate} - {labTime}</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Receipt</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Your Name...' name='receiptName' onChange={getLabInput} required/>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Cost</label>
                                                    <p>450 Rs</p>
                                                </div>
                                            </div>


                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Promo Code</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Promo Code...' name='promoCodeLab' onChange={getLabInput}  />
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Address</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Your Address...' name='address' onChange={getLabInput}  required/>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " >
                                                <div className='appointmentButton '>
                                                    <button className="done" type='submit' >
                                                        Done
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="pagging">
                                <div className="container">
                                    <div className="wrapper">
                                        <div className="progressBar">
                                            <label htmlFor="pageProgress">5 of 5 answered</label>
                                            <progress min="0" max="50" value="50" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={bookDetailsBack}><i className="bi bi-arrow-left"></i></button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef6}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <Greeting />
                                </div>
                            </div>
                        </section>
                    </div>
                </form>
            </main >


        </>
    )
}
