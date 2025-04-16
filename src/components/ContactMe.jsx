import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Optional status msg

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

     emailjs.send(
           serviceID,
           templateID,
           formData,
           publicKey
        )

      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="py-10 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-sky-300 mb-8 text-center">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-sky-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-sky-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border border-sky-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded transition"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm text-sky-300 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default ContactMe;
