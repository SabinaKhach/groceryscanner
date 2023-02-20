import React from "react";
import './home.scss'
import Products from "../products/Products";

const Home = ({setBasket, basket}) => {
    return (
        <>
            <Products setBasket={setBasket} basket={basket}/>
        </>
    )
}

export default Home;