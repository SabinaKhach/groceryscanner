import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";

const Router = ({basket,setBasket}) => {
    return(
        <Routes>
            <Route index element={<Home basket={basket} setBasket={setBasket}/>} />
            <Route path="/about" element={<About />}/>
        </Routes>
    )
}
export default Router; 