import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import stylesheet from './Input.module.css';


const Input = (props) => {
    const [bigAlert, setBA] = useState(false);
    const [notNum, setNN] = useState(false);

    const name = props.name;
    const value = props.value;

    const ac = props.ac;
    const dispatch = useDispatch();
    const change = (e) => {
        const value = e.target.value;
        const isNaN = Number.isNaN(Number(value));
        setNN(isNaN);
        if (isNaN) {
            return null;
        };
       
        const num = Number(value);
        const isBig = (num > 10000);
        setBA(isBig);
        if (isBig) {
            return null;
        };

        dispatch(ac(num));
    };

    return (
        <div className={stylesheet.container}>
            <label className={stylesheet.label} >
                <span className='unselectable'>{name}</span>
                <input className={stylesheet.input} value={value} onChange={change} />
                {bigAlert
                    ? <p className={stylesheet.warning}>
                        Client-side. The process may crush.
                    </p>
                    : null}
                {notNum
                    ? <p className={stylesheet.warning}>
                        The character is not a number.
                    </p>
                    : null}
            </label>
        </div>
    );
};

export default Input;