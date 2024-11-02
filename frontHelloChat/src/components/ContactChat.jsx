import React, { useState, useEffect, useRef } from "react";
import { PhoneCall, Search, SendHorizontal } from "lucide-react";

import Message from "./UI/Message";

import "../app/css/ContactChat.css";
import capy from "../assets/capy.jpg";

export default function ContactChat() {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);
  const chatSenMsgRef = useRef(null);


  const msgText = "На улице лето, и солнечные лучи проникают сквозь листву деревьев, создавая уютную атмосферу. Дети играют на зеленом газоне, а взрослые наслаждаются свежим воздухом, читая книги или общаясь друг с другом. Вдалеке слышен звон колокольчиков велосипедистов, проезжающих мимо. Это время года дарит радость и вдохновение, побуждая мечтать о новых приключениях.";
  const msgTime = "21:35"

  const handleInput = (event) => {
    const textarea = textareaRef.current;
    const container = chatSenMsgRef.current;

    // Сбрасываем высоту, чтобы правильно вычислить новую высоту
    textarea.style.height = "auto";
    container.style.height = "auto";

    // Устанавливаем новую высоту в зависимости от содержимого
    const newHeight = textarea.scrollHeight;
    textarea.style.height = `${newHeight}px`;
    container.style.height = `${newHeight + 20}px`; // +20 для учета padding
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    handleInput(event);
  };

  useEffect(() => {
    handleInput();
  }, [message]);

  return (
    <div className="chat-container">
      <div className="chat-main">
        <div className="chat-header-user-info">
          <div className="chat-user-info">
            <img className="chat-user-img" src={capy} />
            <div className="chat-user-name-block">
              <p className="chat-user-name">Nikita Bugaenko</p>
              <p className="chat-user-time"> Сегодня 22:35</p>
            </div>
          </div>
          <div className="chat-header-options">
            <button className="chat-header-option">
              <PhoneCall />
            </button>
            <button className="chat-header-option">
              <Search />
            </button>
          </div>
        </div>
        <div className="chat-messages-block">
          <div className="chat-messages">
            <div className="chat-messages-to-you">
                <Message msg={msgText} time={msgTime} lineLength={60} />
            </div>
            <div className="chat-messages-you">
            <div className="msg-you">
                <p className="msg-text">Привет, как дела?Привет, как дела?</p>
                <p className="msg-time">22:35</p>
              </div>
            </div>
            <div className="chat-messages-to-you">
                <Message msg={msgText} time={msgTime} lineLength={60} />
            </div>
            <div className="chat-messages-to-you">
                <Message msg={msgText} time={msgTime} lineLength={60} />
            </div>
            <div className="chat-messages-to-you">
                <Message msg={msgText} time={msgTime} lineLength={60} />
            </div>
            <div className="chat-messages-to-you">
                <Message msg={msgText} time={msgTime} lineLength={60} />
            </div>
          </div>
          <div ref={chatSenMsgRef} className="chat-send-message">
            <textarea
              ref={textareaRef}
              className="chat-message-t"
              value={message}
              onChange={handleChange}
              placeholder="Введите сообщение"
            ></textarea>
            <button className="chat-send-message-btn"><SendHorizontal /></button>
            <div className="static"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
