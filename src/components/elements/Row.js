import React from "react";
import stylesheet from './Row.module.css';
import cx from 'classnames';


const Row = (props) => {
    const num = props.num;
    const value = props.value;

    const select = () => {
        const row = document.querySelector(`#${stylesheet.row}_${num}`);
        const selection = window.getSelection();
        const range = document.createRange();
        selection.removeAllRanges();
        range.selectNodeContents(row);
        selection.addRange(range);
        document.execCommand("copy");
    };

    return (
        <div className={stylesheet.row}>
            <span onClick={select} className={cx(stylesheet.index, 'unselectable')}>
                {num}
            </span>
            <div className={stylesheet.text} id={`${stylesheet.row}_${num}`}>
                {value}
            </div>
        </div>
    );
};

export default Row;