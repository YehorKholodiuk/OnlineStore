import './App.css';
import React, {useState} from "react";
import Products from "./components/Products";
import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid';

import Bronco1 from './imagesProducts/images/Bronco1.png'
import Bronco2 from './imagesProducts/images/Bronco2.png'
import Bronco3 from './imagesProducts/images/Bronco3.png'
import Bronco4 from './imagesProducts/images/Bronco4.png'
import Excursion1 from './imagesProducts/images/Excursion1.png'
import LandCruiser from './imagesProducts/images/LandCruiser.png'
import LandCruiser2 from './imagesProducts/images/LandCruiser2.png'
import merc_g from './imagesProducts/images/merc_g.png'
import Steyr from './imagesProducts/images/Steyr.png'
import Suburban1 from './imagesProducts/images/Suburban1.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import Basket from "./components/Basket";



const initialProducts = [
  {
    id: uuidv4(),
    img: Bronco1,
    title: "Ford Bronco vintage",
    category: 'vintage',
    price: 20000,
    count: 2
  }, {
    id: uuidv4(),
    img: Bronco2,
    title: "Ford Bronco cabrio",
    category: 'vintage',
    price: 15000,
    count: 1
  }, {
    id: uuidv4(),
    img: Bronco3,
    title: "Ford Bronco 3-doors",
    category: 'vintage',
    price: 60000,
    count: 3
  }, {
    id: uuidv4(),
    img: Bronco4,
    title: "Ford Bronco cabrio first edition",
    category: 'vintage',
    price: 70000,
    count: 1
  }, {
    id: uuidv4(),
    img: Excursion1,
    title: "Ford Excursion 1999",
    category: 'Off Road Full Sizw',
    price: 20000,
    count: 1
  }, {
    id: uuidv4(),
    img: LandCruiser,
    title: "Toyota LC300",
    category: 'Brand New',
    price: 70000,
    count: 1
  }, {
    id: uuidv4(),
    img: LandCruiser2,
    title: "Toyota LC300",
    category: 'Slightly used',
    price: 65000,
    count: 3
  }, {
    id: uuidv4(),
    img: merc_g,
    title: "Mercedes G-WAGEN 463 G500",
    category: 'Luxury Off Road',
    price: 67000,
    count: 1
  }, {
    id: uuidv4(),
    img: Steyr,
    title: "Steyr Daimler Puch",
    category: 'Military off road truck',
    price: 22500,
    count: 1
  }, {
    id: uuidv4(),
    img: Suburban1,
    title: "Chevrolet Suburban 2023",
    category: 'Luxury Off Road',
    price: 70000,
    count: 1
  }
]


function App() {

  const [products] = useState(initialProducts)
  const [searchInput, setSearchInput] = useState('')
  const [basket, setBasket] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const putToBasket = (choosenProduct) => {
    if (basket.indexOf(choosenProduct) !== -1)
      return
    setBasket([...basket, choosenProduct])
  }


  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <div>
        <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            toggle={toggle}
        />
        {isOpen ? <Basket basket={basket}
                          setBasket={setBasket}
                          toggle={toggle}/> :<Products
            products={products.filter(el =>
                el.title.toLowerCase().includes(searchInput.toLowerCase())
            )}
            putToBasket={putToBasket}
        />}
        <hr/>

      </div>
  );
}

export default App;
