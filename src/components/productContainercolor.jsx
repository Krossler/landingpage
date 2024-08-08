import React, { useMemo } from "react";
import Product from "./product";
import "./styles/productContainer.css";
import products from "../data/productscolors.json";
import Navbar from "./navbar";

const ProductContainercolor = () => {
  const productList = useMemo(() => products, []);

  return (
    <>
    <header className="header">
      <div className="navbar_wallpaper">
        <Navbar />
        <h1>Productos</h1>
      </div>
      <section className="product_container">
        <div className="product_wrapper">
          <div className="product_list">
            {productList.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                size={product.size}
                description={product.description}
                price={product.price}
                url={product.url}
                img={product.img}
              />
            ))}
          </div>
        </div>
      </section>
    </header>
    </>
  );
};

export default React.memo(ProductContainercolor);