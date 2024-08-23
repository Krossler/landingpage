import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProductDetails from './components/productDetails';
import Layout from './components/Layout';
import Footer from './components/footer';
import Enterprise from './components/Enterprise';
import Productos from './components/products';
import ProductContainer from './components/productContainer';
import ProductContainercolor from './components/productContainercolor';
import "../src/components/styles/navbar.css"
import Logistica from './components/logistica';

function App() {
  return (
    <div className="route-section">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="empresa" element={<Enterprise/>}></Route>
          <Route path="logistica" element={<Logistica/>}></Route>
          <Route path="productos" element={<Productos />}></Route>
          <Route path="lamparasblancas" element={<ProductContainer/>}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="lamparascoloridas" element={<ProductContainercolor/>}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;