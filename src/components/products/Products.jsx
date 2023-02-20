import React, { useEffect } from "react";
import Product from "../product/Product";
import './products.scss'
import {items} from "../items"

const Products = ({setBasket , basket}) => {

    return (
            <div className="productContent">
                {items.map((item) => {
                return(
                    <Product name={item.name} price={item.price} image={item.image} id={item.id} key={item.id} setBasket={setBasket}  basket={basket}/>
                )
            })}
            </div>
        
    )
}

export default Products;