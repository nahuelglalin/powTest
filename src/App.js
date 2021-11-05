import React from 'react';
import './index.css';
import Checkout from './components/checkout/Checkout';
import { Banner } from './components/banner/Banner';
import { Navbar } from './components/navbar/Navbar';
import { Services } from './components/services/Services';
import { useMediaQuery } from 'react-responsive';

import { Footer } from './components/footer/Footer';


import { BuyButtons } from './components/buy-buttons/BuyButtons';
import { Articles } from './components/articles/Articles';


function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 861px)' })

    return (
      
      <div className="App">
        <Banner></Banner>
        <Navbar></Navbar>
        {isMobile ? 
        <div>
          <h2 className="mt-3 mb-3 carrito-title">Carrito</h2>
          <Articles></Articles>
          <Checkout></Checkout>
          <BuyButtons></BuyButtons>
          <Services></Services>
        </div>
          : <div className="container">
              <h2 className="mt-3 mb-3 carrito-title">Carrito</h2>
                {/* Izquierda */}
                <div className="d-flex">
                    <div className="left-container">
                      <Services></Services>
                      <Articles></Articles>
                    </div>
                    {/* Derecha */}
                    <div className="right-container mx-3">
                      <Checkout></Checkout>
                      <BuyButtons></BuyButtons>
                    </div>
                </div>
          </div>
        }
        <Footer></Footer>
      </div>
    );
    
}

export default App;
