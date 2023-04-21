/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import axios from "axios";
interface HomeProps {
  setCurrent: (current: number) => void;
}
export default function Contact({ setCurrent }: HomeProps) {
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
    const nextURL = "/";
    const nextTitle = "Home Page";
    const nextState = { additionalInformation: "Updated the URL with JS" };

    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);
    setCurrent(0);
  };

  const ClearForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setSubject("");
    setSender("");
  };

  return (
    <div className="z-1 absolute flex h-screen w-screen flex-col items-center justify-center text-white">
      <form
        onSubmit={SendMail}
        onReset={ClearForm}
        className="items-left justify-left align-left md:max-w-36 relative m-10 flex w-11/12 flex-col rounded-2xl border-2 border-solid border-white px-6 py-6 opacity-90 md:w-4/12 md:px-20 md:py-6"
      >
        <h1 className="relative -left-2 mb-4 w-full text-left text-6xl font-bold opacity-100">
          Contact
        </h1>
        <label
          className="m-0 w-full text-left text-base font-semibold"
          htmlFor="sender"
        >
          Contact Email:
        </label>
        <input
          type="email"
          required
          value={sender}
          className="mx-0 my-2 rounded-sm border-b border-white bg-transparent p-4 text-lg outline-none"
          onChange={(e) => setSender(e.target.value)}
        ></input>
        <label
          className="m-0 w-full text-left text-base font-semibold"
          htmlFor="subject"
        >
          Subject:
        </label>
        <input
          type="subject"
          required
          value={subject}
          className="mx-0 my-2 rounded-sm border-b border-white bg-transparent p-4 text-lg outline-none"
          onChange={(e) => setSubject(e.target.value)}
        ></input>
        <label
          className="m-0 w-full text-left text-base font-semibold"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          required
          value={message}
          className="mx-0 my-2 rounded-sm border-b border-white bg-transparent p-4 text-lg outline-none"
          rows={4}
          cols={20}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/*
cursor: pointer;
  background-color: white;
  color: black; */}

        <div className="align-center my-4 flex w-full flex-row justify-between">
          <button
            className="mx-0 my-2 rounded-3xl border border-white bg-black px-6 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black"
            type="reset"
          >
            Clear
          </button>
          <button
            className="mx-0 my-2 rounded-3xl border border-white bg-black px-6 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
