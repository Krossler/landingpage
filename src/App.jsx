import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProductContainer from './components/productContainer';
import ProductDetails from './components/productDetails';
import Layout from './components/Layout';
import Footer from './components/footer';

function App() {
  return (
    <div className="route-section">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductContainer />}>
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