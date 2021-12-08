import React from 'react'

import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="navbar">
            {/* <h2>AGK-Shoes</h2> */}
            <ul>
                <li>AGK Shoe Store</li>
                <li><Link className="links" to="/">Home</Link></li>
                <li><Link className="links" to="products">Products</Link></li>
            </ul>
            
        </div>
    )
}

export default Header
