import React, { useRef } from 'react'
import './Inquiry.css'
export default function Inquiry() {

    const form = useRef(0);

    const Submit = () => {
        console.log(form)
    }

    return (
        <>
            <div className='bg'>
                <form ref={form} onSubmit={Submit}>
                    <div className="name-email">
                        <div className="name">
                            <input type="text" name="name" autoComplete='off' id="name" placeholder='Your Name' required />
                        </div>
                        <div className="email">
                            <input type="email" name="email" autoComplete='off' id="email" placeholder='Your Email' required />
                        </div>
                    </div>
                    <div className="mob-passenger">
                        <div className="mob">
                            <input type="tel" name="mob" maxLength={10} id="mob" placeholder='Phone Number' required />
                        </div>
                        <div className="passenger">
                            <input type="number" name="passenger" autoComplete='off' id="passenger" min={1} max={10} />
                        </div>
                    </div>
                    <div className='pickup-date-time'>
                        <div className='pickup-date'>
                            <input type="date" name="pickup-date" autoComplete='off' min="2000-01-02" max="2000-01-02" id="pickup-date" />
                        </div>
                        <div className='pickup-time'>
                            <input type="time" name="pickup-time" autoComplete='off' id="pickup-time" />
                        </div>
                    </div>
                    <div className="pickup-place-dropoff-destination">
                        <div className="pickup-place">
                            <input type="text" autoComplete='off' name="pickup-place" id="pickup-place" />
                        </div>
                        <div className="dropoff-destination">
                            <input type="text" autoComplete='off' name="dropoff-destination" id="dropoff-destination" />
                        </div>
                    </div>
                    <div className="additional-requirement">
                        <div className="requirement">
                            <textarea name="requirement" autoComplete='off' id="requirement" ></textarea>
                        </div>
                    </div>
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
