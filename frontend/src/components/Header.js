// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Подключаем CSS для стилизации

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src={require("../images/logo.png")}
            alt="Логотип"
            className="logo-image"
          />
        </Link>{" "}
        {/* Логотип с ссылкой на главную страницу */}
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/courses">Курсы</Link> {/* Ссылка на курсы */}
          </li>
          <li>
            <Link to="/about">О нас</Link>{" "}
            {/* Ссылка на страницу о платформе */}
          </li>
          <li>
            <Link to="/contact">Контакты</Link>{" "}
            {/* Ссылка на страницу с контактами */}
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Войти</button> {/* Кнопка для входа */}
        <button className="signup-btn">Регистрация</button>{" "}
        {/* Кнопка для регистрации */}
      </div>
    </header>
  );
};

export default Header;
