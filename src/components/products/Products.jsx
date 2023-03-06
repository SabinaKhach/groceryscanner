import React, { useEffect } from "react";
import Product from "../product/Product";
import './products.scss'
import {items} from "../items"

const Products = ({setBasket , basket, search}) => {

    return (
            <div className="productContent">
                {items
                .filter((item)=>{
                    return item.name.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1;
                })
                .map((item) => {
                return(
                    <Product name={item.name} price={item.price} image={item.image} id={item.id} key={item.id} setBasket={setBasket}  basket={basket}/>
                )
            })}
            </div>
        
    )
}

export default Products;