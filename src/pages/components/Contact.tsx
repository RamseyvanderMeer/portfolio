/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import axios from "axios";
import contact from "../styles/Contact.module.scss";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [sender, setSender] = useState("");

  const SendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/email", {
      message,
      subject,
      sender,
    });
    if (response.status === 200) {
      setMessage("");
      setSubject("");
      setSender("");
    }
    alert("Message Sent");
  };

  const ClearForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setSubject("");
    setSender("");
  };

  return (
    <div className={contact.container}>
      <form onSubmit={SendMail} onReset={ClearForm} className={contact.form}>
        <h1 className={contact.title}>Contact</h1>
        <label className={contact.label} htmlFor="sender">
          Contact Email:
        </label>
        <input
          type="email"
          required
          value={sender}
          className={contact.input}
          onChange={(e) => setSender(e.target.value)}
        ></input>
        <label className={contact.label} htmlFor="subject">
          Subject:
        </label>
        <input
          type="subject"
          required
          value={subject}
          className={contact.input}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label className={contact.label} htmlFor="message">
          Message:
        </label>
        <textarea
          required
          value={message}
          className={contact.input}
          rows={4}
          cols={20}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={contact.buttonContainer}>
          <button className={contact.clear} type="reset">
            Clear
          </button>
          <button className={contact.submit} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
