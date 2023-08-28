import React from 'react';
import stylesheet from './Footer.module.css';

import browser from '../assets/browser.svg';
import github from '../assets/github.svg';
import vk from '../assets/vk.svg';
import linkedin from '../assets/linkedin.svg';
import telegram from '../assets/telegram.svg';

const Footer = () => {
    return (
        <div className={stylesheet.footer}>
            <div className={stylesheet.links}>
                <h1>HOW TO FIND THE CREATOR:</h1>
                <ul>
                    <li>
                        <a
                            href='https://serpo.dev/'
                            target='_blank'
                            title='My portfolio.'>
                            <img src={browser} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://github.com/serpo-dev/'
                            target='_blank'
                            title='Find me in Github.'>
                            <img src={github} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://vk.com/id576573532'
                            target='_blank'
                            title='Find me in VK.'>
                            <img src={vk} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.linkedin.com/in/sergey-potapov-93b685243/'
                            target='_blank'
                            title='Find me in LinkedIn.'>
                            <img src={linkedin} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://t.me/serpo_dev'
                            target='_blank'
                            title='Find me in Telegram.'>
                            <img src={telegram} />
                        </a>
                    </li>
                </ul>
                <h3>serpo.dev@gmail.com</h3>
            </div>
            <div className={stylesheet.copyright}>
                <p>
                    Please credit the author (me, i.e. serpo-dev) if you use
                    elements of this site. The design is protected by copyright.
                </p>
                <p>
                    For joint collaborations, contact me on social networks
                    (primarly Telegram) or just email me.
                </p>
                <a
                    href='https://unsplash.com/photos/P1vXpgpL208'
                    target='_blank'>
                    Photo source
                </a>
            </div>
            <div className={stylesheet.about}>© 2022, serpo-dev</div>
        </div>
    );
};

export default Footer;
