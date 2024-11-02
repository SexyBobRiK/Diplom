import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import ModalInfo from "./UI/Modal/ModalInfo";
import userRegister from "../app/services/user/userRegis";

import "../app/css/Registration.css";

export default function Registration() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nav = useNavigate();

  const handleRegis = async () => {
    try {
      if (password === confirmPassword) {
        const res = await userRegister(name, surname, email, password, phone)
        
        nav("/");
        } else {
          setIsOpen(true);
          setModalText("Пароли не совпадают!");
        }
    } catch (error) {
     if (error.response.data.error == "Email already exists") {
        setIsOpen(true);
        setModalText("Данный E-mail уже занят!");
        return
      }
      setIsOpen(true);
      setModalText("Ошибка регистрации!");
    }
  }

  return (
    <>
      {isOpen && (
        <ModalInfo
          modalText={modalText}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      <div className="container-reg">
        <div className="main-reg">
          <h1 className="title-reg">Регистрация</h1>
          <form className="form-regis" onSubmit={(e) => e.preventDefault()}>
            <div className="email-regis">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="email-regis-i"
                type="text"
                placeholder="Имя"
              />
            </div>
            <div className="email-regis">
              <input
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="email-regis-i"
                type="text"
                placeholder="Фамилия"
              />
            </div>
            <div className="email-regis">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-regis-i"
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div className="password-regis">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pass-regis"
                type="password"
                placeholder="Пароль"
              />
            </div>
            <div className="password-regis">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pass-regis"
                type="password"
                placeholder="Повторите пароль"
              />
            </div>
            <div className="tel-number-regis">
              <div className="main-tel-number-regis">
                <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="tel-regis"
                  mask="+7 (999) 999-99-99"
                  maskChar="_"
                  placeholder="+7 (___) ___-__-__"
                  id="phone"
                  name="phone"
                >
                  {(inputProps) => <input type="tel" {...inputProps} />}
                </InputMask>
              </div>
            </div>
            <div className="submit-regis">
              <button onClick={handleRegis} className="reg-btn">
                Зарегестрироваться
              </button>
              <NavLink to={"/sign-up"}>
                <button className="submit-btn">Вход</button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
