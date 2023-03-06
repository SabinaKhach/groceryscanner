import React, { useState } from "react";
import './home.scss'
import Products from "../products/Products";

const Home = ({setBasket, basket}) => {

    const [search, setSearch] = useState('');
    let t;
    const handleSearch = (e) => {
        clearTimeout(t);
        t = setTimeout(()=>{
            setSearch(e.target.value);
        },1000)
    }

    return (
        <>
            <div className="searchDiv">
                <input type="text" className="search" onChange={(e)=>handleSearch(e)}/>
            </div>
            <Products setBasket={setBasket} basket={basket} search={search} />
        </>
    )
}

export default Home;