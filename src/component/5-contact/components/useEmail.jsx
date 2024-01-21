import emailjs from "@emailjs/browser";
import { useState } from "react";

export const useEmail = (form) => {
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState();
  const handleSend = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_90hbt0h",
        "template_5l6imjq",
        form.current,
        import.meta.env.EMAILJS_KEY
      )

      .then(
        () => {
          setState("success");
        },
        () => {
          setState("error");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return [handleSend, isLoading, state];
};
