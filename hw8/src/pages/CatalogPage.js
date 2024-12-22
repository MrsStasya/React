import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import product1 from "../img/product1.jpg";
import product7 from "../img/product7.jpg";
import product3 from "../img/product3.jpg";
import product4 from "../img/product4.jpg";
import product8 from "../img/product8.jpg";
import product9 from "../img/product9.jpg";
import product10 from "../img/product10.jpg";
import product11 from "../img/product11.jpg";
import product12 from "../img/product12.jpg";
import advantagesImg1 from "../img/advantages__img1.svg";
import advantagesImg2 from "../img/advantages__img2.svg";
import advantagesImg3 from "../img/advantages__img3.svg";
import "./styles.css";

function CatalogPage() {
  // Создаем массив продуктов с присвоенными размерами
  const products = [
    {
      img: product1,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "XS",
    },
    {
      img: product7,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "M",
    },
    {
      img: product3,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
    {
      img: product4,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "S",
    },
    {
      img: product8,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
    {
      img: product9,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
    {
      img: product10,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "M",
    },
    {
      img: product11,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "S",
    },
    {
      img: product12,
      title: "ELLERY X M'O CAPSULE",
      text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00",
      size: "L",
    },
  ];

  const [selectedSize, setSelectedSize] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Обновляем отфильтрованный список продуктов при изменении выбранного размера
  useEffect(() => {
    if (selectedSize === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.size === selectedSize)
      );
    }
  }, [selectedSize]);

  return (
    <div>
      <Header />
      <section className="breadcrumbs center">
        <h2 className="breadcrumbs__heading">NEW ARRIVALS</h2>
        <nav>
          <ul className="breadcrumbs__nav">
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="index.html">
                HOME
              </a>
            </li>
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="#">
                MEN
              </a>
            </li>
            <li className="breadcrumbs__list">
              <a className="breadcrumb__link" href="#">
                NEW ARRIVALS
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Фильтры и сортировка */}
      <select
        className="sort"
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        <option value="All">All Sizes</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <div className="product-box center">
        <div className="product-box__content">
          {filteredProducts.map((product, index) => (
            <div className="product" key={index}>
              <Link to="/product">
                <img className="product__img" src={product.img} alt="product" />
                <div className="product__content">
                  <a href="product.html" className="product__heading">
                    {product.title}
                  </a>
                  <span> Size: {product.size}</span>
                  <p className="product__text">{product.text}</p>
                  <p className="product__price">{product.price}</p>
                </div>
                <a href="#" className="product__add">
                  Add to Cart
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {/* Пропускаем для сокращения */}
      <div className="advantages center">
        <article className="advantages__item">
          <img src={advantagesImg1} alt="truck" className="advantages__img" />
          <h3 className="advantages__heading">Free Delivery</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src={advantagesImg2} alt="percent" className="advantages__img" />
          <h3 className="advantages__heading">Sales & discounts</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
        <article className="advantages__item">
          <img src={advantagesImg3} alt="crown" className="advantages__img" />
          <h3 className="advantages__heading">Quality assurance</h3>
          <p className="advantages__text">
            Worldwide delivery on all. Authoritatively morph next-generation
            innovation with extensive models.
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default CatalogPage;
