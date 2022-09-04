import React from 'react';
import { useSelector } from 'react-redux';
import stylesheet from './Result.module.css';
import Row from './Row';

const Result = () => {
    const result = useSelector(state => state.result.value);
    console.log(result);
    const isResult = result.length !== 0;

    let rows = null;
    if (isResult) {
        rows = result.map((value, index) => (
            <Row key={index} num={index + 1} value={value} />
        ));
        rows.unshift(<Row key={'startSpace'} num={null} value={null} />);
        rows.push(<Row key={'endSpace'} num={null} value={null} />);
    }

    return (
        <div className={stylesheet.scroll}>
            <div className={stylesheet.result}>{rows}</div>
        </div>
    );
};

export default Result;
