import React from 'react';
import {Link} from "react-router-dom";

function ProductIndex() {

    const shoes = {
        "air-jordan-3-valor-blue": {
          name: "VALOUR BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
          price: "150"  
        },
        "jordan-mars-270-london": {
          name: "JORDAN MARS 270 LONDON",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
          price: "150"
        },
        "air-jordan-1-zoom-racer-blue": {
          name: "RACER BLUE",
          img:
            "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
          price: "150"
        },
        "metro-chawat" : {
            name: "metro",
            img: 
              "https://cdn.shopify.com/s/files/1/0316/8249/4604/products/30800213_01_01_2400x.jpg?v=1614252822",
            price: "1599"
          }
      };

    return (
        <div className="grid-container">
            <ul>
                {Object.entries(shoes).map(([productId,{name,img}]) => 
                    (
                        <li key={productId}>
                            <Link to={productId}>
                                <h2> Name: {name}</h2>
                                <img src={img} alt={name} />
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

export default ProductIndex
