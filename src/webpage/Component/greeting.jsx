import React from 'react'
import greetDoc from '../../assets/images/bookLab/confirmTest.png'

export const Greeting = () => {
    return (
        <>
            <div className='greet'>
                <div className="greetWrapper">
                    <img src={greetDoc} alt="" />
                    <p>Thank You! <br/> Our Health Representator Will Contact You!</p>
                </div>

            </div>
        </>
    )
}
