import React, { useRef, useState } from "react";
import { useEmail } from "./components/useEmail";
import { HandleSuccess } from "./components/HandleSuccess";
import { HandleErrors } from "./components/HandleErrors";
import { HandleLoading } from "./components/HandleLoading";
import "./ContactStyle.scss";

export default function Contact() {
  const form = useRef();
  const [handleSend, isLoading, state] = useEmail(form);

  return (
    <div className="contact section__padding">
      <div className="textContainer">
        <h1>Let's work together</h1>
      </div>

      <div className="formContainer">
        <form ref={form} onSubmit={handleSend} action="">
          <input type="text" required placeholder="Name" name="name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
          {isLoading ? (
            <HandleLoading />
          ) : (
            (state === "success" && <HandleSuccess />) ||
            (state === "error" && <HandleErrors />)
          )}
        </form>
      </div>
    </div>
  );
}
