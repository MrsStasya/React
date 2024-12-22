import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./styles.css";

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <section className="head center">
        <h2 className="head__heading">REGISTRATION</h2>
      </section>
      <div className="reg center">
        <form className="reg__form">
          <div className="reg__inputs">
            <h2 className="reg__heading">Your Name</h2>
            <input
              className="reg__input"
              type="text"
              placeholder="First Name"
            />
            <input className="reg__input" type="text" placeholder="Last Name" />
          </div>
          <div className="reg__radio">
            <label className="reg__radio-label">
              <input type="radio" name="gender" />
              Male
            </label>
            <label className="reg__radio-label">
              <input type="radio" name="gender" />
              Female
            </label>
          </div>
          <div className="reg__inputs">
            <h2 className="reg__heading">Login details</h2>
            <input
              required
              className="reg__input"
              type="email"
              placeholder="Email"
            />
            <input
              required
              className="reg__input"
              type="password"
              placeholder="Password"
            />
          </div>
          <p className="reg__text">
            Please use 8 or more characters, with at least 1 number and a
            mixture of uppercase and lowercase letters
          </p>
          <button className="button button_join" type="submit">
            JOIN NOW
          </button>
        </form>
        <div className="reg__info">
          <h2 className="reg__info-text">LOYALTY HAS ITS PERKS</h2>
          <p className="reg__info-text">
            Get in on the loyalty program where you can earn points and unlock
            serious perks. Starting with these as soon as you join:
          </p>
          <ul className="reg__ul reg__info-text">
            <li className="reg__li">15% off welcome offer</li>
            <li className="reg__li">
              Free shipping, returns and exchanges on all orders
            </li>
            <li className="reg__li">$10 off a purchase on your birthday</li>
            <li className="reg__li">Early access to products</li>
            <li className="reg__li">Exclusive offers & rewards</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
