import React, { useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

interface Status {
  type: "success" | "error";
  message: string;
}

const Contact  = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Rilwan",
      subject,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-hero)" }} >
      <div className="py-5 text-center w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-6" style={{ color: "var(--primary)" }}>
          REACH OUT TO US
        </h1>

        <form className="grid gap-4 py-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded p-2 text-(--foreground) border"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md p-2 text-(--foreground) border"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md p-2 text-(--foreground) border"
            value={subject}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full rounded-md p-2 text-(--foreground) border"
            rows={5}
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className="w-full rounded p-2 bg-gray-800 text-white hover:bg-gray-700"  style={{ background: "var(--gradient-primary)" }}>
            Send Message
          </button>

          {status && (
            <div
              className={`mt-3 p-2 rounded text-center ${
                status.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
