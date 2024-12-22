import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import promoImage from "../img/promo.png";
import product1 from "../img/product1.jpg";
import product2 from "../img/product2.jpg";
import product3 from "../img/product3.jpg";
import product4 from "../img/product4.jpg";
import product5 from "../img/product5.jpg";
import product6 from "../img/product6.jpg";
import advantagesImg1 from "../img/advantages__img1.svg";
import advantagesImg2 from "../img/advantages__img2.svg";
import advantagesImg3 from "../img/advantages__img3.svg";

import "./styles.css";

function HomePage() {
  return (
    <div>
      <Header />
      <div>
        <section className="promo">
          <div className="promo__img">
            <img src={promoImage} alt="photo promo" />
          </div>
          <div className="promo__content">
            <div className="promo__info">
              <h1 className="promo__title">THE BRAND</h1>
              <h2 className="promo__heading">
                OF LUXURIOUS{" "}
                <span className="promo__heading_select">FASHION</span>
              </h2>
            </div>
          </div>
        </section>
      </div>
      <section className="sale center">
        <div className="sale__top">
          <div className="sale__item sale__item_1">
            <p className="sale__text">30% OFF</p>
            <h3 className="sale__heading">FOR WOMEN</h3>
          </div>
          <div className="sale__item sale__item_2">
            <p className="sale__text">HOT DEAL</p>
            <h3 className="sale__heading">FOR MEN</h3>
          </div>
          <div className="sale__item sale__item_3">
            <p className="sale__text">NEW ARRIVALS</p>
            <h3 className="sale__heading">FOR KIDS</h3>
          </div>
        </div>
        <div className="sale__bottom">
          <p className="sale__text">LUXIROUS & TRENDY</p>
          <h3 className="sale__heading">ACCESORIES</h3>
        </div>
      </section>
      <section className="product-box center">
        <h2 className="product-box__heading">Featured Items</h2>
        <p className="product-box__text">
          Shop for items based on what we featured in this week
        </p>
        <div className="product-box__content">
          <div className="product">
            <img
              className="product__img"
              src={product1}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
          <div className="product">
            <img
              className="product__img"
              src={product2}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
          <div className="product">
            <img
              className="product__img"
              src={product3}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
          <div className="product">
            <img
              className="product__img"
              src={product4}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
          <div className="product">
            <img
              className="product__img"
              src={product5}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
          <div className="product">
            <img
              className="product__img"
              src={product6}
              alt="man in blue jacket"
            />
            <div className="product__content">
              <a href="product.html" className="product__heading">
                ELLERY X M'O CAPSULE
              </a>
              <p className="product__text">
                Known for her sculptural takes on traditional tailoring,
                Australian arbiter of cool Kym Ellery teams up with Moda
                Operandi.
              </p>
              <p className="product__price">$52.00</p>
            </div>
            <a href="#" className="product__add">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="catalog__button">
          <Link to="/catalog" className="catalog__button_link">
            <p>Browse all product</p>
          </Link>
        </div>
      </section>
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

export default HomePage;
