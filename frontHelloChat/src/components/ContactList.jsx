import React, { useState } from 'react'
import { Search } from 'lucide-react'
import ContactChat from '../components/ContactChat'

import capy from '../assets/capy.jpg'

import '../app/css/ContactList.css'

export default function ContactList() {

  const [searchBlockActive, setSearchBlockActive] = useState(false);

  return (
    <>
    <div className="contact-list-container">
      <div className="main contact-list-main">
      <div className="contact-list-block">
        <div  className={`contact-list-search-block ${searchBlockActive ? "contact-list-search-block-active" : ""}`}>
          <input onFocus={() => setSearchBlockActive(true)} onBlur={() => setSearchBlockActive(false)} type="text" placeholder="Поиск" />
          <button className='searh-contact-bt'><Search /></button>
        </div>
        <div className="contact-list-content">
          <div className="contact-list-contact">
              <img className='contact-img' src={capy} />
            <div className="contact-list-contact-info">
              <div className="contact-list-contact-info-head">
                <p className='contact-list-contact-name'>Nikita Bugaenko</p>
                <p className='contact-list-msg-time'>20:30</p>
              </div>
              <div className="contact-list-contact-info-body">
                <p className='contact-list-msg'>Привет, как дела?</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ContactChat />
      </div>
    </div>
    </>
    
  )
}
