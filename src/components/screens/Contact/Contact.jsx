import './Contact.css'
import React from "react";
import Button from '../../Button/Button';

const Contact = () => {

    return (
        <div className='contact'>
            <div className='contact__container'>

                <div className='contact__contact'>
                    <h1 className='hero__title'>
                        <span>    Any Query ?</span>
                        <span>    Any Query ?</span>
                    </h1>
                    <Button onClick={() => {
                        window.location.href = "mailto:hackmageddon@rajalakshmi.edu.in";
                    }}>Mail</Button>
                </div>
            </div>

        </div>
    )
}

export default Contact