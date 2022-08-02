import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from 'react-router-dom';
import "./CustomButton.css";

const CustomButton = (props) => {
    return (
        <Button className="button" onClick={props.onClick}>{props.value}</Button>
    )
}

export default CustomButton