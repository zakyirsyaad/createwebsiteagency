import React, { useState } from 'react';
import './formemail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Formwa() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const notify = () => toast("Thanks to contact me!");

  const handleSubmit = e => {
    e.preventDefault();
    window.open(`https://wa.me/+6281241933754?text=${message}`);
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
        className="kotak"
      />
      <textarea
        placeholder="Message"
        value={message}
        cols="30" rows="10"
        onChange={e => setMessage(e.target.value)}
        required
        className="kotak"
      />
      <button type="submit" className="btn-submit" onClick={notify}>Send Message</button>
      <ToastContainer />
    </form>
  );
}

export default Formwa;
