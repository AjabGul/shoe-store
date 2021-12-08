import React from 'react';
import { useParams } from 'react-router-dom';

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
    "metro-chawat"  : {
      name: "metro",
      img: 
        "https://cdn.shopify.com/s/files/1/0316/8249/4604/products/30800213_01_01_2400x.jpg?v=1614252822",
      price: "100"
    }
  };


function ProductDetails() {

    const {productId} = useParams();
    const product = shoes[productId];
    const { name, img, price} = product;
    return (
        <div className="product-details">
            <div className="product-des"> 
                <img src={img} alt={name}></img>
            </div>
            <div className="product-des">
              <h2>Product Details</h2>
              <h3>Name: {name}</h3>
              <h3>Price: ${price}</h3>
              <button>Shop Now</button>
            </div>
        </div>
    )
}

export default ProductDetails
