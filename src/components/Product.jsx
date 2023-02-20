import React, { useState, useEffect } from "react";
import './product.scss';
const Product = ({name, id, image, price}) => { 
    
    const [count, setCount] = useState(1);
    const [disableMinus, setDisableMinus] = useState(false);
    const [disablePlus, setDisablePlus] = useState(false);

    useEffect(()=>{
        if(count<=1){
            setCount(1);
            setDisableMinus(true);
        }else{
            setDisableMinus(false);
        }
        if(count>=99){
            setCount(99);
            setDisablePlus(true);
        }else{
            setDisablePlus(false);
        }
    },[count])
    const collectProductData = () =>{
        const data = {
            id, 
            name, 
            image, 
            price,
            count: count, 
        } 
    }
    return (
        <div className="productDiv" key={id}>
            <div className="image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="productDescription">
                <div className="productNameCount">
                    <span className="productName">{name}</span>
                    <div className="productCount">
                        <button disabled={disableMinus} onClick={() => setCount(prev => prev - 1)}>-</button>
                        <input type="text" value={count}/>
                        <button disabled={disablePlus} onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>
                </div>
                <div className="productPriceCart">
                    <span className="productPrice">{price}</span>
                    <div className="productCart" onClick={() => collectProductData()}></div>
                </div>
            </div>
        </div>
    )
}

export default Product;
