# 📬 Contact Form Integration in React

This project includes a React-based contact form that sends submissions directly to an email address using a third-party form handling service — either **Formspree** or **Formsubmit**. No backend or database is required.

---

## 🚀 How It Works

### Option 1: Using **Formspree**

Formspree allows form submissions to be emailed to you via an endpoint.

#### ✅ Setup Instructions

1. Go to [https://formspree.io](https://formspree.io) and sign up.
2. Create a new form to get a `form ID` (e.g. `f/abc123xyz`).
3. Replace the `your-form-id` in the form component with your actual Formspree form ID.

#### 🧱 Form Code Example

```jsx
import React, { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Submitted!");
      e.target.reset();
    } else {
      setStatus("Error. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">{status}</button>
    </form>
  );
}

export default ContactForm;
