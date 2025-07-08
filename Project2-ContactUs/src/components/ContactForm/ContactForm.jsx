import Buttons from "../Buttons/Buttons";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Pratima");
  const [email, setEmail] = useState("pratima@gmail.com");
  const [text, setText] = useState("HeloPratima");

  // let email = "pranisha@gmail.com";
  // let text = "Hello Pranisha";
  const onSubmit = (event) => {
    event.preventDefault();

    // name = event.target.name.value;

    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setText(event.target.text.value);

    console.log({ name, email, text });

    // console.log("name:", event.target.name.value);
    // console.log("email:", event.target.email.value);
    // console.log("text:", event.target.text.value);
  };
  const onViaCallSubmit = () => {
    console.log("Call do");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_buttons}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Buttons
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<IoIosCall fontSize="24px" />}
          />
        </div>
        <Buttons
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMessage fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} />
          </div>

          <div className={styles.form_container}>
            <label htmlFor="name">E-Mail</label>
            <input type="text" name="email" value={email} />
          </div>

          <div className={styles.form_container}>
            <label htmlFor="name">Text</label>
            <textarea name="text" />
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Buttons onClick={onSubmit} text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/logo/image.svg" alt="contact_image" />
      </div>
    </section>
  );
};
export default ContactForm;
