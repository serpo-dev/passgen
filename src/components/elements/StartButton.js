import React from 'react';
import stylesheet from './StartButton.module.css';

const StartButton = () => {
    const poweredByLink = 'https://github.com/yphwd';
    const click = () => {
        const contentBlock = document.querySelector('#content');
        contentBlock.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={stylesheet.startButton}>
            <button onClick={click}>Let's start!</button>;
            <p>
                powered by
                <a href={poweredByLink} target='_blank'>
                    yphwd
                </a>
            </p>
        </div>
    );
};

export default StartButton;
