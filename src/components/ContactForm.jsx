import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    setFormData({
      name,
      email,
      message,
    });
  };
  return (
    <div className="w-1/2 flex items-center justify-center min-h-[300px] mt-14 mb-20 ml-20">
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="m-5 p-3 border-2 border-crimson bg-transparent font-cor text-golden rounded-md"
        />
        <textarea
          rows="7"
          name="message"
          placeholder="Message"
          className="bg-transparent border-2 border-crimson font-cor text-golden m-5 p-3 rounded-md"
        />
        <button
          className="bg-golden px-5 py-2 w-28 m-5 rounded-sm hover:bg-crimson"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
