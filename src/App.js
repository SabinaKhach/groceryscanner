import './App.css';
import Header from './components/header/Header';
import { useState } from 'react';
import Router from './components/router/Router';

function App() {

  const [basket,setBasket] = useState([]);

  return (
    <>
      <Header key={basket.id + Math.random()} basket={basket}/>
      <Router basket={basket} setBasket={setBasket}/>
    </>
  );
}

export default App;