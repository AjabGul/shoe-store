import React from 'react'
import { Outlet } from 'react-router-dom';

function Products() {

    
    return (
        <div className="product-container">
            <h3>AGK Products for Sale</h3>
            
            <hr />
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Products
