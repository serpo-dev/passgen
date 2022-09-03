import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import stylesheet from './Checkbox.module.css';


const Checkbox = (props) => {
    const name = props.name;
    const checked = props.checked;

    const dispatch = useDispatch();
    const ac = props.ac;
    const change = (e) => {
        const boolean = e.target.checked;
        dispatch(ac(boolean));
    };

    return (
        <label className={stylesheet.container}>
            <span className={stylesheet.p}>{name}</span>
            <input onChange={change} type='checkbox' checked={checked} />
            <span className={stylesheet.checkmark}></span>
        </label>
    );
};

export default Checkbox;