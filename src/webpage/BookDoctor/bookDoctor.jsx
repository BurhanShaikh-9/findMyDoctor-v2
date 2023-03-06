import React, { useRef, useState } from 'react'
import self from '../../assets/images/BookDoctor/self.png'
import parent from '../../assets/images/BookDoctor/parents.png'
import online from '../../assets/images/BookDoctor/online.png'
import physical from '../../assets/images/BookDoctor/physical.png'
import physician from '../../assets/images/BookDoctor/physician.png'
import physio from '../../assets/images/BookDoctor/physio.png'
import nurse from '../../assets/images/BookDoctor/nurse.png'
import heart from '../../assets/images/BookDoctor/heart.png'
import kidney from '../../assets/images/BookDoctor/kidney.png'
import ortho from '../../assets/images/BookDoctor/ortho.png'
import eye from '../../assets/images/BookDoctor/eye.png'
import dentist from '../../assets/images/BookDoctor/dentist.png'
import ent from '../../assets/images/BookDoctor/ent.png'
import psychi from '../../assets/images/BookDoctor/psychi.png'
import nutri from '../../assets/images/BookDoctor/nutri.png'
import doctorPfp from '../../assets/images/BookDoctor/doctorPfp.png'
import family from '../../assets/images/BookDoctor/family.png'
import verified from '../../assets/images/BookDoctor/verified.png'
import DatePicker from "react-datepicker";
import { Greeting } from '../Component/greeting';
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
export const BookDoctor = () => {

    const buttonRef1 = useRef(null);
    const buttonRef2 = useRef(null);
    const buttonRef3 = useRef(null);
    const buttonRef4 = useRef(null);
    const buttonRef5 = useRef(null);
    const buttonRef6 = useRef(null);
    const buttonRef7 = useRef(null);
    const buttonRef8 = useRef(null);
    const buttonRef9 = useRef(null);
    // ref1
    const bookingForNext = (e) => {
        e.preventDefault();

        if (!doctorBooking.bookedFor) {
            alert('Kindly choose who are you booking for')
        } else {
            buttonRef1.current.style.display = 'none';
            buttonRef2.current.style.display = 'block';
        }
    }
    // ref2
    const AppointmentTypeBack = (e) => {
        buttonRef2.current.style.display = 'none';
        buttonRef1.current.style.display = 'block';
        e.preventDefault();
    }
    const AppointmentTypeNext = (e) => {
        buttonRef2.current.style.display = 'none';
        if (doctorBooking.typeOfAppointment === "physical") {
            buttonRef3.current.style.display = 'block';
            console.log('condition is running');
        }
        else {
            buttonRef4.current.style.display = 'block';
            console.log('condition is running else');
        }
        e.preventDefault();
    }
    // ref3
    const DoctorTypeBack = (e) => {
        buttonRef3.current.style.display = 'none';
        buttonRef2.current.style.display = 'block';
        e.preventDefault();
    }
    const DoctorTypeNext = (e) => {
        e.preventDefault();
        buttonRef3.current.style.display = 'none';
        buttonRef5.current.style.display = 'block';
    }
    // ref4
    const specialistBack = (e) => {
        buttonRef4.current.style.display = 'none';
        buttonRef2.current.style.display = 'block';
        e.preventDefault();
    }
    const specialistNext = (e) => {
        e.preventDefault();
        buttonRef4.current.style.display = 'none';
        buttonRef5.current.style.display = 'block';
    }
    // ref5
    const specialistBack2 = (e) => {
        e.preventDefault();
        buttonRef5.current.style.display = 'none';
        buttonRef4.current.style.display = 'block';
    }
    const specialistNext2 = (e) => {
        e.preventDefault();
        buttonRef5.current.style.display = 'none';
        buttonRef6.current.style.display = 'block';
    }
    // ref6
    const dateTimeBack = (e) => {
        e.preventDefault();
        buttonRef6.current.style.display = 'none';
        buttonRef5.current.style.display = 'block';
    }
    const dateTimeNext = (e) => {
        e.preventDefault();
        buttonRef6.current.style.display = 'none';
        buttonRef7.current.style.display = 'block';
    }
    // ref7
    const confirmBack = (e) => {
        e.preventDefault();
        buttonRef7.current.style.display = 'none';
        buttonRef6.current.style.display = 'block';
    }
    const confirmNext = (e) => {
        e.preventDefault();
        buttonRef7.current.style.display = 'none';
        buttonRef8.current.style.display = 'block';
    }
    // ref8
    const appointmentSuccBack = (e) => {
        e.preventDefault();
        buttonRef8.current.style.display = 'none';
        buttonRef7.current.style.display = 'block';
    }
    const appointmentSuccNext = (e) => {
        e.preventDefault();
        buttonRef8.current.style.display = 'none';
        buttonRef9.current.style.display = 'block';
    }

    const [bookDate, setBookDate] = useState(new Date());

    const [doctorBooking, setDoctorBooking] = useState(
        {
            bookedFor: "",
            typeOfAppointment: "",
            doctorType: "",
            specialistDoctor: "",
            bookedDoctorId: "",
            recipient: "",
            paymentMethod: "Cash",
            cardNumber: "",
            promoCode: "",
        }
    )


    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDoctorBooking({ ...doctorBooking, [name]: value })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        appointmentSuccNext(e);
        const BookDoctorVar = { ...doctorBooking, BookingDate, labTime }
        console.log(BookDoctorVar);
    }

    const formatDate = date => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    };


    const BookingDate = formatDate(bookDate)
    const [labTime, setLabTime] = useState('00:00');
    return (
        <>
            <main >
                <form className="bookDoctor" onSubmit={formSubmit}>
                    <section className="bookDoctorBanner">
                        <div className="banner">
                            <div className="bannerInner">
                                <div className="bannerText">
                                    <div className="container">
                                        <div className="bannerInfo">
                                            <p><span>Book</span> A  Doctor </p>
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
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align='center'>
                                                <div className='radioButton'>
                                                    <input type="radio" id="option0" name="bookedFor" value="self" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="option0">
                                                        <div className="imgDiv">
                                                            <img src={self} />
                                                        </div>
                                                        Self
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align='center'>
                                                <div className='radioButton'>
                                                    <input type="radio" id="option1" name="bookedFor" value="parent" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="option1">
                                                        <div className="imgDiv">
                                                            <img src={parent} />
                                                        </div>
                                                        Parents
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align='center'>
                                                <div className='radioButton'>
                                                    <input type="radio" id="option2" name="bookedFor" value="family" onChange={getInput} />
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
                                            <label htmlFor="pageProgress">1 of 8 answered</label>
                                            <progress min="0" max="80" value="10" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='nextButton' onClick={bookingForNext} disabled={!doctorBooking.bookedFor}><i className="bi bi-arrow-right"></i></button>
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
                                            <span>Appointment</span> Type
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="onlineId" name="typeOfAppointment" value="online" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="onlineId">
                                                        <div className="imgDiv">
                                                            <img src={online} />
                                                        </div>
                                                        Online
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="physicalId" name="typeOfAppointment" value="physical" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="physicalId">
                                                        <div className="imgDiv">
                                                            <img src={physical} />
                                                        </div>
                                                        Physical Visit
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
                                            <label htmlFor="pageProgress">2 of 8 answered</label>
                                            <progress min="0" max="80" value="20" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={AppointmentTypeBack} ><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={AppointmentTypeNext} disabled={!doctorBooking.typeOfAppointment}><i className="bi bi-arrow-right"></i></button>
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
                                            Type of <span> Doctors</span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="generalId" name="doctorType" value=" GeneralPhysician" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="generalId">
                                                        <div className="imgDiv">
                                                            <img src={physician} />
                                                        </div>
                                                        General Physician
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="physioId" name="doctorType" value="physiotherapist" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="physioId">
                                                        <div className="imgDiv">
                                                            <img src={physio} />
                                                        </div>
                                                        Physiotherapist
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="nurseId" name="doctorType" value="nurse" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="nurseId">
                                                        <div className="imgDiv">
                                                            <img src={nurse} />
                                                        </div>
                                                        Get A Nurse
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
                                            <label htmlFor="pageProgress">3 of 8 answered</label>
                                            <progress min="0" max="80" value="30" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={DoctorTypeBack}  ><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={DoctorTypeNext} disabled={!doctorBooking.doctorType}><i className="bi bi-arrow-right"></i></button>
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
                                            Specialist <span>Doctors </span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="heartId" name="specialistDoctor" value="Heart" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="heartId">
                                                        <div className="imgDiv">
                                                            <img src={heart} />
                                                        </div>
                                                        Heart
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="kidneyId" name="specialistDoctor" value="Kidney" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="kidneyId">
                                                        <div className="imgDiv">
                                                            <img src={kidney} />
                                                        </div>
                                                        Kidney
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="orthoId" name="specialistDoctor" value="orthopedist" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="orthoId">
                                                        <div className="imgDiv">
                                                            <img src={ortho} />
                                                        </div>
                                                        Orthopedist
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="eyeId" name="specialistDoctor" value="Eye" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="eyeId">
                                                        <div className="imgDiv">
                                                            <img src={eye} />
                                                        </div>
                                                        Eye
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="dentistId" name="specialistDoctor" value="Dentist" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="dentistId">
                                                        <div className="imgDiv">
                                                            <img src={dentist} />
                                                        </div>
                                                        Dentist
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="entId" name="specialistDoctor" value="ENT" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="entId">
                                                        <div className="imgDiv">
                                                            <img src={ent} />
                                                        </div>
                                                        ENT
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="psychiId" name="specialistDoctor" value="psychiatrist" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="psychiId">
                                                        <div className="imgDiv">
                                                            <img src={psychi} />
                                                        </div>
                                                        Psychiatrist
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton'>
                                                    <input type="radio" id="nutriId" name="specialistDoctor" value="Nutritionist" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="nutriId">
                                                        <div className="imgDiv">
                                                            <img src={nutri} />
                                                        </div>
                                                        Nutritionist
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
                                            <label htmlFor="pageProgress">4 of 8 answered</label>
                                            <progress min="0" max="80" value="40" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={specialistBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={specialistNext} disabled={!doctorBooking.specialistDoctor}><i className="bi bi-arrow-right"></i></button>
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
                                            Specialist <span>Doctors </span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton selectDocDiv'>
                                                    <input type="radio" id="doc1" name="bookedDoctorId" value="1" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="doc1">
                                                        <div className="imgDiv">
                                                            <img className="selectDoc" src={doctorPfp} />
                                                            <img className="verify" src={verified} alt="" />
                                                        </div>
                                                        <div className='info'>

                                                            <p className='docName'>Dr. Ayesha Zahid</p>
                                                            <p className='docPara'>Nephrologist Specialist</p>
                                                            <p className='docPara'>MBBS</p>
                                                            <p className='docPara'>Health Advice, Family Practice</p>
                                                            <p className='docPara'>Experience: <span>1 year</span> </p>
                                                            <p className='docPara'>Reviews: <span>6+</span> </p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton selectDocDiv'>
                                                    <input type="radio" id="doc2" name="bookedDoctorId" value="2" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="doc2">
                                                        <div className="imgDiv">
                                                            <img className="selectDoc" src={doctorPfp} />
                                                            <img className="verify" src={verified} alt="" />
                                                        </div>
                                                        <div className='info'>

                                                            <p className='docName'>Dr. Ayesha Zahid</p>
                                                            <p className='docPara'>Nephrologist Specialist</p>
                                                            <p className='docPara'>MBBS</p>
                                                            <p className='docPara'>Health Advice, Family Practice</p>
                                                            <p className='docPara'>Experience: <span>1 year</span> </p>
                                                            <p className='docPara'>Reviews: <span>6+</span> </p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton selectDocDiv'>
                                                    <input type="radio" id="doc3" name="bookedDoctorId" value="3" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="doc3">
                                                        <div className="imgDiv">
                                                            <img className="selectDoc" src={doctorPfp} />
                                                            <img className="verify" src={verified} alt="" />
                                                        </div>
                                                        <div className='info'>

                                                            <p className='docName'>Dr. Ayesha Zahid</p>
                                                            <p className='docPara'>Nephrologist Specialist</p>
                                                            <p className='docPara'>MBBS</p>
                                                            <p className='docPara'>Health Advice, Family Practice</p>
                                                            <p className='docPara'>Experience: <span>1 year</span> </p>
                                                            <p className='docPara'>Reviews: <span>6+</span> </p>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 " align="center">
                                                <div className='radioButton selectDocDiv'>
                                                    <input type="radio" id="doc4" name="bookedDoctorId" value="4" onChange={getInput} />
                                                    <label className="radio-button" htmlFor="doc4">
                                                        <div className="imgDiv">
                                                            <img className="selectDoc" src={doctorPfp} />
                                                            <img className="verify" src={verified} alt="" />
                                                        </div>
                                                        <div className='info'>

                                                            <p className='docName'>Dr. Ayesha Zahid</p>
                                                            <p className='docPara'>Nephrologist Specialist</p>
                                                            <p className='docPara'>MBBS</p>
                                                            <p className='docPara'>Health Advice, Family Practice</p>
                                                            <p className='docPara'>Experience: <span>1 year</span> </p>
                                                            <p className='docPara'>Reviews: <span>6+</span> </p>
                                                        </div>
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
                                            <label htmlFor="pageProgress">5 of 8 answered</label>
                                            <progress min="0" max="80" value="50" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={specialistBack2}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={specialistNext2} disabled={!doctorBooking.bookedDoctorId}><i className="bi bi-arrow-right"></i></button>
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
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Select <span>Date & Time </span>
                                        </h1>
                                    </div>
                                    <div className="mainBodyInner">
                                        <div className="row wrapper ">

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
                                                <div className='selectDateTimePicker'>
                                                    {/* <label htmlFor="selectDateId" className='selectDateTimeLabel'>Enter Date</label> */}
                                                    <DatePicker
                                                        selected={bookDate}
                                                        onChange={(date) => setBookDate(date)}

                                                        inline
                                                    />
                                                    {/* <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Pick your Time</label> */}
                                                    <div className='TimePickerDiv'> <TimePicker onChange={setLabTime} value={labTime} /></div>
                                                </div>
                                            </div>
                                            {/* <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Enter Time</label>
                                                    <input type="time" id='selectTimeId' className='selectDateTimeInput' name='bookedTime' onChange={getInput}  /> 
                                                 <div className='TimePickerDiv'> <TimePicker onChange={setLabTime} value={labTime} /></div>
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
                                            <label htmlFor="pageProgress">6 of 8 answered</label>
                                            <progress min="0" max="80" value="60" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={dateTimeBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={dateTimeNext} disabled={!BookingDate || !labTime}><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef7}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Details <span>Confirmation</span>
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
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel' >Receipt</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Name...' name='recipient' onChange={getInput} />
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
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Payment Method</label>
                                                    <select name="paymentMethod" id="" onChange={getInput} >
                                                        <option value="Cash">Cash </option>
                                                        <option value="Online">Online Transfer </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Card Number</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Card Number...' name='cardNumber' onChange={getInput} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Promo Code</label>
                                                    <input type="text" id='selectTimeId' className='selectDateTimeInput' placeholder='Enter Promo Code...' name='promoCode' onChange={getInput} />
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
                                            <label htmlFor="pageProgress">7 of 8 answered</label>
                                            <progress min="0" max="80" value="70" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={confirmBack}><i className="bi bi-arrow-left"></i></button>
                                            <button href="#" className='nextButton' onClick={confirmNext} disabled={!doctorBooking.recipient || !doctorBooking.cardNumber}><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef8}>
                        <section>
                            <div className="container">

                                <div className="mainBody">
                                    <div className="mainBodyHeading">
                                        <h1>
                                            Appointment <span>Successful</span>
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
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Booking ID</label>
                                                    <p>5123</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Patient</label>
                                                    <p>{doctorBooking.bookedFor}</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Status</label>
                                                    <p>Pending</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Payment Method</label>
                                                    <p>{doctorBooking.paymentMethod}</p>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 " align="center">
                                                <div className='selectDateTime '>
                                                    <label htmlFor="selectTimeId" className='selectDateTimeLabel'>Card Number</label>
                                                    <p>{doctorBooking.cardNumber}</p>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 " align="center">
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
                                            <label htmlFor="pageProgress">8 of 8 answered</label>
                                            <progress min="0" max="80" value="80" id='pageProgress' />
                                        </div>
                                        <div className="buttons">
                                            <button href="#" className='backButton' onClick={appointmentSuccBack}><i className="bi bi-arrow-left"></i></button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="switchDiv" ref={buttonRef9}>
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
