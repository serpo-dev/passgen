import React from "react";
import stylesheet from './Preview.module.css';

import mainText from '../assets/mainText.svg'


const Preview = () => {
    const poweredByLink = 'https://github.com/yphwd';

    return (
        <div className={stylesheet.preview}>
            <div className={stylesheet.previewBg}>
                <div />
            </div>
            <div className={stylesheet.previewContent}>
                <div className={stylesheet.mainText}>
                    <img src={mainText} />
                </div>
                <div className={stylesheet.startButton}>
                    <button>
                        Let's start!
                    </button>
                    <p>
                        powered by
                        <a href={poweredByLink} target='_blank'>
                            yphwd
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preview;