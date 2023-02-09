import React, { useState } from 'react';
import Formemail from './formemail';
import Formwa from './formwa';
import './navbarform.css';

function Navbarform() {
  const [selectedForm, setSelectedForm] = useState('email');

  return (
    <div className="container-navbar">
      <div className="form-selector">
        <button
          onClick={() => setSelectedForm('email')}
          className={selectedForm === 'email' ? 'selected' : ''}
          id="btn-form-select"
        >
          Email
        </button>
        <button
          onClick={() => setSelectedForm('whatsapp')}
          className={selectedForm === 'whatsapp' ? 'selected' : ''}
          id="btn-form-select"
        >
          WhatsApp
        </button>
      </div>
      {selectedForm === 'email' ? <Formemail /> : <Formwa />}
    </div>
  );
}

export default Navbarform;
