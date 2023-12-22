import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wejh8dd",
        "template_udvozor",
        form.current,
        "PdknDHeYCfIiGA_wT"
      )
      .then(
        (result) => {
          setShowModal(true);
          form.current.reset();
        }
        // (result) => {
        //   console.log(result.text);
        // },
        // (error) => {
        //   console.log(error.text);
        // }
      );
  };

  return (
    <section className="section-contactform">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form">
          <div className="form-title">
            <h2>Для связи:</h2>
            <p>Наташа Шавшина / mgmt.luverance@gmail.com</p>
            <p>Или оставьте сообщение через форму ниже</p>
          </div>
          <div className="input-fields">
            <div className="input">
              <label>Имя</label>
              <input type="text" name="from_name" />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="email" name="from_email" />
            </div>
          </div>

          <label>Сообщение</label>
          <textarea name="message" />
          <input className="send-btn" type="submit" value="Отправить" />
        </div>
      </form>

      {showModal && (
        <div className="modal-form">
          <p>Ваше пиьсмо отправлено по адресу mgmt.luverance@gmail.com!</p>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="modal-close"
            data-dismiss="modal"
          >
            Ок
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
