import React from "react";
import { NavLink } from "react-router-dom";
import { MessageSquareDashed, Settings2, Sun, Phone, BellDot } from "lucide-react";
import logo from "../assets/logo/Logo.png";
import capy from "../assets/capy.jpg"
import "../app/css/Header.css";
export default function Header() {
  return (
    <>
      <header className="header-container">
        <div className="main  header-main">
          <div className="header-logo-block">
            <img className="header-logo" src={logo} alt="" />
            <span className="header-name-app">HelloChat</span>
          </div>
          <div className="header-nav">
            <NavLink to={"/home/chat"}  className={({ isActive }) => (isActive ? 'nav-bt-active' : 'nav-bt')}>
            <MessageSquareDashed />
              Чат
            </NavLink>
            <NavLink to={"/home/settings"} className={({ isActive }) => (isActive ? 'nav-bt-active' : 'nav-bt')}>
            <Settings2 />
              Настройки
            </NavLink>
          </div>
          <div className="header-bg">
          <NavLink to={"/"} className={({ isActive }) => (isActive ? 'bg-bt-active' : 'nav-bt-bg')}><Sun /></NavLink>
          <NavLink to={"/"}  className={({ isActive }) => (isActive ? 'phone-bt-active' : 'nav-bt-bg')}><Phone /></NavLink>
          <NavLink to={"/"}  className={({ isActive }) => (isActive ? 'bell-bt-active' : 'nav-bt-bg')}><BellDot /></NavLink>
          </div>
          <div className="header-user-info">
            <div className="user-info">
                <p className="user-info-p">Bugaenko Nikita</p>
                <p className="user-info-p">+7 706 653 92 52</p>
            </div>
            <img className="user-img" src={capy} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
