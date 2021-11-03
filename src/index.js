import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ArticlesItem from './components/articles/ArticlesItem';
import Checkout from './components/checkout/Checkout';
import { Banner } from './components/banner/Banner';
import { Navbar } from './components/navbar/Navbar';
import { Services } from './components/services/Services';
import { Table } from './components/table/Table';

import { Footer } from './components/footer/Footer';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import { BuyButtons } from './components/buy-buttons/BuyButtons';



ReactDOM.render(
  <React.StrictMode>
    <Fragment>
        <Banner></Banner>
        <Navbar></Navbar>
        
        <div className="container">
        <h2 className="mt-4 carrito-title">Carrito</h2>

          {/* Izquierda */}
          <div className="d-flex">
              <div className="left-container">
                <Services></Services>
                <Table></Table>
                <ArticlesItem img={img1} productName={"Saco Cove Long"} productColor={"Rojo"} size={44} quantity={1} prices={150}></ArticlesItem>
                <ArticlesItem img={img2} productName={"Jean Hadid"} productColor={"Azul oscuro"} size={44} quantity={2} prices={25}></ArticlesItem>
              </div>

              {/* Derecha */}
              <div className="right-container mx-3">
                <Checkout></Checkout>
                <BuyButtons></BuyButtons>
              </div>
          </div>
         
        </div>
        <Footer></Footer>
    </Fragment> 
  </React.StrictMode>,
  document.getElementById('root')
);

