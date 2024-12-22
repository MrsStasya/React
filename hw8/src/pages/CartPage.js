import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cartItem1 from "../img/cart-item1.jpg";
import cartItem2 from "../img/cart-item2.jpg";
import closeItem from "../img/close-item-in-cart.png";
import "./styles.css";

function CartPage() {
  // Создаем состояние для хранения товаров в корзине
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MANGO PEOPLE T-SHIRT",
      price: 300,
      quantity: 2,
      image: cartItem1,
    },
    {
      id: 2,
      name: "MANGO PEOPLE T-SHIRT",
      price: 300,
      quantity: 2,
      image: cartItem2,
    },
  ]);

  // Функция для обновления количества товара
  const updateQuantity = (id, quantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  // Подсчет общей стоимости товаров в корзине
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="top">
      <Header />
      <section className="head center">
        <h2 className="head__heading">SHOPPING CART</h2>
      </section>
      <div className="cart center">
        <div className="cart__content">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt="cart photo"
                className="cart-item__img"
              />
              <div className="cart-item__content">
                <a href="product.html" className="cart-item__name">
                  {item.name}
                </a>
                <div className="cart-item__info">
                  <div className="cart-item__flex">
                    <p className="cart-item__text">
                      Price:{" "}
                      <span className="selected-color">${item.price}</span>
                    </p>
                  </div>
                  <p className="cart-item__text">Color: Red</p>
                  <p className="cart-item__text">Size: XL</p>
                  <p className="cart-item__text cart-item__text_quantity">
                    Quantity:
                    <input
                      className="cart-item__input"
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </p>
                </div>
                <div className="cart-item__close">
                  <img src={closeItem} alt="close" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__buttons">
          <button className="button button_reg">CLEAR SHOPPING CART</button>
          <button className="button button_reg">CONTINUE SHOPPING</button>
        </div>
        <div className="cart__right">
          <div className="cart__form">
            <h3 className="cart__heading">SHIPPING ADDRESS</h3>
            <input
              className="cart__input"
              type="text"
              placeholder="Bangladesh"
            />
            <input className="cart__input" type="text" placeholder="State" />
            <input
              className="cart__input"
              type="text"
              placeholder="Postcode / Zip"
            />
            <button className="quote__button">GET A QUOTE</button>
          </div>
          <div className="cart__total">
            <p className="cart__text">
              SUB TOTAL <span>${totalCost}</span>
            </p>
            <h3 className="cart__total-heading">
              GRAND TOTAL{" "}
              <span className="selected-color">
                <b>${totalCost}</b>
              </span>
            </h3>
            <div className="cart__hr"></div>
            <button className="button button_checkout">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
