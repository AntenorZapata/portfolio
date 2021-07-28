import React from 'react';
import Title from '../Components/Title';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
init('user_XUCQW0dqHQK2Uh4J45aox');

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uhlkyfm',
        'template_vesugne',
        e.target,
        'user_XUCQW0dqHQK2Uh4J45aox'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <Title text={'contato'} shadow={'contato'} />
      <div className="contact">
        <div className="contact-content">
          <form onSubmit={sendEmail} className="form">
            <div className="form-control">
              <input type="text" placeholder="Nome" name="name" required />
            </div>
            <div className="form-control">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>
            <div className="btn-form">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
