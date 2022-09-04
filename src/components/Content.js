import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import stylesheet from './Content.module.css';

import { cN, cE, cC, cJ, cS, cAmount, cLength } from '../redux/optionsSlice';
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Result from './elements/Result';
import GenerateButton from './elements/GenerateButton';

const Content = () => {
    const { numbers, english, cyrillic, japanese, special, amount, length } =
        useSelector(state => state.options);

    return (
        <div className={stylesheet.container} id='content'>
            <h1>CREATING A STRONG PASSWORD</h1>
            <div className={stylesheet.options}>
                <div className={stylesheet.symbols}>
                    <Checkbox
                        key={1}
                        name='Numbers'
                        checked={numbers}
                        ac={cN}
                    />
                    <Checkbox
                        key={2}
                        name='English alphabet'
                        checked={english}
                        ac={cE}
                    />
                    <Checkbox
                        key={3}
                        name='Cyrillic alphabet'
                        checked={cyrillic}
                        ac={cC}
                    />
                    <Checkbox
                        key={4}
                        name='Japanese characters'
                        checked={japanese}
                        ac={cJ}
                    />
                    <Checkbox
                        key={5}
                        name='Special symbols'
                        checked={special}
                        ac={cS}
                    />
                </div>
                <div className={stylesheet.inputs}>
                    <Input
                        key={1}
                        name='Amount'
                        value={amount}
                        dispatch={cAmount}
                        ac={cAmount}
                    />
                    <Input
                        key={2}
                        name='Length'
                        value={length}
                        dispatch={cLength}
                        ac={cLength}
                    />
                </div>
                <GenerateButton />
            </div>
            <Result />
        </div>
    );
};

export default Content;
