import React from 'react'
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
    const navigate = useNavigate()

    const GoToHomepage = () => {
        navigate("/");
    };

    return (
    <div>
            <h1>Aboutpage</h1>
            <button onClick={GoToHomepage}>go to Hompage!</button>
        </div>
    );
}

export default Aboutpage