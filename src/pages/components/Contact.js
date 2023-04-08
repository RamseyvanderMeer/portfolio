import { useState } from "react"
import axios from "axios"
import contact from "../styles/Contact.module.scss"

export default function Contact() {
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [sender, setSender] = useState("")

  const SendMail = async (e) => {
    e.preventDefault()
    const response = await axios.post("/api/email", {
      message,
      subject,
      sender,
    })
    if (response.status === 200) {
      setMessage("")
      setSubject("")
      setSender("")
    }
  }

  const ClearForm = (e) => {
    e.preventDefault()
    setMessage("")
    setSubject("")
    setSender("")
  }

  return (
    <div className={contact.conatiner}>
      <form onSubmit={SendMail} className={contact.form}>
        <h1 className={contact.title}>Contact</h1>
        <label className={contact.lable} htmlFor="sender">
          Contact Email:
        </label>
        <input
          type="email"
          required
          value={sender}
          className={contact.input}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={(e) => setSender(e.target.value)}
        ></input>
        <label className={contact.lable} htmlFor="subject">
          Subject:
        </label>
        <input
          type="subject"
          required
          value={subject}
          className={contact.input}
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label className={contact.lable} htmlFor="message">
          Message:
        </label>
        <textarea
          type="message"
          required
          value={message}
          className={contact.input}
          rows="4"
          cols="20"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={contact.buttonContainer}>
          <button className={contact.clear} onClick={ClearForm}>Clear</button>
          <button className={contact.submit} type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}
