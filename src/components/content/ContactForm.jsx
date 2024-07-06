import { useForm, ValidationError } from "@formspree/react";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [state, handleSubmit, reset] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks! Your message was submitted successfully.</p>
        <button onClick={reset}>Return</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input id="name" type="name" name="name" placeholder="Name" />
      </label>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label htmlFor="email">
        <input id="email" type="email" name="email" placeholder="Email" />
      </label>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
