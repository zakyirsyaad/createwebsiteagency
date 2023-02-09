import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './formemail.css';

function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const notify = () => toast("Thanks to contact me!");

  const handleSubmit = e => {
    e.preventDefault();
    window.open(`mailto:zkyxentertain@gmail.com?subject=${subject}&body=${message}`);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="kotak"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="kotak"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        className="kotak"
        required
      />
      <textarea
        placeholder="Message"
        cols="30" rows="10"
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="kotak"
        required
      />
      <button type="submit" className="btn-submit" onClick={notify}>Send Message</button>
      <ToastContainer />
    </form>
  );
}

export default EmailForm;
