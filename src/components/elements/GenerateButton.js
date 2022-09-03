import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import stylesheet from './GenerateButton.module.css';

import filter from '../../utils/filter';
import random from '../../utils/random';
import { cR } from '../../redux/resultSlice';



const GenerateButton = () => {
    const dispatch = useDispatch();
    const options = useSelector(state => state.options);
    const dictionary = useSelector(state => state.dictionary);
    const click = () => {
        const { selection, length, amount } = filter(options, dictionary);
        const result = random(selection, length, amount);
        dispatch(cR(result));
    }

    return (
        <button className={stylesheet.button} onClick={click}>
            <div className={stylesheet.triangle} />
        </button>
    );
};

export default GenerateButton;