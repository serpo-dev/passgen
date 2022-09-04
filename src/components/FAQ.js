import React from 'react';
import stylesheet from './FAQ.module.css';
import einsteinIcon from '../assets/einsteinIcon.svg';

const FAQ = () => {
    return (
        <div className={stylesheet.FAQ}>
            <div className={stylesheet.first}>
                <h2>WHY IS IT IMPORTANT TO HAVE A STRONG PASSWORD?</h2>
                <span className={stylesheet.dividing} />
                <p>
                    One of the most common ways that hackers break into
                    computers is by guessing passwords. Simple and commonly used
                    passwords enable intruders to easily gain access and control
                    of a computing device.
                </p>
            </div>
            <div />
            <div className={stylesheet.second}>
                <h2>DO THIS SITE SAVE GENERATED DATA?</h2>
                <span className={stylesheet.dividing} />
                <p>
                    We don’t collect your data. Even if we hypothetically wanted
                    to do this, it would be just a silly idea because we do not
                    know your username/email and the target site where you want
                    to enter the generated password to.
                </p>
            </div>
            <img
                src={einsteinIcon}
                className='unselectable'
                style={{ pointerEvents: 'none' }}
            />
        </div>
    );
};

export default FAQ;
