import { faCalendarCheck, faClockFour, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import "./RegistrationContainer.styles.css"
const RegistrationContainer = () => {
    return (
        <section className='registration-container'>
            <div className='registration-container__text-div'>
                <h3 className='text-div__heading'>- Register Here -</h3>
                <p className='text-div__text'>
                    Join us to celebrate our biggest night of the year.
                </p>
                <div className='text-div__event-container'>
                    <div className='event-container__cards'>
                        <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#ffffff", }} />
                        <p className='cards__text'>05 NOVEMBER 2022</p>
                    </div>
                    <div className='event-container__cards'>
                        <FontAwesomeIcon icon={faClockFour} style={{ color: "#ffffff", }} />
                        <p className='cards__text'>16:00 – 23:00</p>
                    </div>
                    <div className='event-container__cards'>
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff", }} />
                        <p className='cards__text'>Centara Grand & Bangkok Convention Centre, Bangkok</p>
                    </div>
                </div>
            </div>
            <div className='registration-container__form-div'>

            </div>
        </section>
    )
}

export default RegistrationContainer
