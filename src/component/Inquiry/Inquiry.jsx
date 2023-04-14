import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Inquiry.css'
import MiniInquiryForm from '../MiniInquiryForm/MiniInquiryForm';

export default function Inquiry() {

    const form = useRef(0);

    //Width
    const [width, setWidth] = useState(window.innerWidth)

    //

    const [yes, setYes] = useState(false);
    const [main, setMain] = useState(false);

    useEffect(() => {

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        }
        )
    })

    //DefaultValues
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [passenger, setPassenger] = useState('')
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState("12:00")
    const [pickupLocation, setPickupLocation] = useState('')
    const [DropoffLocation, setDropoffLocation] = useState('')
    const [textarea, setTextarea] = useState('')
    const [mes, setMes] = useState(false)

    //Minimum Date
    const Dates = new Date()
    const month = Dates.getMonth() + 1
    const year = Dates.getFullYear()
    const date = Dates.getDate()
    const minMonth = month < 10 ? `0${month}` : month
    const minDate = `${year}-${minMonth}-${date}`

    //Maximum Date
    const maxDate = new Date(year, month + 6, date)
    const maxYear = maxDate.getFullYear()
    const maxMonth = maxDate.getMonth()
    const maxDay = maxDate.getDate()
    const sixMonthsFromNow = `${maxYear}-${maxMonth < 10 ? `0${maxMonth}` : maxMonth}-${maxDay < 10 ? `0${maxDay}` : maxDay}`

    //Form Validation 
    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return false;
        }
    }

    const Submit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rokhl6r', 'template_ve4khvq', form.current, 'g3NQvWrDQ1x3sCZO7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setMes(true);

        setTimeout(() => {
            setMes(false);
        }, 3000)

        setName('')
        setEmail('')
        setNumber('')
        setPassenger('')
        setPickupDate('')
        setPickupTime("12:00")
        setPickupLocation('')
        setDropoffLocation('')
        setTextarea('')
    }

    return (

        <>
            {
                width > 650 ?

                    <>
                        <div className='block w-full max-w-[50%] relative ff m-auto'>
                            <form ref={form} className='p-7' onSubmit={validateForm ? Submit : ''}>
                                <div className="name-email flex w-full py-4 justify-between">
                                    <div className="name w-[45%]">
                                        <input type="text" name="name" value={name} onChange={(e) => {
                                            const regex = /^[a-zA-Z\s]*$/;
                                            if (regex.test(e.target.value)) {
                                                setName(e.target.value);
                                            }
                                        }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="name" placeholder='Your Name' required />
                                    </div>
                                    <div className="email w-[45%]">
                                        <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="email" placeholder='Your Email' required />
                                    </div>
                                </div>
                                <div className="mob-passenger flex w-full py-4 justify-between">
                                    <div className="mob w-[45%]">
                                        <label htmlFor="mob">
                                            <input type="text" name="number" value={number} onChange={(e) => {
                                                if (/^[0-9]+$/.test(e.target.value)) {
                                                    setNumber(e.target.value);
                                                }
                                            }} className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' maxLength={10} id="mob" placeholder='Phone Number' required />
                                        </label>
                                    </div>
                                    <div className="passenger w-[45%]">
                                        <label htmlFor="passenger">
                                            <input type="number" required name="passenger" value={passenger} maxLength={2} onChange={(e) => { setPassenger(e.target.value) }} placeholder='No Of Passengers' className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' id="passenger" min={1} max={10} />
                                        </label>
                                    </div>
                                </div>
                                <div className='pickup-date-time flex w-full py-4 justify-between'>
                                    <div className='pickup-date w-[45%]'>
                                        <input type="date" name="pickupDate" value={pickupDate} required onChange={(e) => { setPickupDate(e.target.value) }} placeholder='Pickup Date' className='w-full rounded-md shadow-2xl outline-none p-4' autoComplete='off' min={minDate} max={sixMonthsFromNow} id="pickup-date" />

                                    </div>
                                    <div className='pickup-time w-[45%] relative'>
                                        <input type="time" name="pickupTime" placeholder='Pickup Time' required defaultValue={pickupTime} className='w-full outline-none rounded-md shadow-2xl p-4' autoComplete='off' id="pickup-time" onChange={(e) => { setPickupTime(e.target.value) }} />
                                        <span className='absolute text-2xl font-bold text-gray-700 font-mono top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>{pickupTime >= '12:00' && pickupTime <= '23:00' ? "PM" : "AM"}</span>
                                    </div>
                                </div>
                                <div className="pickup-place-dropoff-destination flex w-full  py-4 justify-between">
                                    <div className="pickup-place w-[45%]">
                                        <input type="text" autoComplete='off' value={pickupLocation} onChange={(e) => {
                                            const regex = /^[a-zA-Z\s]*$/;
                                            if (regex.test(e.target.value)) {
                                                setPickupLocation(e.target.value)
                                            } setPickupLocation(e.target.value)
                                        }} placeholder='Pickup Location' className='w-full outline-none rounded-md shadow-2xl p-4' name="pickupLocation" id="pickup-place" required />
                                    </div>
                                    <div className="dropoff-destination w-[45%]">
                                        <input type="text" autoComplete='off' value={DropoffLocation} onChange={(e) => {
                                            const regex = /^[a-zA-Z\s]*$/;
                                            if (regex.test(e.target.value)) {
                                                setDropoffLocation(e.target.value);
                                            }
                                        }} placeholder='DropOff Location' className='w-full outline-none rounded-md shadow-2xl p-4' required name="DropoffLocation" id="dropoff-destination" />
                                    </div>
                                </div>
                                <div className="additional-requirement flex w-full py-4">
                                    <div className="requirement w-full ">
                                        <textarea name="textarea" value={textarea} onChange={(e) => { setTextarea(e.target.value) }} placeholder='Additional Requirement...' className='w-full outline-none resize-none rounded-md shadow-2xl p-4' autoComplete='off' id="requirement" ></textarea>
                                    </div>
                                </div>
                                <div className="submit py-2 text-center">
                                    <button type="submit" className='button'>Submit</button>
                                </div>

                                {mes ? <p className='text-black shadow-2xl font-semibold font-mono text-[20px]'>Thank you for your message. It has been sent. we will get back touch to you shortly</p> : ''}
                            </form>
                        </div>
                    </>

                    : <MiniInquiryForm form={form} validateForm={validateForm} Submit={Submit} name={name} email={email} number={number} passenger={passenger} pickupDate={pickupDate} pickupTime={pickupTime} pickupLocation={pickupLocation} DropoffLocation={DropoffLocation} textarea={textarea} minDate={minDate} sixMonthsFromNow={sixMonthsFromNow} yes={yes} main={main}  
                    setName={setName} setEmail={setEmail} setNumber={setNumber} setPassenger={setPassenger} setPickupDate={setPickupDate}  setPickupTime={setPickupTime} setPickupLocation={setPickupLocation} setDropoffLocation={setDropoffLocation} setTextarea={setTextarea} setYes={setYes} setMain={setMain} />
            }
        </>

    )
}




