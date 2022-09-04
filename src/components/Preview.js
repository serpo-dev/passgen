import React from 'react';
import stylesheet from './Preview.module.css';

import mainText from '../assets/mainText.svg';
import StartButton from './elements/StartButton';

const Preview = () => {
    return (
        <div className={stylesheet.preview}>
            <div className={stylesheet.previewBg}>
                <div />
            </div>
            <div className={stylesheet.previewContent}>
                <div className={stylesheet.mainText}>
                    <img src={mainText} />
                </div>
                <StartButton />
            </div>
        </div>
    );
};

export default Preview;
