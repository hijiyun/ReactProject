import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
    const Navigate = useNavigate()
    const goProductpage = () => {
        Navigate('/products?q=pants');
    }
    return (
    <div>
        <h1>HomePage</h1>
            <Link to="/about">go to about page</Link>
            <button onClick={goProductpage}>go to product page</button>
    </div>
    );
}

export default Homepage